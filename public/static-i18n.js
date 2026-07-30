(() => {
  const supportedLanguages = ["en", "de", "sv", "tr"];
  const params = new URLSearchParams(window.location.search);
  const requestedLanguage = params.get("lang");
  const language = supportedLanguages.includes(requestedLanguage) ? requestedLanguage : "en";
  const cityMatch = window.location.pathname.match(/^\/world\/([^/]+)/);

  document.documentElement.lang = language;
  if (!cityMatch) return;

  const city = cityMatch[1];
  document.querySelectorAll('link[data-i18n-link="true"]').forEach((node) => node.remove());

  const addLink = (rel, href, hreflang) => {
    const link = document.createElement("link");
    link.rel = rel;
    link.href = href;
    if (hreflang) link.hreflang = hreflang;
    link.dataset.i18nLink = "true";
    document.head.append(link);
  };

  addLink("canonical", `${window.location.origin}/${language}/world/${city}`);
  supportedLanguages.forEach((code) => {
    addLink("alternate", `${window.location.origin}/${code}/world/${city}`, code);
  });
  addLink("alternate", `${window.location.origin}/en/world/${city}`, "x-default");
})();
