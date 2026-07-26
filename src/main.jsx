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
    src="/hero.png"
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
  <span class="season-heading-line"></span>
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

      <header class="women-header">
        <a href="/" class="women-logo" aria-label="Dagdroøm home">
          Dagdroøm
        </a>
      </header>

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
          tabindex="0"
          role="button"
          aria-label="Play Dø Flyt collection film"
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


      <section
        class="film-overlay"
        id="film-overlay"
        aria-hidden="true"
      >
        <div class="film-black-layer"></div>

        <video
          id="intro-film"
          class="intro-film"
          src="${FLYT_INTRO_URL}"
          playsinline
          preload="auto"
        ></video>

        <div class="film-gradient"></div>

        <div class="film-brand">
          <span>Dagdroøm</span>
<h2>Dø Flyt<sup>™</sup></h2>        </div>

        <button
          class="film-skip-button"
          id="film-skip-button"
          type="button"
        >
          ${text.skip}
        </button>
      </section>


      <section
        class="collection-reveal"
        id="collection-reveal"
        aria-hidden="true"
      >
        <a href="/women" class="collection-back">
          <span aria-hidden="true">←</span>
          ${text.back}
        </a>

        <div class="collection-reveal-inner">
          <p>${text.collection}</p>
          <h1>Dø Flyt™</h1>
          <div class="collection-line"></div>
          <span>${text.collectionMessage}</span>

          <button
            class="collection-replay-button"
            id="collection-replay-button"
            type="button"
          >
            ${text.replay}
          </button>
        </div>
      </section>

    </main>
  `;

  initializeWomenExperience();
}

function renderMenPage() {
  document.querySelector("#app").innerHTML = `
    <main class="men-page">

      <header class="men-header">
        <a href="/" class="men-logo" aria-label="DΛGDROØM home">
          DΛGDROØM
        </a>

        <button
          class="men-menu-button"
          type="button"
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

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

      <a href="/" class="men-back-link">
        <span aria-hidden="true">←</span>
        Back
      </a>

    </main>
  `;
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
        <span>·</span>

        <a href="/world/stockholm/">STOCKHOLM</a>
        <span>·</span>

        <a href="/world/oslo/">OSLO</a>
        <span>·</span>

        <a href="/world/reykjavik">REYKJΛVÍK</a>
      </div>
<div class="footer-tagline">
  <span>Calm.</span>
  <span>Clean.</span>
  <span>Nordic.</span>
</div>

<div class="footer-copyright">
  © 2026 Dagdroøm
</div>

      <div class="footer-line"></div>

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

  const flytCard = document.querySelector('[data-category="flyt"]');
  const filmOverlay = document.querySelector("#film-overlay");
  const introFilm = document.querySelector("#intro-film");
  const skipButton = document.querySelector("#film-skip-button");
  const collectionReveal = document.querySelector("#collection-reveal");
  const replayButton = document.querySelector("#collection-replay-button");

  if (!flytCard || !filmOverlay || !introFilm || !skipButton) {
    return;
  }

  const closeFilm = () => {
    filmOverlay.classList.add("is-leaving");

    window.setTimeout(() => {
      filmOverlay.classList.remove("is-visible", "is-leaving");
      filmOverlay.setAttribute("aria-hidden", "true");

      introFilm.pause();
      introFilm.currentTime = 0;
      document.body.classList.remove("film-is-open");

      if (collectionReveal) {
        collectionReveal.classList.add("is-visible");
        collectionReveal.setAttribute("aria-hidden", "false");
      }
    }, 600);
  };

  const openFilm = () => {
    document.body.classList.add("film-is-open");

    if (collectionReveal) {
      collectionReveal.classList.remove("is-visible");
      collectionReveal.setAttribute("aria-hidden", "true");
    }

    filmOverlay.classList.remove("is-leaving");
    filmOverlay.classList.add("is-visible");
    filmOverlay.setAttribute("aria-hidden", "false");

    introFilm.currentTime = 0;
    introFilm.muted = false;

    introFilm.play().catch(() => {
      introFilm.muted = true;
      introFilm.play().catch(() => {});
    });
  };

  flytCard.addEventListener("click", openFilm);

  flytCard.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openFilm();
    }
  });

  skipButton.addEventListener("click", closeFilm);
  introFilm.addEventListener("ended", closeFilm);

  if (replayButton) {
    replayButton.addEventListener("click", openFilm);
  }
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
