import "./style.css";

document.querySelector("#app").innerHTML = `
<main class="site">

  <section class="hero-section">
<img src="/hero.png" class="full-image">  </section>

  <section class="choose-section">

    <img src="/second-son.png" class="full-image">

      <a href="/women" class="women-link"></a>

      <a href="/men" class="men-link"></a>

  </section>
<footer class="site-footer">

  <div class="footer-brand">
    <h2>DAGDROØM</h2>
    <p>Calm. Clean. Nordic.</p>
  </div>

  <div class="footer-locations">
    <span>Copenhagen</span>
    <span>Stockholm</span>
    <span>Oslo</span>
  </div>

  <div class="footer-market">
    <p>Available in Türkiye</p>
    <p>Established 2026</p>
  </div>

</footer>
</main>
`;
