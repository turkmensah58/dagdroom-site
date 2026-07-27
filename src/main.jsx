import "./style.css";
const FLYT_INTRO_URL =
  "https://bfet2tuqbyitomxi.public.blob.vercel-storage.com/sonnnnn.mp4";

const translations = {
  en: {
    welcome: "W E L C O M E   T O   D Λ G D R O Ø M",
    philosophy: "Two worlds. One philosophy.",
    chooseWorld: "Choose your world",
   womenEyebrow: "Dagdroøm",
womenTitle: "The Collection",
enter: "Explore",
    comingSoon: "Coming soon",
    skip: "Skip film",
    replay: "Replay film",
    back: "Back",
    collection: "Collection",
    collectionMessage: "The Dø Flyt™ collection is coming soon.",
  },

  tr: {
    welcome: "DAGDROØM'A HOŞ GELDİNİZ",
    philosophy: "İki dünya. Tek felsefe.",
    chooseWorld: "Dünyanı seç",
   womenEyebrow: "Dagdroøm",
womenTitle: "Koleksiyon",
enter: "Keşfet",
    comingSoon: "Yakında",
    skip: "Filmi geç",
    replay: "Filmi tekrar oynat",
    back: "Geri",
    collection: "Koleksiyon",
    collectionMessage: "Dø Flyt™ koleksiyonu yakında.",
  },
};

const currentLanguage = "en";
const text = translations[currentLanguage];

function renderHomePage() {
  document.querySelector("#app").innerHTML = `
    <main class="site">

      <section
  class="hero-section"
  id="home-hero"
  role="button"
  tabindex="0"
  aria-label="Continue to choose your world"
>
  <img
    src="/hero-premium.png"
    class="full-image"
    alt="Dagdroøm Nordic landscape"
  />

  <button
    class="hero-scroll-button"
    id="hero-scroll-button"
    type="button"
    aria-label="Scroll to choose your world"
  >
    ↓
  </button>
</section>

<section class="choose-section" id="choose-world">
         <div class="season-heading">
  ΛUTUMN / WINTER ’26
</div>

          <div class="choose-image-wrap">
            <img
              src="/menu-son.png"
              class="choose-world-image"
              alt="Dagdroøm women and men"
            />

            <a
              href="/women"
              class="women-link"
              aria-label="Enter Dagdroøm "
            ></a>

            <a
              href="/men"
              class="men-link"
              aria-label="Enter DΛGDROØM"
            ></a>
          </div>

            </section>

      ${renderFooter()}

       </main>
  `;

  initializeHomeExperience();
}



function renderWomenPage() {
  document.querySelector("#app").innerHTML = `
    <main class="women-page">
      ${renderSiteHeader("women")}

      <section class="women-collection-list">
        <article class="women-collection-card" data-category="slor">
          <div class="women-collection-copy">
            <div>
              <h2>Dø Slør<sup>™</sup></h2>
              <p>Soft silhouettes.<br />Feminine essentials.</p>
            </div>

            <a href="/women/slor" class="women-enter-link">
              <span>Enter Collection</span>
              <span class="women-enter-arrow" aria-hidden="true">⟶</span>
            </a>
          </div>

          <div class="women-collection-media">
            <video
              class="women-hover-video"
              src="/slor-cover.mp4"
              muted
              loop
              playsinline
              preload="metadata"
            ></video>
          </div>
        </article>

        <article class="women-collection-card" data-category="skygge">
          <div class="women-collection-copy">
            <div>
              <h2>Dø Skygge<sup>™</sup></h2>
              <p>Quiet layers.<br />Nordic tailoring.</p>
            </div>

            <a href="/women/skygge" class="women-enter-link">
              <span>Enter Collection</span>
              <span class="women-enter-arrow" aria-hidden="true">⟶</span>
            </a>
          </div>

          <div class="women-collection-media">
            <video
              class="women-hover-video"
              src="https://bfet2tuqbyitomxi.public.blob.vercel-storage.com/skygge%20video.mp4"
              muted
              loop
              playsinline
              preload="metadata"
            ></video>
          </div>
        </article>

        <article
          class="women-collection-card women-collection-card--flyt"
          data-category="flyt"
        >
          <div class="women-collection-copy">
            <div>
              <h2>Dø Flyt<sup>™</sup></h2>
              <p>Technical movement.<br />Everyday comfort.</p>
            </div>

            <button class="women-enter-link women-enter-button" type="button">
              <span>Enter Collection</span>
              <span class="women-enter-arrow" aria-hidden="true">⟶</span>
            </button>
          </div>

          <div class="women-collection-media">
            <video
              class="women-hover-video category-hover-video"
              src="${FLYT_INTRO_URL}"
              muted
              loop
              playsinline
              preload="metadata"
            ></video>
          </div>
        </article>
      </section>

    </main>
  `;

  initializeSiteHeader();
  initializeWomenExperience();
}

