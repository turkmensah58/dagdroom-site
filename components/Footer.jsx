import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-line" />
      <nav className="footer-nav" aria-label="Footer navigation">
        <a href="/journal">JOURNAL</a>
        <a href="/manifesto">MANIFESTO</a>
        <a href="/contact">CONTACT</a>
        <a href="https://www.instagram.com/dagd.room/" target="_blank" rel="noreferrer">
          INSTAGRAM
        </a>
      </nav>
      <div className="footer-cities">
        <a href="/world/copenhagen/">COPENHAGEN</a><span>·</span>
        <a href="/world/stockholm/">STOCKHOLM</a><span>·</span>
        <a href="/world/oslo/">OSLO</a><span>·</span>
        <span>REYKJAVÍK</span>
      </div>
      <a href="/" className="footer-copy">© 2026 Dagdroøm</a>
      <div className="footer-slogan">Calm.<br /><br />Clean.<br /><br />Nordic.</div>
      <div className="footer-line" />
    </footer>
  );
}
