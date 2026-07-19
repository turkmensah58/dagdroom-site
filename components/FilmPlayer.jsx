import React, { useEffect, useRef } from "react";

export default function FilmPlayer({ open, videoUrl, onFinish }) {
  const videoRef = useRef(null);

  useEffect(() => {
    document.body.classList.toggle("film-is-open", open);
    const video = videoRef.current;
    if (!open || !video) return;

    video.currentTime = 0;
    video.muted = false;
    video.play().catch(() => {
      video.muted = true;
      video.play().catch(() => {});
    });

    return () => {
      video.pause();
      document.body.classList.remove("film-is-open");
    };
  }, [open]);

  if (!open) return null;

  return (
    <section className="film-player" aria-modal="true" role="dialog" aria-label="Dø Flyt film">
      <video ref={videoRef} src={videoUrl} playsInline preload="auto" onEnded={onFinish} />
      <div className="film-player__shade" />
      <div className="film-player__brand"><span>Dagdroøm</span><h2>Dø Flyt™</h2></div>
      <button type="button" onClick={onFinish}>Skip film</button>
    </section>
  );
}
