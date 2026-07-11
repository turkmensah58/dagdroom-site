import "./style.css";

document.querySelector("#app").innerHTML = `
<main class="site">

  <section class="hero-section">
<img src="/hero.png" class="full-image">  </section>

 <section class="choose-section">

  <div class="choose-heading">
   <p class="choose-eyebrow">WELCOME TO D<span class="lambda-fix">Λ</span>GDROØM</p>

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
