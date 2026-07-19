import React from "react";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <img src="/hero.png" alt="Nordic coastal landscape" />
      </section>
      <section className="world-choice">
        <div className="world-choice__heading reveal-up">
          <p>W E L C O M E &nbsp; T O &nbsp; D Λ G D R O Ø M</p>
          <span>Two worlds. One philosophy.</span>
          <i />
          <h1>Choose your world</h1>
        </div>
        <div className="world-choice__image reveal-up reveal-delay-1">
          <img src="/menu-son.png" alt="Dagdroøm and DΛGDROØM worlds" />
          <a href="/women" className="world-choice__link world-choice__link--women" aria-label="Enter Dagdroøm" />
          <a href="/men" className="world-choice__link world-choice__link--men" aria-label="Enter DΛGDROØM" />
        </div>
      </section>
      <Footer />
    </main>
  );
}
