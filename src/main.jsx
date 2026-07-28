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

${renderSiteHeader("landing")}

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

            <a href="/women#slor" class="menu-category-link menu-category-link--slor" aria-label="Open Dø Slør collection"></a>
            <a href="/women#skygge" class="menu-category-link menu-category-link--skygge" aria-label="Open Dø Skygge collection"></a>
            <a href="/women#flyt" class="menu-category-link menu-category-link--flyt" aria-label="Open Dø Flyt collection"></a>
            <a href="/men#skaer" class="menu-category-link menu-category-link--skaer" aria-label="Open Dø Skær collection"></a>
            <a href="/men#linje" class="menu-category-link menu-category-link--linje" aria-label="Open Dø Linje collection"></a>
            <a href="/men#stal" class="menu-category-link menu-category-link--stal" aria-label="Open Dø Stål collection"></a>
          </div>

            </section>

      ${renderFooter()}

       </main>
  `;

  initializeHomeExperience();
  initializeSiteHeader();
}



function renderWomenPage() {
  document.querySelector("#app").innerHTML = `
    <main class="women-page">
      ${renderSiteHeader("women")}

      <section class="women-collection-list">
        <article class="women-collection-card" data-category="slor" id="slor">
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

        <article class="women-collection-card" data-category="skygge" id="skygge">
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
          id="flyt"
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
  scrollToCurrentCollection();
}

function renderMenPage() {
  document.querySelector("#app").innerHTML = `
    <main class="men-page">
      ${renderSiteHeader("men")}

      <section class="men-collection-list">

        <article
          class="men-collection-card men-collection-card--skaer"
          data-category="skaer"
          id="skaer"
        >
          <div class="men-collection-copy">
            <div>
              <h2>Dø Skær<sup>™</sup></h2>

              <p>
                Refined form.<br>
                Natural movement.
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
          id="linje"
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
          id="stal"
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
  scrollToCurrentCollection();
}

function scrollToCurrentCollection() {
  const targetId = window.location.hash.slice(1);
  if (!targetId) return;
  const target = document.getElementById(targetId);
  if (!target) return;
  requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
}

function renderContactPage() {
  document.querySelector("#app").innerHTML = `
    <main class="contact-page">
      ${renderSiteHeader("")}

      <section class="contact-channels" aria-label="Contact departments">
        <a href="mailto:care@dagdroom.de">
          <span>01</span><h2>Customer Care</h2><p>Orders, delivery, returns and product questions.</p><small>care@dagdroom.de</small>
        </a>
        <a href="mailto:press@dagdroom.de">
          <span>02</span><h2>Press & Collaborations</h2><p>Editorial, creative projects and brand partnerships.</p><small>press@dagdroom.de</small>
        </a>
        <a href="mailto:hello@dagdroom.de">
          <span>03</span><h2>General Enquiries</h2><p>Everything that does not belong elsewhere.</p><small>hello@dagdroom.de</small>
        </a>
      </section>

      <section class="contact-form-section">
        <div class="contact-form-heading">
          <p>Send an enquiry</p>
          <span>We usually respond within 1–2 business days.</span>
        </div>

        <form class="contact-form">
          <label><span>Name</span><input name="name" type="text" autocomplete="name" required /></label>
          <label><span>Email</span><input name="email" type="email" autocomplete="email" required /></label>
          <label>
            <span>Subject</span>
            <select name="subject" required>
              <option value="General enquiry">General enquiry</option>
              <option value="Customer care">Customer care</option>
              <option value="Press and collaboration">Press & collaboration</option>
            </select>
          </label>
          <label class="contact-form-message"><span>Message</span><textarea name="message" rows="5" required></textarea></label>
          <button type="submit">Send enquiry <span aria-hidden="true">⟶</span></button>
        </form>
      </section>

      <div class="contact-social">
        <span>Follow</span>
        <a href="https://www.instagram.com/dagd.room/" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </main>
  `;

  initializeSiteHeader();
  initializeContactForm();
}

function initializeContactForm() {
  const form = document.querySelector(".contact-form");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const subject = encodeURIComponent(`[Dagdroøm] ${data.get("subject")}`);
    const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`);
    window.location.href = `mailto:hello@dagdroom.de?subject=${subject}&body=${body}`;
  });
}

