import React, { useState } from "react";
import Header from "../components/Header";
import CategoryCard from "../components/CategoryCard";
import FilmPlayer from "../components/FilmPlayer";

const FLYT_INTRO_URL = "https://bfet2tuqbyitomxi.public.blob.vercel-storage.com/flyt-intro.mp4";

export default function Women() {
  const [filmOpen, setFilmOpen] = useState(false);
  const [collectionOpen, setCollectionOpen] = useState(false);

  const finishFilm = () => {
    setFilmOpen(false);
    setCollectionOpen(true);
  };

  return (
    <main className="women-page">
      <Header brand="Dagdroøm" />
      <section className="women-intro reveal-up">
        <p>Dagdroøm</p>
        <h1>The Collection</h1>
        <span>A quiet wardrobe inspired by Scandinavian light, movement and timeless femininity.</span>
      </section>
      <section className="women-grid">
        <CategoryCard title="Dø Slør™" descriptor="Veil · Drape · Softness" variant="slor" />
        <CategoryCard title="Dø Skygge™" descriptor="Shadow · Stillness · Depth" variant="skygge" />
        <CategoryCard title="Dø Flyt™" descriptor="Movement · Form · Freedom" variant="flyt" videoUrl={FLYT_INTRO_URL} active onOpen={() => setFilmOpen(true)} />
      </section>
      <FilmPlayer open={filmOpen} videoUrl={FLYT_INTRO_URL} onFinish={finishFilm} />
      {collectionOpen && (
        <section className="collection-reveal" role="dialog" aria-modal="true">
          <button className="collection-reveal__back" type="button" onClick={() => setCollectionOpen(false)}>← Back</button>
          <div><p>Dagdroøm</p><h1>Dø Flyt™</h1><i /><span>The Dø Flyt™ collection is coming soon.</span><button type="button" onClick={() => { setCollectionOpen(false); setFilmOpen(true); }}>Replay film</button></div>
        </section>
      )}
    </main>
  );
}