function renderMenPage() {
  document.querySelector("#app").innerHTML = `
    <main class="men-page">
      ${renderSiteHeader("men")}

      <section class="men-collection-list">

        <article
          class="men-collection-card men-collection-card--skaer"
          data-category="skaer"
        >
          <div class="men-collection-copy">
            <div>
              <h2>Dø Skær<sup>™</sup></h2>

              <p>
                Sharp performance.<br>
                Technical movement.
              </p>
            </div>

            <button class="men-enter-link" type="button">
              <span>Enter Collection</span>
              <span class="men-enter-arrow" aria-hidden="true">⟶</span>
            </button>
          </div>

          <div class="men-collection-media">
            <img
              src="/men-skaer.jpg"
              alt="Dø Skær collection"
              class="men-collection-image"
            >
          </div>
        </article>


        <article
          class="men-collection-card men-collection-card--linje"
          data-category="linje"
        >
          <div class="men-collection-copy">
            <div>
              <h2>Dø Linje<sup>™</sup></h2>

              <p>
                Timeless tailoring.<br>
                Essential elegance.
              </p>
            </div>

            <button class="men-enter-link" type="button">
              <span>Enter Collection</span>
              <span class="men-enter-arrow" aria-hidden="true">⟶</span>
            </button>
          </div>

          <div class="men-collection-media">
            <img
              src="/men-linje.jpg"
              alt="Dø Linje collection"
              class="men-collection-image"
            >
          </div>
        </article>


        <article
          class="men-collection-card men-collection-card--stal"
          data-category="stal"
        >
          <div class="men-collection-copy">
            <div>
         <h2>Dø Stål<sup class="men-tm-stal">™</sup></h2>

              <p>
                Built for everyday.<br>
                Ironclad masculinity.
              </p>
            </div>

            <button class="men-enter-link" type="button">
              <span>Enter Collection</span>
              <span class="men-enter-arrow" aria-hidden="true">⟶</span>
            </button>
          </div>

          <div class="men-collection-media">
            <img
              src="/men-stal.jpg"
              alt="Dø Stål collection"
              class="men-collection-image"
            >
          </div>
        </article>

      </section>

    </main>
  `;

  initializeSiteHeader();
}

function renderSiteHeader(activeSection = "") {
  const womenLink = `
    <a href="/women" ${activeSection === "women" ? 'aria-current="page"' : ""}>
      <span class="site-nav-name">Dagdroøm</span>
      <span class="site-nav-label">Women</span>
    </a>
  `;
  const menLink = `
    <a href="/men" ${activeSection === "men" ? 'aria-current="page"' : ""}>
      <span class="site-nav-name site-nav-name--men">DΛGDROØM</span>
      <span class="site-nav-label">Men</span>
    </a>
  `;
  const activeWorldLink = activeSection === "men" ? menLink : womenLink;
  const alternateWorldLink = activeSection === "men" ? womenLink : menLink;

  return `
    <header class="site-header">
      <nav class="site-navigation" aria-label="Main navigation">
        <div class="site-nav-group site-nav-group--left">
          ${activeWorldLink}
        </div>

        <div class="site-nav-group site-nav-group--right">
          ${alternateWorldLink}
          <a href="/journal">Journal</a>
          <a href="/manifesto">Manifesto</a>
        </div>

        <button
          class="site-nav-toggle"
          type="button"
          aria-label="Open menu"
          aria-expanded="false"
          aria-controls="site-mobile-menu"
        >
          <span></span>
          <span></span>
        </button>
      </nav>

      <div class="site-mobile-menu" id="site-mobile-menu" hidden>
        <a href="/women" ${activeSection === "women" ? 'aria-current="page"' : ""}>Dagdroøm <small>Women</small></a>
        <a href="/men" ${activeSection === "men" ? 'aria-current="page"' : ""}>DΛGDROØM <small>Men</small></a>
        <a href="/journal">Journal</a>
        <a href="/manifesto">Manifesto</a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </header>
  `;
}

