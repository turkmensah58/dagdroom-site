import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { getLegalPages, serviceUI } from '../src/legal-translations.js';

const paths = ['/terms', '/shipping-returns', '/privacy'];
const original = getLegalPages('tr');
const protectedNames = ['Dagdroøm', 'Veltora', 'Barış Türkmen', 'Çiğli Vergi Dairesi', 'Yurtiçi Kargo', 'iyzi Ödeme ve Elektronik Para Hizmetleri A.Ş.', 'GoDaddy E-posta Başlangıç', 'Vercel'];
const numbers = s => [...s.matchAll(/\d+/g)].map(m => m[0]).sort();
const hrefs = s => [...s.matchAll(/href="([^"]+)"/g)].map(m => m[1]).sort();
for (const language of ['tr', 'en', 'de', 'sv']) {
  const pages = getLegalPages(language);
  assert.deepEqual(Object.keys(pages), paths);
  assert.deepEqual(Object.keys(serviceUI[language]), Object.keys(serviceUI.tr));
  for (const path of paths) {
    const page = pages[path];
    assert.ok(page.title && page.intro);
    assert.equal(page.sections.length, original[path].sections.length);
    page.sections.forEach(([heading, body], i) => {
      const source = original[path].sections[i][1];
      assert.ok(heading && body);
      assert.deepEqual(numbers(body), numbers(source), `${language} ${path} section ${i}: numeric values`);
      assert.deepEqual(hrefs(body), hrefs(source), `${language} ${path} section ${i}: links`);
      for (const name of protectedNames) if (source.includes(name)) assert.ok(body.includes(name), `${language}: ${name}`);
      if (source.includes('1821/1 Sokak')) assert.ok(body.includes('1821/1 Sokak 7/9 Bostanlı Karşıyaka / İZMİR'));
      if (language !== 'tr') assert.notEqual(body, source);
    });
  }
}

// Exercise the actual page renderers without a browser, preserving their markup.
const main = fs.readFileSync(new URL('../src/main.jsx', import.meta.url), 'utf8');
const serviceRenderer = main.slice(main.indexOf('function renderServicePage('), main.indexOf('function renderNotFoundPage('));
const contactStart = main.indexOf('function renderContactPage(');
const contactRenderer = main.slice(contactStart, main.indexOf('\nfunction ', contactStart + 1));
for (const language of ['tr', 'en', 'de', 'sv']) {
  const app = { innerHTML: '' };
  const ctx = vm.createContext({
    currentLanguage: language, getLegalPages, serviceUI,
    document: { title: '', querySelector: () => app },
    renderSiteHeader: () => '', renderFooter: () => '', initializeSiteHeader: () => {}, initializeContactForm: () => {}
  });
  vm.runInContext(serviceRenderer, ctx);
  for (const path of paths) {
    vm.runInContext(`renderServicePage(${JSON.stringify(path)})`, ctx);
    assert.ok(app.innerHTML.includes(`lang="${language}" translate="no"`));
    assert.ok(app.innerHTML.includes(getLegalPages(language)[path].title));
    assert.ok(app.innerHTML.includes(`aria-label="${serviceUI[language].contents}"`));
    assert.ok(app.innerHTML.includes(`${serviceUI[language].contact} →`));
    assert.equal(ctx.document.title, `${getLegalPages(language)[path].title} — Dagdroøm`);
  }
  vm.runInContext(contactRenderer, ctx);
  vm.runInContext('renderContactPage()', ctx);
  assert.ok(app.innerHTML.includes(serviceUI[language].seller));
  assert.ok(app.innerHTML.includes('<dd>Veltora</dd>'));
  assert.ok(app.innerHTML.includes('<dd>Barış Türkmen</dd>'));
  assert.ok(app.innerHTML.includes('<dd>Dagdroøm</dd>'));
}
console.log('4 languages: all legal sections, values, names, links and contact/legal rendering passed.');