function renderJournalPage() {
  const stories = [
    { number: "N° 001", city: "Copenhagen", coordinate: "55°40′N", image: "/copenhagen-55n.png.png", href: "/world/copenhagen/" },
    { number: "N° 002", city: "Stockholm", coordinate: "59°20′N", image: "/stockholm-59n.png", href: "/world/stockholm/" },
    { number: "N° 003", city: "Oslo", coordinate: "59°55′N", image: "/oslo.png", href: "/world/oslo/" }
  ];

  document.querySelector("#app").innerHTML = `
    <main class="journal-page">
      ${renderSiteHeader("")}

      <section class="journal-intro">
        <p>Notes from the North</p>
      </section>

      <section class="journal-grid" aria-label="Journal stories">
        ${stories.map(({ number, city, coordinate, image, href }) => `
          <a href="${href}" class="journal-card">
            <div class="journal-card-image">
              <img src="${image}" alt="${city}" />
            </div>
            <div class="journal-card-meta">
              <span>${number}</span>
              <h2>${city}</h2>
              <small>${coordinate}</small>
            </div>
          </a>
        `).join("")}
      </section>
    </main>
  `;

  initializeSiteHeader();
}

function renderEssensPage() {
  document.querySelector("#app").innerHTML = `
    <main class="essens-page">
      ${renderSiteHeader("")}

      <article class="essens-content">
        <div class="essens-copy">
          <p>Dagdroøm is shaped by the quiet language of the North — soft light, honest materials and forms that leave room to breathe.</p>
          <p>The Dagdroøm colour palette is drawn from the North: Arctic Mist, deep waters, pale winter light, muted Nordic landscapes and the subtle warmth of Nordic Sunset.</p>
          <p>Dagdroøm believes clothing should feel considered, never complicated. Every piece reflects a balance of clarity and character through clean silhouettes, tactile fabrics and subtle details that reveal themselves slowly.</p>
          <p>The world of Dagdroøm moves between softness and structure. Between stillness and motion. Between the feminine expression of <a class="essens-women-link" href="/women">Dagdroøm</a> and the precise, functional language of <a class="essens-men-link" href="/men">DΛGDROØM</a>.</p>
        </div>

        <div class="essens-manifesto" aria-label="Dagdroøm manifesto">
          <p>Less noise.</p>
          <p>More feeling.</p>
          <p><strong>Calm. Clean. Nordic.</strong></p>
        </div>
      </article>

      ${renderFooter()}
    </main>
  `;

  initializeSiteHeader();
}