function initializeSiteHeader() {
  const header = document.querySelector(".site-header");
  const toggle = header?.querySelector(".site-nav-toggle");
  const menu = header?.querySelector(".site-mobile-menu");
  if (!header || !toggle || !menu) return;

  const setMenuState = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menu.hidden = !open;
    header.classList.toggle("is-menu-open", open);
    document.body.classList.toggle("nav-open", open);
  };

  toggle.addEventListener("click", () => {
    setMenuState(toggle.getAttribute("aria-expanded") !== "true");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuState(false);
  });
}

function renderFooter() {
  return `
    <footer class="site-footer">

      <div class="footer-line"></div>

      <nav class="footer-nav">
        <a href="/journal">JOURNΛL</a>
        <a href="/manifesto">MΛNIFESTO</a>
        <a href="/contact">CONTΛCT</a>

        <a
          href="https://www.instagram.com/dagd.room/"
          target="_blank"
          rel="noopener noreferrer"
        >
          INSTΛGRΛM
        </a>
      </nav>

      <div class="footer-cities">
        <a href="/world/copenhagen/">COPENHΛGEN</a>

        <a href="/world/stockholm/">STOCKHOLM</a>

        <a href="/world/oslo/">OSLO</a>

        <a href="/world/reykjavik">REYKJΛVÍK</a>
      </div>
<div class="footer-signature">
<div class="footer-tagline">
  <span>Calm.</span>
  <span>Clean.</span>
  <span>Nordic.</span>
</div>

<div class="footer-copyright">
  © 2026 Dagdroøm
</div>
</div>

    </footer>
  `;
}
function initializeHomeExperience() {
  const hero = document.querySelector("#home-hero");
  const scrollButton = document.querySelector("#hero-scroll-button");
  const chooseWorld = document.querySelector("#choose-world");

  if (!hero || !scrollButton || !chooseWorld) {
    return;
  }

  let scrollLocked = false;

  const goToChooseWorld = () => {
    if (scrollLocked) return;

    scrollLocked = true;

    chooseWorld.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setTimeout(() => {
      scrollLocked = false;
    }, 900);
  };

  hero.addEventListener("click", goToChooseWorld);

  scrollButton.addEventListener("click", (e) => {
    e.stopPropagation();
    goToChooseWorld();
  });

  hero.addEventListener(
    "wheel",
    (event) => {
      if (event.deltaY > 0) {
        event.preventDefault();
        goToChooseWorld();
      }
    },
    { passive: false }
  );
}function initializeWomenExperience() {
  const hoverCards = document.querySelectorAll(".women-collection-card");

  hoverCards.forEach((card) => {
    const video = card.querySelector(".women-hover-video");

    if (!video) return;

   const playVideo = () => {
  console.log("PLAY", card.dataset.category);
  video.muted = true;
  video.play().catch(err => console.error(err));
};

const stopVideo = () => {
  video.pause();
  video.currentTime = 0;
};
    card.addEventListener("mouseenter", playVideo);
    card.addEventListener("mouseleave", stopVideo);
    card.addEventListener("focusin", playVideo);
    card.addEventListener("focusout", stopVideo);
  });

}
  function renderCurrentRoute() {
  const normalizedPath =
    window.location.pathname.replace(/\/+$/, "") || "/";

  if (normalizedPath === "/women") {
    renderWomenPage();
    return;
  }

  if (normalizedPath === "/men") {
    renderMenPage();
    return;
  }

  renderHomePage();
}

renderCurrentRoute();
