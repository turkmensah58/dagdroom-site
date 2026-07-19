import React from "react";
import Header from "../components/Header";

export default function PlaceholderPage({ path }) {
  const title = path.slice(1).replace(/^./, (letter) => letter.toUpperCase());
  return (
    <main className="placeholder-page">
      <Header brand="Dagdroøm" />
      <div><p>Dagdroøm</p><h1>{title}</h1><span>Coming soon.</span></div>
    </main>
  );
}