function renderSiteHeader(activeSection = "") {
  const isLandingHeader = activeSection === "landing";
  const isCollectionHeader = activeSection === "women" || activeSection === "men";
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
    <header class="site-header${isLandingHeader ? " site-header--landing" : ""}">
      <nav class="site-navigation" aria-label="Main navigation">
        ${!isLandingHeader ? `<a href="/" class="site-back-link" aria-label="Back to main menu">
          <svg viewBox="0 0 34 12" aria-hidden="true">
            <path d="M6 1L1 6L6 11M1 6H33" />
          </svg>
        </a>` : ""}

        ${isCollectionHeader ? `<div class="site-nav-group site-nav-group--left">
          ${activeWorldLink}
        </div>` : ""}

        ${isLandingHeader ? '<a href="/" class="site-landing-wordmark" aria-label="Dagdroøm home">Dagdroøm</a>' : ""}

        <div class="site-nav-group site-nav-group--right">
          ${isCollectionHeader ? alternateWorldLink : ""}
          <a href="/search" class="site-utility-link site-search-trigger">
            <svg viewBox="0 0 18 18" aria-hidden="true"><circle cx="7.5" cy="7.5" r="4.75"/><path d="m11 11 4 4"/></svg>
            <span>Search</span>
          </a>
          <a href="/contact" class="site-utility-link">
            <svg viewBox="0 0 18 18" aria-hidden="true"><rect x="2.5" y="4" width="13" height="10" rx="0.5"/><path d="m3 5 6 4.75L15 5"/></svg>
            <span>Contact</span>
          </a>
          <a href="/account" class="site-utility-link">
            <svg viewBox="0 0 18 18" aria-hidden="true"><circle cx="9" cy="6" r="2.7"/><path d="M3.8 15c.45-2.55 2.35-4.1 5.2-4.1s4.75 1.55 5.2 4.1"/></svg>
            <span>Account</span>
          </a>
          <a href="/bag" class="site-utility-link site-bag-link site-bag-trigger">
            <svg viewBox="0 0 18 18" aria-hidden="true"><rect x="2.5" y="6" width="13" height="9" rx="0.5"/><path d="M6.25 6V4.75C6.25 3.25 7.35 2.4 9 2.4s2.75.85 2.75 2.35V6"/></svg>
            <span>Bag (0)</span>
          </a>
          <div class="site-language-switcher" aria-label="Language selection">
            <button type="button" class="is-active" aria-pressed="true">EN</button>
            <span aria-hidden="true">/</span>
            <button type="button" aria-pressed="false">DE</button>
            <span aria-hidden="true">/</span>
            <button type="button" aria-pressed="false">SV</button>
            <span aria-hidden="true">/</span>
            <button type="button" aria-pressed="false">TR</button>
          </div>
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
        ${isCollectionHeader ? `
          <a href="/women" ${activeSection === "women" ? 'aria-current="page"' : ""}>Dagdroøm <small>Women</small></a>
          <a href="/men" ${activeSection === "men" ? 'aria-current="page"' : ""}>DΛGDROØM <small>Men</small></a>
        ` : ""}
        <a href="/search" class="site-utility-link site-search-trigger">
          <svg viewBox="0 0 18 18" aria-hidden="true"><circle cx="7.5" cy="7.5" r="4.75"/><path d="m11 11 4 4"/></svg>
          <span>Search</span>
        </a>
        <a href="/contact" class="site-utility-link">
          <svg viewBox="0 0 18 18" aria-hidden="true"><rect x="2.5" y="4" width="13" height="10" rx="0.5"/><path d="m3 5 6 4.75L15 5"/></svg>
          <span>Contact</span>
        </a>
        <a href="/account" class="site-utility-link">
          <svg viewBox="0 0 18 18" aria-hidden="true"><circle cx="9" cy="6" r="2.7"/><path d="M3.8 15c.45-2.55 2.35-4.1 5.2-4.1s4.75 1.55 5.2 4.1"/></svg>
          <span>Account</span>
        </a>
        <a href="/bag" class="site-utility-link site-bag-link site-bag-trigger">
          <svg viewBox="0 0 18 18" aria-hidden="true"><rect x="2.5" y="6" width="13" height="9" rx="0.5"/><path d="M6.25 6V4.75C6.25 3.25 7.35 2.4 9 2.4s2.75.85 2.75 2.35V6"/></svg>
          <span>Bag (0)</span>
        </a>
        <div class="site-language-switcher" aria-label="Language selection">
          <button type="button" class="is-active" aria-pressed="true">EN</button>
          <span aria-hidden="true">/</span>
          <button type="button" aria-pressed="false">DE</button>
          <span aria-hidden="true">/</span>
          <button type="button" aria-pressed="false">SV</button>
          <span aria-hidden="true">/</span>
          <button type="button" aria-pressed="false">TR</button>
        </div>
        <a href="https://www.instagram.com/dagd.room/" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>

      <div class="site-search-panel" role="dialog" aria-modal="true" aria-labelledby="site-search-title" hidden>
        <div class="site-search-panel__inner">
          <div class="site-search-panel__topline">
            <p id="site-search-title">Search Dagdroøm</p>
            <button class="site-search-close" type="button" aria-label="Close search"><span></span><span></span></button>
          </div>
          <label class="site-search-field">
            <span class="sr-only">Search collections</span>
            <svg viewBox="0 0 18 18" aria-hidden="true"><circle cx="7.5" cy="7.5" r="4.75"/><path d="m11 11 4 4"/></svg>
            <input type="search" autocomplete="off" placeholder="Search collections" />
          </label>
          <div class="site-search-results" aria-live="polite"></div>
          <p class="site-search-hint">Try “Slør”, “Linje” or “Stål”</p>
        </div>
      </div>

      <div class="site-bag-panel" role="dialog" aria-modal="true" aria-labelledby="site-bag-title" hidden>
        <aside class="site-bag-drawer">
          <div class="site-bag-topline">
            <p id="site-bag-title">Bag <span>(0)</span></p>
            <button class="site-bag-close" type="button" aria-label="Close bag"><span></span><span></span></button>
          </div>

          <div class="site-bag-empty">
            <svg viewBox="0 0 42 42" aria-hidden="true"><rect x="5" y="14" width="32" height="23" rx="1"/><path d="M14 14v-3c0-4.2 2.7-6.5 7-6.5s7 2.3 7 6.5v3"/></svg>
            <h2>Your bag is empty.</h2>
            <p>Discover quiet essentials made for everyday movement.</p>
          </div>

          <button class="site-bag-continue" type="button">Continue exploring</button>
        </aside>
      </div>
    </header>
  `;
}

function initializeSiteHeader() {
  const header = document.querySelector(".site-header");
  const toggle = header?.querySelector(".site-nav-toggle");
  const menu = header?.querySelector(".site-mobile-menu");
  const searchPanel = header?.querySelector(".site-search-panel");
  const searchInput = searchPanel?.querySelector("input");
  const searchResults = searchPanel?.querySelector(".site-search-results");
  const bagPanel = header?.querySelector(".site-bag-panel");
  if (!header || !toggle || !menu) return;

  const collections = [
    { name: "Dø Slør", world: "Women", href: "/women#slor" },
    { name: "Dø Skygge", world: "Women", href: "/women#skygge" },
    { name: "Dø Flyt", world: "Women", href: "/women#flyt" },
    { name: "Dø Skær", world: "Men", href: "/men#skaer" },
    { name: "Dø Linje", world: "Men", href: "/men#linje" },
    { name: "Dø Stål", world: "Men", href: "/men#stal" }
  ];

  const setMenuState = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menu.hidden = !open;
    header.classList.toggle("is-menu-open", open);
    document.body.classList.toggle("nav-open", open);
  };

  const renderSearchResults = (query = "") => {
    if (!searchResults) return;
    const normalizedQuery = query.trim().toLocaleLowerCase("en");
    if (!normalizedQuery) {
      searchResults.innerHTML = "";
      return;
    }
    const matches = collections.filter(({ name, world }) =>
      `${name} ${world}`.toLocaleLowerCase("en").includes(normalizedQuery)
    );
    searchResults.innerHTML = matches.length
      ? matches.map(({ name, world, href }) => `
          <a href="${href}"><span>${name}</span><small>${world}</small></a>
        `).join("")
      : '<p class="site-search-empty">No collection found.</p>';
  };

  const setSearchState = (open) => {
    if (!searchPanel) return;
    searchPanel.hidden = !open;
    header.classList.toggle("is-search-open", open);
    document.body.classList.toggle("search-open", open);
    if (open) {
      setMenuState(false);
      requestAnimationFrame(() => searchInput?.focus());
    } else {
      if (searchInput) searchInput.value = "";
      renderSearchResults();
    }
  };

  const setBagState = (open) => {
    if (!bagPanel) return;
    bagPanel.hidden = !open;
    header.classList.toggle("is-bag-open", open);
    document.body.classList.toggle("bag-open", open);
    if (open) {
      setMenuState(false);
      setSearchState(false);
      requestAnimationFrame(() => bagPanel.querySelector(".site-bag-close")?.focus());
    }
  };

  toggle.addEventListener("click", () => {
    setMenuState(toggle.getAttribute("aria-expanded") !== "true");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuState(false);
      setSearchState(false);
      setBagState(false);
    }
  });

  header.querySelectorAll(".site-search-trigger").forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      setSearchState(true);
    });
  });

  searchPanel?.querySelector(".site-search-close")?.addEventListener("click", () => setSearchState(false));
  searchPanel?.addEventListener("click", (event) => {
    if (event.target === searchPanel) setSearchState(false);
  });
  searchInput?.addEventListener("input", () => renderSearchResults(searchInput.value));

  header.querySelectorAll(".site-bag-trigger").forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      setBagState(true);
    });
  });

  bagPanel?.querySelector(".site-bag-close")?.addEventListener("click", () => setBagState(false));
  bagPanel?.querySelector(".site-bag-continue")?.addEventListener("click", () => setBagState(false));
  bagPanel?.addEventListener("click", (event) => {
    if (event.target === bagPanel) setBagState(false);
  });

  header.querySelectorAll(".site-language-switcher").forEach((switcher) => {
    switcher.addEventListener("click", (event) => {
      const selected = event.target.closest("button");
      if (!selected) return;
      header.querySelectorAll(".site-language-switcher button").forEach((button) => {
        const active = button.textContent === selected.textContent;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", String(active));
      });
    });
  });
}

function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="footer-line"></div>
      <div class="footer-editorial">
        <nav aria-label="Editorial navigation">
          <a href="/essens">Essens</a>
          <a href="/journal">Journal</a>
        </nav>
      </div>

      <div class="footer-tagline">
        <span>Calm.</span>
        <span>Clean.</span>
        <span>Nordic.</span>
      </div>

      <div class="footer-bottom">
        <nav aria-label="Footer navigation">
          <a href="https://www.instagram.com/dagd.room/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </nav>
        <div class="footer-copyright">© 2026 Dagdroøm</div>
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
}

function initializeWomenExperience() {
  const hoverCards = document.querySelectorAll(".women-collection-card");
  const usesTouchLayout = window.matchMedia("(hover: none), (pointer: coarse)").matches;
  const touchVideoObserver = usesTouchLayout && "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const video = entry.target.querySelector(".women-hover-video");
          if (!video) return;
          if (entry.isIntersecting) {
            video.muted = true;
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      }, { threshold: 0.55 })
    : null;

  hoverCards.forEach((card) => {
    const video = card.querySelector(".women-hover-video");
    if (!video) return;

    const playVideo = () => {
      video.muted = true;
      video.play().catch(() => {});
    };

    const stopVideo = () => {
      video.pause();
      if (!usesTouchLayout) video.currentTime = 0;
    };

    if (touchVideoObserver) {
      touchVideoObserver.observe(card);
    } else {
      card.addEventListener("mouseenter", playVideo);
      card.addEventListener("mouseleave", stopVideo);
      card.addEventListener("focusin", playVideo);
      card.addEventListener("focusout", stopVideo);
    }
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

  if (normalizedPath === "/contact") {
    renderContactPage();
    return;
  }

  if (normalizedPath === "/journal") {
    renderJournalPage();
    return;
  }

  if (normalizedPath === "/essens") {
    renderEssensPage();
    return;
  }

  renderHomePage();
}

renderCurrentRoute();
