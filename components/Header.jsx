import React from "react";

export default function Header({ brand, tone = "light" }) {
  return (
    <header className={`brand-header brand-header--${tone}`}>
      <a href="/" className="brand-header__logo" aria-label={`${brand} home`}>
        {brand}
      </a>
      <a href="/" className="brand-header__back">
        <span aria-hidden="true">←</span>
        Back
      </a>
    </header>
  );
}
