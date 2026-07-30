export const supportedLanguages = ["en", "de", "sv", "tr"];
export const defaultLanguage = "en";

const languageNames = {
  en: "English",
  de: "Deutsch",
  sv: "Svenska",
  tr: "Türkçe"
};

function stripLanguagePrefix(pathname) {
  const segments = pathname.split("/").filter(Boolean);
  if (supportedLanguages.includes(segments[0])) segments.shift();
  return `/${segments.join("/")}`.replace(/\/$/, "") || "/";
}

function languageFromPath(pathname) {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return supportedLanguages.includes(firstSegment) ? firstSegment : null;
}

function storedLanguage() {
  try {
    const stored = window.localStorage.getItem("dagdroom-language");
    return supportedLanguages.includes(stored) ? stored : null;
  } catch {
    return null;
  }
}

const explicitLanguage = languageFromPath(window.location.pathname);
export const currentLanguage = explicitLanguage || storedLanguage() || defaultLanguage;
export const localizedRoutePath = stripLanguagePrefix(window.location.pathname);

export function pathForLanguage(pathname, language) {
  const cleanPath = stripLanguagePrefix(pathname);
  return `/${language}${cleanPath === "/" ? "" : cleanPath}`;
}

export function languageButton(language) {
  const active = language === currentLanguage;
  return `<button type="button" data-language="${language}" class="${active ? "is-active" : ""}" aria-label="${languageNames[language]}" aria-pressed="${active}">${language.toUpperCase()}</button>`;
}

function localizeInternalLinks(root) {
  root.querySelectorAll('a[href^="/"]').forEach((link) => {
    const url = new URL(link.getAttribute("href"), window.location.origin);
    if (/\.[a-z0-9]+$/i.test(url.pathname)) return;
    link.setAttribute("href", `${pathForLanguage(url.pathname, currentLanguage)}${url.search}${url.hash}`);
  });
}

function updateLanguageMetadata() {
  document.documentElement.lang = currentLanguage;

  document.querySelectorAll('link[data-i18n-link="true"]').forEach((node) => node.remove());
  const head = document.head;
  const canonical = document.createElement("link");
  canonical.rel = "canonical";
  canonical.href = new URL(pathForLanguage(localizedRoutePath, currentLanguage), window.location.origin).href;
  canonical.dataset.i18nLink = "true";
  head.append(canonical);

  supportedLanguages.forEach((language) => {
    const alternate = document.createElement("link");
    alternate.rel = "alternate";
    alternate.hreflang = language;
    alternate.href = new URL(pathForLanguage(localizedRoutePath, language), window.location.origin).href;
    alternate.dataset.i18nLink = "true";
    head.append(alternate);
  });

  const fallback = document.createElement("link");
  fallback.rel = "alternate";
  fallback.hreflang = "x-default";
  fallback.href = new URL(pathForLanguage(localizedRoutePath, defaultLanguage), window.location.origin).href;
  fallback.dataset.i18nLink = "true";
  head.append(fallback);
}

export function initializeI18n(root = document) {
  if (!explicitLanguage && currentLanguage !== defaultLanguage) {
    window.location.replace(pathForLanguage(localizedRoutePath, currentLanguage));
    return;
  }

  updateLanguageMetadata();
  localizeInternalLinks(root);

  root.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => {
      const language = button.dataset.language;
      if (!supportedLanguages.includes(language)) return;
      try { window.localStorage.setItem("dagdroom-language", language); } catch {}
      window.location.assign(pathForLanguage(localizedRoutePath, language));
    });
  });
}
