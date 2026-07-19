import React, { useRef } from "react";

export default function CategoryCard({ title, descriptor, variant, videoUrl, active, onOpen }) {
  const videoRef = useRef(null);

  const playPreview = () => {
    if (!active || !videoRef.current) return;
    videoRef.current.play().catch(() => {});
  };

  const stopPreview = () => {
    if (!active || !videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  const handleKeyDown = (event) => {
    if (!active) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onOpen?.();
    }
  };

  return (
    <article
      className={`category-card category-card--${variant}${active ? " is-active" : ""}`}
      tabIndex={active ? 0 : undefined}
      role={active ? "button" : undefined}
      aria-label={active ? `Explore ${title}` : `${title}, coming soon`}
      onMouseEnter={playPreview}
      onMouseLeave={stopPreview}
      onFocus={playPreview}
      onBlur={stopPreview}
      onClick={active ? onOpen : undefined}
      onKeyDown={handleKeyDown}
    >
      <div className="category-card__media">
        {active ? (
          <video ref={videoRef} src={videoUrl} muted loop playsInline preload="metadata" />
        ) : (
          <div className="category-card__placeholder"><span>Coming soon</span></div>
        )}
        <div className="category-card__veil" />
        {active && <div className="category-card__explore">Explore <span>↗</span></div>}
      </div>
      <div className="category-card__meta">
        <h2>{title}</h2>
        <p>{descriptor}</p>
      </div>
    </article>
  );
}
