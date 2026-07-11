import "./style.css";

document.querySelector("#app").innerHTML = `
<main class="site">

  <section class="hero-section">
<img src="/hero.png" class="full-image">  </section>

 <section class="choose-section">

  <div class="choose-heading">
   <p class="choose-eyebrow">
  WELCOME TO D<span class="logo-a">A</span>GDROØM
</p>

    <h1>Choose your world</h1>

    <span class="choose-divider"></span>

    <p class="choose-subtitle">Two worlds. One philosophy.</p>
  </div>

  <div class="choose-image-wrap">
    <img src="/menu-son.png" class="choose-world-image">

    <a href="/women" class="women-link"></a>

    <a href="/men" class="men-link"></a>
  </div>

</section>
  </section>
<footer class="site-footer">

  <div class="footer-line"></div>

  <nav class="footer-nav">
    <a href="/journal">JOURNAL</a>
    <a href="/manifesto">MANIFESTO</a>
    <a href="/contact">CONTACT</a>
<a href="https://www.instagram.com/dagd.room/" target="_blank" rel="noopener noreferrer">
  INSTAGRAM
</a>  </nav>

  <div class="footer-cities">
    <a href="/world/copenhagen/">COPENHAGEN</a>
    <span>·</span>

    <a href="/world/stockholm/">STOCKHOLM</a>
    <span>·</span>
<a href="/world/oslo/">OSLO</a>
    <span>·</span>

    <a href="/world/reykjavik">REYKJAVÍK</a>
  </div>

  <a href="/" class="footer-copy">
    © 2026 Dagdroøm
  </a>

  <div class="footer-slogan">
  Calm.<br /><br />
  Clean.<br /><br />
  Nordic.
</div>

  <div class="footer-line"></div>

</footer>

</main>
`;
.lambda-fix {
  color: #666;
  font-weight: 300;
}
.logo-a {
  position: relative;
  display: inline-block;
  color: transparent;
  width: 0.72em;
}

.logo-a::before,
.logo-a::after {
  content: "";
  position: absolute;
  bottom: 0.05em;
  width: 1px;
  height: 0.9em;
  background: currentColor;
  background: #111;
  transform-origin: bottom center;
}

.logo-a::before {
  left: 0.18em;
  transform: rotate(24deg);
}

.logo-a::after {
  right: 0.18em;
  transform: rotate(-24deg);
}
