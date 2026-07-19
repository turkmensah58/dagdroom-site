import React from "react";
import Header from "../components/Header";

const lines = [
  ["Dø Skær™", "Edge · Cut · Precision"],
  ["Dø Linje™", "Line · Form · Essential"],
  ["Dø Stål™", "Steel · Structure · Strength"],
];

export default function Men() {
  return (
    <main className="men-page">
      <Header brand="DΛGDROØM" tone="dark" />
      <section className="men-hero reveal-up">
        <p>DΛGDROØM</p>
        <h1>Technical.<br />Functional.<br />Essential.</h1>
        <span>A disciplined wardrobe shaped by line, structure and quiet strength.</span>
      </section>
      <section className="men-collections">
        {lines.map(([title, descriptor], index) => (
          <article key={title} className="men-collection reveal-up" style={{ animationDelay: `${0.14 * index}s` }}>
            <span>0{index + 1}</span><h2>{title}</h2><p>{descriptor}</p><em>Coming soon</em>
          </article>
        ))}
      </section>
    </main>
  );
}
