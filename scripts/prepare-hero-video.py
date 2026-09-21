"""Rebuild the existing hero directly from its source, without a lossy intermediate.

Requires Python with opencv-python/numpy and an H.264-capable FFmpeg binary.
Run from the site directory; pass the original video and FFmpeg paths explicitly.
The crop and lettering regions are specific to the approved 1276x720 hero.
"""
import argparse
from pathlib import Path
import subprocess

import cv2
import numpy as np

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--source', required=True, type=Path)
parser.add_argument('--ffmpeg', required=True, type=Path)
parser.add_argument('--output', required=True, type=Path)
parser.add_argument('--poster', required=True, type=Path)
args = parser.parse_args()
if args.source.resolve() in (args.output.resolve(), args.poster.resolve()):
    raise ValueError('Outputs must not overwrite the source')
capture = cv2.VideoCapture(str(args.source))
if not capture.isOpened():
    raise ValueError('Cannot open source video')
width, height = (int(capture.get(p)) for p in (cv2.CAP_PROP_FRAME_WIDTH, cv2.CAP_PROP_FRAME_HEIGHT))
fps = capture.get(cv2.CAP_PROP_FPS)
expected_frames = int(capture.get(cv2.CAP_PROP_FRAME_COUNT))
if (width, height) != (1276, 720) or abs(fps-24) > .01:
    raise ValueError('This repair is only calibrated for the original 1276x720, 24 fps hero')
capture.release()
args.output.parent.mkdir(parents=True, exist_ok=True)
args.poster.parent.mkdir(parents=True, exist_ok=True)
decoder = subprocess.Popen([
    str(args.ffmpeg), '-hide_banner', '-loglevel', 'error', '-i', str(args.source),
    '-map', '0:v:0', '-an', '-f', 'rawvideo', '-pix_fmt', 'yuv420p', 'pipe:1',
], stdout=subprocess.PIPE)
encoder = subprocess.Popen([
    str(args.ffmpeg), '-hide_banner', '-loglevel', 'error', '-y',
    '-f', 'rawvideo', '-pixel_format', 'yuv420p', '-video_size', '1276x668',
    '-framerate', '24', '-i', 'pipe:0', '-an', '-c:v', 'libx264',
    '-preset', 'slow', '-crf', '17', '-pix_fmt', 'yuv420p',
    '-profile:v', 'high', '-level:v', '3.1', '-maxrate', '10M', '-bufsize', '20M',
    '-g', '48', '-movflags', '+faststart', str(args.output),
], stdin=subprocess.PIPE)
count = 0
frame_bytes = width*height*3//2
def read_frame():
    chunks = bytearray()
    while len(chunks)<frame_bytes:
        chunk = decoder.stdout.read(frame_bytes-len(chunks))
        if not chunk:
            break
        chunks.extend(chunk)
    if chunks and len(chunks)!=frame_bytes:
        raise RuntimeError('Truncated decoded frame')
    return chunks

def planes(packed):
    flat=packed.reshape(-1)
    y_end=width*height
    u_end=y_end+y_end//4
    return flat[:y_end].reshape(height,width), flat[y_end:u_end].reshape(height//2,width//2), flat[u_end:].reshape(height//2,width//2)

try:
    while True:
        raw = read_frame()
        if not raw:
            break
        original_yuv=np.frombuffer(raw,dtype=np.uint8).reshape(height*3//2,width)
        frame=cv2.cvtColor(original_yuv,cv2.COLOR_YUV2BGR_I420)
        # Keep the established repair bounds. Narrower/fixed masks left outlines
        # and geometric artifacts in the sun reflection during frame comparison.
        mask = np.zeros((height, width), dtype=np.uint8)
        for x1,y1,x2,y2,threshold in [(378,278,920,405,42),(450,405,845,460,65)]:
            region = frame[y1:y2,x1:x2].astype(np.int16)
            white = (region.min(axis=2)>155) & ((region.max(axis=2)-region.min(axis=2))<threshold)
            mask[y1:y2,x1:x2] = white.astype(np.uint8)*255
        mask = cv2.dilate(mask,np.ones((5,5),dtype=np.uint8))
        clean = cv2.inpaint(frame,mask,4,cv2.INPAINT_TELEA)
        if count == 0 and not cv2.imwrite(str(args.poster),clean[:668],[cv2.IMWRITE_JPEG_QUALITY,95]):
            raise RuntimeError('Could not write poster')
        repaired_planes=planes(cv2.cvtColor(clean,cv2.COLOR_BGR2YUV_I420))
        # Preserve source Y/U/V samples outside the repaired lettering; a full
        # RGB round trip introduces unnecessary color error across the scenery.
        chroma_mask=cv2.resize(mask,(width//2,height//2),interpolation=cv2.INTER_AREA)>0
        for original,repaired,selected,rows in zip(planes(original_yuv),repaired_planes,[mask>0,chroma_mask,chroma_mask],[668,334,334]):
            original[selected]=repaired[selected]
            encoder.stdin.write(original[:rows].tobytes())
        count += 1
        if count % 48 == 0:
            print(f'Processed {count}/{expected_frames} frames',flush=True)
finally:
    decoder.stdout.close()
    if count!=expected_frames:
        decoder.terminate()
    decoder_code=decoder.wait()
    encoder.stdin.close()
    exit_code = encoder.wait()
if exit_code != 0 or decoder_code != 0 or count != expected_frames:
    raise RuntimeError(f'Incomplete encode: exit={exit_code}, frames={count}/{expected_frames}')
print(f'Encoded {count} frames at native 1276x668 / 24 fps: {args.output.stat().st_size:,} bytes',flush=True)
