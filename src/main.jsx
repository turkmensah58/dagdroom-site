import "./style.css";

document.querySelector("#app").innerHTML = `
<main class="site">

  <section class="hero-section">
<img src="/hero.png" class="full-image" />

 <section class="choose-section">

<div class="choose-heading">
  <div class="choose-eyebrow">WELCOME TO DΛGDROØM</div>

  <div class="choose-philosophy">
    Two worlds. One philosophy.
  </div>

  <div class="choose-divider"></div>

  <h1 class="choose-title">Choose your world</h1>
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
.choose-heading {
  width: 100%;
  text-align: center;
  background: transparent;
  padding: 70px 20px 60px;
  box-sizing: border-box;
}

.choose-eyebrow {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 17px;
  font-weight: 300;
  letter-spacing: 0.42em;
  color: #1b1b1b;
  margin-bottom: 44px;
}

.choose-philosophy {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 26px;
  font-weight: 300;
  line-height: 1.2;
  color: #111;
}

.choose-divider {
  width: 68px;
  height: 1px;
  background: #222;
  margin: 28px auto 20px;
}

.choose-title {
  margin: 0;
  font-family: "Times New Roman", Georgia, serif;
  font-size: clamp(72px, 8vw, 142px);
  font-weight: 400;
  line-height: 0.95;
  letter-spacing: -0.04em;
  color: #050505;
}

@media (max-width: 768px) {
  .choose-heading {
    padding: 48px 18px 42px;
  }

  .choose-eyebrow {
    font-size: 10px;
    letter-spacing: 0.28em;
    margin-bottom: 28px;
  }

  .choose-philosophy {
    font-size: 18px;
  }

  .choose-divider {
    width: 44px;
    margin: 22px auto 18px;
  }

  .choose-title {
    font-size: clamp(48px, 14vw, 72px);
    line-height: 1;
  }
}
