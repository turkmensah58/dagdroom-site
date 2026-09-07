import "./style.css";
import {
  currentLanguage,
  initializeI18n,
  languageButton,
  localizedRoutePath,
  translate
} from "./i18n.js";
import { INTERNATIONAL_CHECKOUT_ENABLED, currencyForLanguage, priceForProduct } from "../shared/pricing.js";
const FLYT_INTRO_URL = "/flyt-card.mp4";
const activeCurrency = currencyForLanguage(currentLanguage);
const EUR_TRY_FALLBACK_RATE = 55.87;
const EXCHANGE_RATE_CACHE_KEY = "dagdroom-eur-try-rate-v1";
let eurTryRate = EUR_TRY_FALLBACK_RATE;
let eurTryRateDate = "";

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

const text = translations[currentLanguage] || translations.en;

const collectionCatalog = [
  {
    slug: "slor",
    world: "women",
    name: "Dø Slør™",
    statement: "Soft silhouettes. Feminine essentials.",
    description: "An exploration of lightness, quiet volume and pieces designed to move naturally through the day.",
    image: "/slor-arctic-fog.png",
    tone: "arctic"
  },
  {
    slug: "skygge",
    world: "women",
    name: "Dø Skygge™",
    statement: "Quiet layers. Nordic tailoring.",
    description: "Soft structure and considered layering, shaped through muted tones and a calm, feminine precision.",
    image: "/skygge-soft-tone.png",
    tone: "shadow"
  },
  {
    slug: "flyt",
    world: "women",
    name: "Dø Flyt™",
    statement: "Technical movement. Everyday comfort.",
    description: "A fluid wardrobe balancing ease, performance and the warmth of Nordic Sunset.",
    image: "/flyt-nordic-sunset.png",
    tone: "sunset"
  },
  {
    slug: "skaer",
    world: "men",
    name: "Dø Skær™",
    statement: "Refined form. Natural movement.",
    description: "Precise everyday forms created for movement, restraint and a quietly assured masculine silhouette.",
    image: "/menu-son.png",
    tone: "charcoal"
  },
  {
    slug: "linje",
    world: "men",
    name: "Dø Linje™",
    statement: "Timeless tailoring. Essential elegance.",
    description: "A study in proportion and line, where tailored clarity meets the ease of daily wear.",
    image: "/menu-son.png",
    tone: "stone"
  },
  {
    slug: "stal",
    world: "men",
    name: "Dø Stål™",
    statement: "Built for everyday. Ironclad masculinity.",
    description: "Functional foundations shaped through durability, clean construction and understated strength.",
    image: "/menu-son.png",
    tone: "steel"
  }
];

// Demo records: replace these fields with the final product data and imagery.
const productCatalog = [
  {
    slug: "slor-air-dress", collection: "slor", collectionName: "Dø Slør™", world: "women",
    name: "Air Dress", price: "€240 · Demo", priceCents: 24000, images: ["/slor-arctic-fog.png"],
    description: "A light everyday silhouette with quiet volume and fluid movement.",
    sizes: ["XS", "S", "M", "L"], material: "Demo material", care: "Demo care", fit: "Relaxed", delivery: "Demo only", inStock: true
  },
  {
    slug: "skygge-belted-wool-coat", collection: "skygge", collectionName: "Dø Skygge™", world: "women",
    name: "Belted Wool Coat", price: "€143", priceCents: 14300, images: ["/skygge-belted-wool-coat-front.png", "/skygge-belted-wool-coat-back.png", "/skygge-belted-wool-coat-model-front.png", "/skygge-belted-wool-coat-model-side.png", "/skygge-belted-wool-coat-model-back.png"],
    description: "Built around a long, clean and feminine silhouette, the Belted Wool Coat is a timeless outerwear piece defined by its wide collar, waist-shaping belt and understated lines. Structured shoulders and a fluid longline cut make it equally suited to everyday dressing and more refined combinations.",
    descriptionTr: "Uzun, temiz ve feminen bir silüet üzerine kurulan Belted Wool Coat; geniş yakası, bele oturan kuşağı ve sade hatlarıyla zamansız bir dış giyim parçası. Yapılandırılmış omuz formu ve akıcı uzunluğu sayesinde hem günlük hem daha rafine kombinlerde kullanılabilir.",
    sizes: ["XS", "S", "M", "L", "XL"],
    material: "95% Viscose, 5% Elastane", materialTr: "%95 Viskon, %5 Elastan",
    care: "Details coming soon", careTr: "Detaylar yakında",
    fit: "Long belted fit", fitTr: "Uzun, kuşaklı kesim",
    delivery: "Sold out", deliveryTr: "Tükendi", inStock: false, status: "sold-out", isDemo: false
  },
  {
    slug: "flyt-motion-top", collection: "flyt", collectionName: "Dø Flyt™", world: "women",
    name: "Burgundy Sculpted Tracksuit", price: "€180 · Demo", priceCents: 18000, images: ["/flyt-motion-top-model-third.png", "/flyt-motion-top-model-profile.png"],
    description: "A technical essential balancing comfort, movement and a clean Nordic line.",
    sizes: ["XS", "S", "M", "L", "XL"], material: "Demo material", care: "Demo care", fit: "Close", delivery: "Demo only", inStock: true
  },
  {
    slug: "flyt-ivory-linen-pyjama", collection: "flyt", collectionName: "Dø Flyt™", world: "women",
    name: "IVORY LINEN PYJAMA", images: [
      "/flyt-ivory-linen-pyjama-v2.png",
      "/flyt-ivory-linen-pyjama-model-front.png",
      "/flyt-ivory-linen-pyjama-model-back.png"
    ],
    description: "A lightweight short pyjama set in soft ivory, finished with deep navy piping, a relaxed camp collar and an easy elasticated waist.",
    descriptionTr: "Yumuşak fildişi tonunda, lacivert biyelerle tamamlanan hafif şortlu pijama takımı; rahat kamp yakası ve esnek beliyle konforlu bir silüet sunar.",
    sizes: ["XS", "S", "M", "L", "XL"], colors: [{ name: "Ivory", value: "#f2eee5" }],
    material: "Details coming soon", materialTr: "Detaylar yakında",
    care: "Details coming soon", careTr: "Detaylar yakında",
    fit: "Relaxed fit", fitTr: "Rahat kesim",
    delivery: "Coming soon", deliveryTr: "Yakında", inStock: false, isDemo: false
  },
  {
    slug: "flyt-nocturne-pyjama", collection: "flyt", collectionName: "Dø Flyt™", world: "women",
    name: "NOCTURNE PYJAMA", images: [
      "/flyt-nocturne-pyjama-front.png",
      "/flyt-nocturne-pyjama-side.png",
      "/flyt-nocturne-pyjama-back.png"
    ],
    description: "A fluid long pyjama set in deep black with fine champagne piping, shaped with a relaxed notched collar and an easy straight-leg silhouette.",
    descriptionTr: "İnce şampanya rengi biyelerle tamamlanan, derin siyah ve akışkan uzun pijama takımı; rahat çentikli yakası ve düz paça silüetiyle tasarlandı.",
    sizes: ["XS", "S", "M", "L", "XL"], colors: [{ name: "Nocturne Black", value: "#0b0b0b" }],
    material: "Details coming soon", materialTr: "Detaylar yakında",
    care: "Details coming soon", careTr: "Detaylar yakında",
    fit: "Relaxed straight fit", fitTr: "Rahat düz kesim",
    delivery: "Coming soon", deliveryTr: "Yakında", inStock: false, isDemo: false
  },
  {
    slug: "skaer-motion-overshirt", collection: "skaer", collectionName: "Dø Skær™", world: "men",
    name: "Motion Overshirt", price: "€260 · Demo", priceCents: 26000, images: ["/menu-son.png"],
    description: "A precise outer layer shaped for natural movement and restrained utility.",
    sizes: ["S", "M", "L", "XL"], material: "Demo material", care: "Demo care", fit: "Regular", delivery: "Demo only", inStock: true
  },
  {
    slug: "linje-double-breasted-blazer", collection: "linje", collectionName: "Dø Linje™", world: "men",
    name: "Double-Breasted Blazer", price: "€105", priceCents: 10500, images: ["/linje-double-breasted-blazer-front.png", "/linje-double-breasted-blazer-back.png", "/linje-double-breasted-blazer-model-front.png", "/linje-double-breasted-blazer-model-side.png", "/linje-double-breasted-blazer-model-back.png"],
    description: "Designed in all black with tonal details to work as a complete suit with tailored trousers or as a standalone piece. Double-breasted cut · 6-button front · Peak lapels · Chest pocket · Flap side pockets · Long sleeves · Tonal black buttons · D<span class=\"product-brand-lambda\">Λ</span>GDROØM label inside the collar.",
    descriptionTr: "Tamamen siyah tasarımı ve tonal detayları sayesinde hem takım pantolonuyla bütünlüklü hem de tek başına kullanılmak üzere tasarlandı. Kruvaze kesim · 6 düğmeli ön tasarım · Sivri yaka · Göğüs cebi · Kapaklı yan cepler · Uzun kol · Tonal siyah düğmeler · İç yaka D<span class=\"product-brand-lambda\">Λ</span>GDROØM etiketi.",
    descriptionDe: "Das vollständig schwarze Design mit tonalen Details ist sowohl als kompletter Anzug mit passender Hose als auch als Einzelstück konzipiert. Zweireihiger Schnitt · 6-Knopf-Front · Steigendes Revers · Brusttasche · Seitliche Pattentaschen · Lange Ärmel · Tonale schwarze Knöpfe · D<span class=\"product-brand-lambda\">Λ</span>GDROØM-Label im Innenkragen.",
    descriptionSv: "Den helsvarta designen med tonala detaljer är skapad för att bäras både som en komplett kostym med skräddade byxor och som ett fristående plagg. Dubbelknäppt snitt · 6-knappsfront · Spetsiga slag · Bröstficka · Sidofickor med lock · Lång ärm · Tonala svarta knappar · D<span class=\"product-brand-lambda\">Λ</span>GDROØM-etikett på insidan av kragen.",
    sizes: ["S", "M", "L", "XL"], material: "70% Wool, 28% Viscose, 2% Elastane. 100% Cupro lining.", materialTr: "%70 Yün, %28 Viskon, %2 Elastan. %100 Cupro astar.", materialDe: "70 % Wolle, 28 % Viskose, 2 % Elasthan. Futter aus 100 % Cupro.", materialSv: "70 % ull, 28 % viskos, 2 % elastan. Foder i 100 % cupro.", care: "Professional dry clean only. Iron at low temperature.", careTr: "Yalnızca profesyonel kuru temizleme. Düşük ısıda ütüleme.", careDe: "Nur professionelle chemische Reinigung. Bei niedriger Temperatur bügeln.", careSv: "Endast professionell kemtvätt. Stryk på låg temperatur.", fit: "Double-breasted", fitTr: "Kruvaze kesim", fitDe: "Zweireihiger Schnitt", fitSv: "Dubbelknäppt snitt", delivery: "Sold out", deliveryTr: "Tükendi", deliveryDe: "Ausverkauft", deliverySv: "Slutsåld", inStock: false, status: "sold-out", isDemo: false
  },
  {
    slug: "linje-tailored-trousers", collection: "linje", collectionName: "Dø Linje™", world: "men",
    name: "Tailored Trousers", price: "€89", priceCents: 8900, images: ["/linje-tailored-trousers-front.png", "/linje-tailored-trousers-back.png", "/linje-double-breasted-blazer-model-front.png", "/linje-double-breasted-blazer-model-side.png", "/linje-double-breasted-blazer-model-back.png"],
    description: "Tailored Trousers are designed around clean lines and a balanced silhouette. A mid-rise waist, straight-leg cut and defined pressed creases bring classic tailoring together with modern Nordic minimalism. Wear them alone or complete the look with the Dø Linje™ Double-Breasted Blazer. Regular straight fit · Mid-rise waist · Pressed front creases · Side pockets · Two buttoned back welt pockets · Belt loops · Tonal black detailing.",
    descriptionTr: "Tailored Trousers, sade çizgiler ve dengeli bir silüet üzerine tasarlandı. Orta bel yapısı, düz paça kesimi ve belirgin ütü çizgileriyle klasik tailoring’i modern Nordic minimalizmiyle buluşturur. Tek başına veya Dø Linje™ Double-Breasted Blazer ile tamamlanabilir. Regular straight fit · Mid-rise waist · Pressed front creases · Side pockets · Two buttoned back welt pockets · Belt loops · Tonal black detailing.",
    descriptionDe: "Die Tailored Trousers verbinden klare Linien mit einer ausgewogenen Silhouette. Mittlere Leibhöhe, gerades Bein und markante Bügelfalten vereinen klassische Schneiderkunst mit modernem nordischem Minimalismus. Solo tragbar oder kombiniert mit dem Dø Linje™ Double-Breasted Blazer. Reguläre gerade Passform · Mittlere Leibhöhe · Bügelfalten vorn · Seitentaschen · Zwei geknöpfte Leistentaschen hinten · Gürtelschlaufen · Tonale schwarze Details.",
    descriptionSv: "Tailored Trousers är formgivna med rena linjer och en balanserad silhuett. Medelhög midja, raka ben och markerade pressveck förenar klassiskt skrädderi med modern nordisk minimalism. Bär dem separat eller tillsammans med Dø Linje™ Double-Breasted Blazer. Rak normal passform · Medelhög midja · Pressveck fram · Sidofickor · Två knappförsedda passpoalfickor bak · Bälteshällor · Tonala svarta detaljer.",
    sizes: ["44", "46", "48", "50", "52"], colors: [{ name: "Charcoal Black", value: "#1b1c1d" }],
    material: "53% Virgin Wool, 43% Polyester, 4% Elastane. A premium wool-rich blend with light stretch, shape retention and a clean drape.", materialTr: "%53 Saf Yün, %43 Polyester, %4 Elastan. Formunu koruyan, hafif esnek ve düzgün dökümlü, yün ağırlıklı premium karışım.", materialDe: "53 % Schurwolle, 43 % Polyester, 4 % Elasthan. Eine hochwertige Wollmischung mit leichtem Stretch, Formbeständigkeit und klarem Fall.", materialSv: "53 % ny ull, 43 % polyester, 4 % elastan. En premium ullrik blandning med lätt stretch, formbeständighet och rent fall.",
    care: "Dry clean only. Do not bleach. Do not tumble dry. Iron at low temperature. Air on a hanger after wear.", careTr: "Yalnızca kuru temizleme. Ağartıcı kullanmayın. Tamburlu kurutma yapmayın. Düşük ısıda ütüleyin. Kullanım sonrasında askıda havalandırın.", careDe: "Nur chemisch reinigen. Nicht bleichen. Nicht im Trockner trocknen. Bei niedriger Temperatur bügeln. Nach dem Tragen auf einem Bügel auslüften.", careSv: "Endast kemtvätt. Använd inte blekmedel. Torktumla inte. Stryk på låg temperatur. Lufta på galge efter användning.",
    fit: "Regular straight fit", fitTr: "Regular düz kesim", fitDe: "Reguläre gerade Passform", fitSv: "Rak normal passform", delivery: "Sold out", deliveryTr: "Tükendi", deliveryDe: "Ausverkauft", deliverySv: "Slutsåld", inStock: false, status: "sold-out", isDemo: false
  },
  {
    slug: "linje-no-01-leather-derby", collection: "linje", collectionName: "Dø Linje™", world: "men",
    name: "No. 01 Leather Derby", price: "€189", priceCents: 18900, images: ["/linje-no-01-leather-derby-left.png", "/linje-no-01-leather-derby-right.png", "/linje-no-01-leather-derby-top.png", "/linje-double-breasted-blazer-model-front.png", "/linje-double-breasted-blazer-model-side.png", "/linje-double-breasted-blazer-model-back.png"],
    description: "No. 01 Leather Derby is a distilled interpretation of the classic men's shoe. Clean lines, measured proportions and an upper stripped of unnecessary detail carry Dø Linje's quiet, timeless character. The rounded toe and tonal black laces create a balanced silhouette that moves easily from tailoring to more casual combinations.",
    descriptionTr: "No. 01 Leather Derby, klasik erkek ayakkabısının en saf haline indirgenmiş bir yorumudur. Temiz hatlar, ölçülü oranlar ve gereksiz detaylardan arındırılmış üst yüzey, Dø Linje’nin sessiz ve zamansız karakterini taşır. Yuvarlatılmış burun formu ve tonal siyah bağcıklar, takım parçalarından daha gündelik kombinlere kadar kullanılabilecek dengeli bir silüet oluşturur.",
    descriptionDe: "Der No. 01 Leather Derby ist eine auf das Wesentliche reduzierte Interpretation des klassischen Herrenschuhs. Klare Linien, ausgewogene Proportionen und ein von überflüssigen Details befreites Obermaterial tragen den ruhigen, zeitlosen Charakter von Dø Linje. Die abgerundete Spitze und tonalen schwarzen Schnürsenkel schaffen eine ausgewogene Silhouette für Anzüge ebenso wie für lässigere Kombinationen.",
    descriptionSv: "No. 01 Leather Derby är en renodlad tolkning av den klassiska herrskon. Rena linjer, väl avvägda proportioner och en ovandel fri från överflödiga detaljer bär Dø Linjes stillsamma och tidlösa karaktär. Den rundade tån och tonala svarta snörningen skapar en balanserad silhuett som fungerar till både skräddade och ledigare kombinationer.",
    sizes: ["40", "41", "42", "43", "44", "45"], colors: [{ name: "Obsidian Black", value: "#080808" }],
    material: "Upper: 100% Full-Grain Calf Leather. Lining: 100% Calf Leather. Insole: Vegetable-Tanned Leather. Outsole: Leather with a discreet rubber heel insert.",
    materialTr: "Üst yüzey: %100 sırça dana derisi. Astar: %100 dana derisi. İç taban: Bitkisel tabaklanmış deri. Dış taban: Gizli kauçuk topuk parçalı deri.",
    materialDe: "Obermaterial: 100 % vollnarbiges Kalbsleder. Futter: 100 % Kalbsleder. Innensohle: pflanzlich gegerbtes Leder. Laufsohle: Leder mit dezentem Gummieinsatz am Absatz.",
    materialSv: "Ovandelen: 100 % fullnarvigt kalvskinn. Foder: 100 % kalvskinn. Innersula: vegetabiliskt garvat läder. Yttersula: läder med diskret gummiinlägg i hälen.",
    care: "Wipe the surface with a soft, dry cloth after each wear. Use a high-quality neutral or black leather cream to preserve the leather's natural character. Keep away from direct heat and prolonged moisture. If wet, allow to dry naturally at room temperature. Store with cedar shoe trees to help retain its shape.",
    careTr: "Her kullanımdan sonra yumuşak, kuru bir bezle yüzeyi temizleyin. Derinin doğal yapısını korumak için renksiz veya siyah kaliteli deri kremi kullanın. Doğrudan ısı ve uzun süreli nemden uzak tutun. Islandığında oda sıcaklığında doğal olarak kurumaya bırakın. Formunu koruması için sedir ağacı ayakkabı kalıbıyla muhafaza edilmesi önerilir.",
    careDe: "Die Oberfläche nach jedem Tragen mit einem weichen, trockenen Tuch reinigen. Eine hochwertige farblose oder schwarze Ledercreme verwenden. Direkte Hitze und anhaltende Feuchtigkeit vermeiden. Bei Nässe bei Raumtemperatur natürlich trocknen lassen. Zur Formerhaltung mit Schuhspannern aus Zedernholz lagern.",
    careSv: "Torka av ytan med en mjuk, torr trasa efter varje användning. Använd en högkvalitativ neutral eller svart läderkräm för att bevara lädrets naturliga karaktär. Undvik direkt värme och långvarig fukt. Låt skon lufttorka i rumstemperatur om den blir våt. Förvara med skoblock av cederträ för att behålla formen.",
    fit: "True to size", fitTr: "Normal kalıp", fitDe: "Größengerecht", fitSv: "Normal i storleken", delivery: "Sold out", deliveryTr: "Tükendi", deliveryDe: "Ausverkauft", deliverySv: "Slutsåld", inStock: false, status: "sold-out", isDemo: false
  },
  {
    slug: "linje-leather-trench-coat", collection: "linje", collectionName: "Dø Linje™", world: "men",
    name: "Leather Trench Coat", price: "€300", priceCents: 30000, images: ["/linje-leather-trench-coat-front.png", "/linje-leather-trench-coat-back.png", "/linje-leather-trench-coat-detail.png", "/linje-leather-trench-coat-model-front.png", "/linje-leather-trench-coat-model-side.png", "/linje-leather-trench-coat-model-back.png"],
    description: "A Dø Linje interpretation of classic trench-coat architecture. Its long, clean silhouette carries a strong yet understated character through a wide collar, shoulder epaulettes, back storm flap and tonal belt. Black hardware and minimal exterior branding keep the focus on material and form. Double-breasted front closure · Adjustable waist belt · Shoulder epaulettes · Back storm flap · Adjustable cuff straps · Side pockets · Tonal black hardware · Below-knee length.",
    descriptionTr: "Klasik trench coat mimarisinin Dø Linje yorumuyla yeniden ele alınmış hâli. Uzun ve temiz silüeti; geniş yakası, omuz apoletleri, arka fırtına kapağı ve tonal kemeriyle güçlü fakat gösterişsiz bir karakter taşır. Siyah donanım ve minimum dış marka kullanımı, tasarımın materyal ve forma odaklanmasını sağlar. Kruvaze ön kapama · Ayarlanabilir bel kemeri · Omuz apoletleri · Arka fırtına kapağı · Ayarlanabilir manşet kemerleri · Yan cepler · Tonal siyah donanım · Diz altı uzunluk.",
    descriptionDe: "Eine Neuinterpretation der klassischen Trenchcoat-Architektur aus der Perspektive von Dø Linje. Die lange, klare Silhouette wirkt durch den breiten Kragen, Schulterriegel, die Rückenpelerine und den tonalen Gürtel kraftvoll und zugleich zurückhaltend. Schwarze Beschläge und minimales äußeres Branding rücken Material und Form in den Mittelpunkt. Zweireihiger Verschluss · Verstellbarer Taillengürtel · Schulterriegel · Rückenpelerine · Verstellbare Ärmelriegel · Seitentaschen · Tonale schwarze Beschläge · Länge unterhalb des Knies.",
    descriptionSv: "En Dø Linje-tolkning av den klassiska trenchcoatens arkitektur. Den långa, rena silhuetten får en stark men återhållsam karaktär genom bred krage, axelklaffar, stormok bak och tonalt skärp. Svarta metalldetaljer och minimal yttre märkning låter material och form stå i centrum. Dubbelknäppt stängning · Justerbart midjeskärp · Axelklaffar · Stormok bak · Justerbara ärmremmar · Sidofickor · Tonala svarta metalldetaljer · Längd nedanför knät.",
    sizes: ["S", "M", "L", "XL"], colors: [{ name: "Obsidian Black", value: "#080808" }],
    material: "Outer: 100% Full-Grain Calf Leather. Lining: 100% Cupro.", materialTr: "Dış: %100 sırça dana derisi. Astar: %100 Cupro.", materialDe: "Obermaterial: 100 % vollnarbiges Kalbsleder. Futter: 100 % Cupro.", materialSv: "Yttermaterial: 100 % fullnarvigt kalvskinn. Foder: 100 % cupro.",
    care: "Do not wash, bleach, tumble dry or iron. Professional leather cleaning only. When not in use, store on a wide-shouldered hanger in a cool, dry place. Keep away from direct sunlight, high humidity and heat sources.",
    careTr: "Yıkamayın · Ağartıcı kullanmayın · Kurutma makinesinde kurutmayın · Ütülemeyin · Yalnızca profesyonel deri temizliği yaptırın. Kullanılmadığında geniş omuzlu askıda, serin ve kuru ortamda saklayın. Doğrudan güneş ışığı, yoğun nem ve ısı kaynaklarından uzak tutun.",
    careDe: "Nicht waschen, bleichen, im Trockner trocknen oder bügeln. Nur professionelle Lederreinigung. Bei Nichtgebrauch auf einem breiten Kleiderbügel an einem kühlen, trockenen Ort lagern. Direkte Sonne, hohe Luftfeuchtigkeit und Wärmequellen vermeiden.",
    careSv: "Tvätta, blek, torktumla eller stryk inte. Endast professionell läderrengöring. Förvara på en bredaxlad galge på en sval och torr plats när plagget inte används. Undvik direkt solljus, hög luftfuktighet och värmekällor.",
    fit: "Long regular fit", fitTr: "Uzun regular kesim", fitDe: "Lange reguläre Passform", fitSv: "Lång normal passform", delivery: "Sold out", deliveryTr: "Tükendi", deliveryDe: "Ausverkauft", deliverySv: "Slutsåld", inStock: false, status: "sold-out", isDemo: false
  },
  {
    slug: "skygge-soft-turtleneck-soft-sand", collection: "skygge", collectionName: "Dø Skygge™", world: "women",
    name: "Soft Turtleneck — Soft Sand", price: "€26.56", priceCents: 2656, images: ["/linje-soft-turtleneck-soft-sand-front.png", "/linje-soft-turtleneck-soft-sand-back.png"],
    description: "A fine turtleneck designed for effortless everyday layering, defined by its minimal silhouette and soft texture. Its clean, close-fitting shape works equally well on its own or beneath jackets and coats.",
    descriptionTr: "Minimal silüeti ve yumuşak dokusuyla günlük katmanlamaya uyum sağlayan ince boğazlı üst. Vücuda oturan sade formu, tek başına veya ceket ve kabanların altında kullanıma uygundur.",
    sizes: ["XS", "S", "M", "L"], colors: [{ name: "Soft Sand", value: "#c8b39d" }],
    material: "Details coming soon", materialTr: "Detaylar yakında",
    care: "Details coming soon", careTr: "Detaylar yakında",
    fit: "Close fit", fitTr: "Vücuda oturan kesim",
    delivery: "Sold out", deliveryTr: "Tükendi", inStock: false, status: "sold-out", isDemo: false
  },
  {
    slug: "stal-utility-jacket", collection: "stal", collectionName: "Dø Stål™", world: "men",
    name: "Utility Jacket", price: "€310 · Demo", priceCents: 31000, images: ["/menu-son.png"],
    description: "A durable everyday layer with understated structure and functional clarity.",
    sizes: ["S", "M", "L", "XL"], material: "Demo material", care: "Demo care", fit: "Relaxed", delivery: "Demo only", inStock: true
  }
];

const BAG_STORAGE_KEY = "dagdroom-bag-v1";
let demoBagItems = loadBag();

function loadBag() {
  try {
    const saved = JSON.parse(localStorage.getItem(BAG_STORAGE_KEY) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function saveBag() {
  localStorage.setItem(BAG_STORAGE_KEY, JSON.stringify(demoBagItems));
}

function formatMoney(cents, currency = activeCurrency) {
  if (cents === null || cents === undefined) return currentLanguage === "tr" ? "TL fiyatı yakında" : "Price unavailable";
  return new Intl.NumberFormat(document.documentElement.lang || "en", {
    style: "currency", currency
  }).format(cents / 100);
}

function productPrice(slug) {
  return priceForProduct(slug, activeCurrency);
}

function formatProductPrice(slug, isDemo = false) {
  const euroCents = priceForProduct(slug, "EUR");
  if (euroCents === null) return currentLanguage === "tr" ? "Fiyat yakında" : "Price unavailable";
  const demoLabel = isDemo ? " · Demo" : "";
  if (currentLanguage !== "tr") return `${formatMoney(euroCents, "EUR")}${demoLabel}`;
  const tryCents = Math.round(euroCents * eurTryRate);
  return `${formatMoney(euroCents, "EUR")} · ≈ ${formatMoney(tryCents, "TRY")}${demoLabel}`;
}

function updateVisibleProductPrices() {
  document.querySelectorAll("[data-product-price]").forEach((element) => {
    element.textContent = formatProductPrice(element.dataset.productPrice, element.dataset.demo === "true");
    if (currentLanguage === "tr") {
      element.title = `Günlük EUR/TRY referans kuru: ${eurTryRate.toLocaleString("tr-TR")}${eurTryRateDate ? ` (${eurTryRateDate})` : ""}`;
    }
  });
}

async function refreshEurTryRate() {
  if (currentLanguage !== "tr") return;
  try {
    const cached = JSON.parse(localStorage.getItem(EXCHANGE_RATE_CACHE_KEY) || "null");
    if (cached?.rate > 0) {
      eurTryRate = cached.rate;
      eurTryRateDate = cached.date || "";
      updateVisibleProductPrices();
    }
    if (cached?.savedAt && Date.now() - cached.savedAt < 6 * 60 * 60 * 1000) return;

    const response = await fetch("https://api.frankfurter.dev/v1/latest?base=EUR&symbols=TRY");
    if (!response.ok) throw new Error("Exchange rate request failed");
    const data = await response.json();
    if (!Number.isFinite(data?.rates?.TRY) || data.rates.TRY <= 0) throw new Error("Invalid exchange rate");
    eurTryRate = data.rates.TRY;
    eurTryRateDate = data.date || "";
    localStorage.setItem(EXCHANGE_RATE_CACHE_KEY, JSON.stringify({ rate: eurTryRate, date: eurTryRateDate, savedAt: Date.now() }));
    updateVisibleProductPrices();
  } catch {
    updateVisibleProductPrices();
  }
}

function localizedProductField(product, field) {
  const languageSuffix = { tr: "Tr", de: "De", sv: "Sv" }[currentLanguage] || "";
  return product[`${field}${languageSuffix}`] || product[field];
}

const productPageLabels = {
  en: { sizes: "Sizes", material: "Material", care: "Care", fit: "Fit", delivery: "Availability", add: "Add to bag", soldOut: "Sold Out", comingSoon: "Coming Soon" },
  tr: { sizes: "Bedenler", material: "Malzeme", care: "Bakım", fit: "Kalıp", delivery: "Stok durumu", add: "Sepete ekle", soldOut: "Tükendi", comingSoon: "Yakında" },
  de: { sizes: "Größen", material: "Material", care: "Pflege", fit: "Passform", delivery: "Verfügbarkeit", add: "In den Warenkorb", soldOut: "Ausverkauft", comingSoon: "Demnächst" },
  sv: { sizes: "Storlekar", material: "Material", care: "Skötsel", fit: "Passform", delivery: "Tillgänglighet", add: "Lägg i varukorgen", soldOut: "Slutsåld", comingSoon: "Kommer snart" }
};

const collectionDemoColors = {
  slor: [{ name: "Arctic White", value: "#ecebe8" }, { name: "Fog", value: "#c9cbd0" }, { name: "Taupe", value: "#9e8f86" }],
  skygge: [{ name: "Shadow", value: "#756a66" }, { name: "Stone", value: "#b8aea8" }, { name: "Black", value: "#1c1d1e" }],
  flyt: [{ name: "Nordic Sand", value: "#dfbea7" }, { name: "Cream", value: "#eee4d7" }, { name: "Charcoal", value: "#343536" }],
  skaer: [{ name: "Black", value: "#1e2022" }, { name: "Graphite", value: "#55595d" }, { name: "Oat", value: "#c9c0b2" }],
  linje: [{ name: "Black", value: "#090909" }],
  stal: [{ name: "Steel", value: "#7d8993" }, { name: "Black", value: "#202225" }, { name: "Ice", value: "#cfd5d8" }]
};

function buildDemoCollectionProducts(products, collection) {
  if (!products.length) return [];
  const base = products[0];
  const womenNames = [base.name, "Layer Top", "Soft Trouser", "Quiet Jacket"];
  const menNames = [base.name, "Tailored Trouser", "Soft Knit", "Utility Jacket"];
  const names = collection.world === "women" ? womenNames : menNames;
  const womenImages = [collection.image, "/slor-arctic-fog.png", "/skygge-soft-tone.png", "/flyt-nordic-sunset.png"];
  const menImages = [collection.image, "/menu-son.png", "/second-son.png", "/choose-world.png"];
  const images = collection.world === "women" ? womenImages : menImages;
  const prices = [base.price, "€210 · Demo", "€230 · Demo", "€280 · Demo"];
  const priceCents = [base.priceCents, 21000, 23000, 28000];
  const collectionColors = collectionDemoColors[collection.slug] || [];
  const realProducts = products.slice(0, 4).map((product) => ({
    ...product,
    detailSlug: product.slug,
    colors: product.colors || collectionColors.slice(0, 1),
    productType: product.name.split(" ").pop()
  }));
  const demoProducts = names.slice(realProducts.length).map((name, offset) => {
    const index = realProducts.length + offset;
    return {
      ...base,
      slug: `${base.slug}-demo-${index + 1}`,
      detailSlug: base.slug,
      name,
      price: prices[index],
      priceCents: priceCents[index],
      images: [images[index]],
      isDemo: true,
      colors: collectionColors.filter((_, colorIndex) => colorIndex === index % 3 || colorIndex === (index + 1) % 3),
      productType: name.split(" ").pop(),
      description: `${collection.statement} A temporary visual placeholder for the future collection.`
    };
  });

  return [...realProducts, ...demoProducts];
}

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
  <video
    id="hero-video"
    class="full-image"
    autoplay
    muted
    loop
    playsinline
    preload="auto"
    poster="/hero-dagdroom-sunset.png"
    aria-hidden="true"
  >
    <source src="/hero-video.mp4" type="video/mp4" />
  </video>

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

      ${renderFooter(true)}

       </main>
  `;

  initializeHomeExperience();
  initializeSiteHeader();
}



function renderWomenPage() {
  document.querySelector("#app").innerHTML = `
    <main class="women-page">
      ${renderSiteHeader("women")}

      <div class="women-collection-kicker">COLLECTIONS — <span class="brand-lambda">Λ</span>UTUMN / WINTER ’26</div>

      <section class="women-collection-list">
        <article class="women-collection-card" data-category="slor" data-href="/collections/slor" id="slor" tabindex="0" role="link">
          <div class="women-collection-copy">
            <div>
              <h2>Dø Slør<sup>™</sup></h2>
              <p>Soft silhouettes.<br />Feminine essentials.</p>
            </div>

            <a href="/collections/slor" class="women-enter-link">
              <span>Explore</span>
              <span class="women-enter-arrow" aria-hidden="true">⟶</span>
            </a>
          </div>

          <div class="women-collection-media">
            <video
              class="women-hover-video"
              src="/slor-card.mp4"
              muted
              loop
              playsinline
              preload="metadata"
            ></video>
          </div>
        </article>

        <article class="women-collection-card" data-category="skygge" data-href="/collections/skygge" id="skygge" tabindex="0" role="link">
          <div class="women-collection-copy">
            <div>
              <h2>Dø Skygge<sup>™</sup></h2>
              <p>Quiet layers.<br />Nordic tailoring.</p>
            </div>

            <a href="/collections/skygge" class="women-enter-link">
              <span>Explore</span>
              <span class="women-enter-arrow" aria-hidden="true">⟶</span>
            </a>
          </div>

          <div class="women-collection-media">
            <video
              class="women-hover-video"
              src="/skygge-card.mp4"
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
          data-href="/collections/flyt"
          id="flyt"
          tabindex="0"
          role="link"
        >
          <div class="women-collection-copy">
            <div>
              <h2>Dø Flyt<sup>™</sup></h2>
              <p>Technical movement.<br />Everyday comfort.</p>
            </div>

            <a href="/collections/flyt" class="women-enter-link women-enter-button">
              <span>Explore</span>
              <span class="women-enter-arrow" aria-hidden="true">⟶</span>
            </a>
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

      ${renderFooter()}

    </main>
  `;

  const collectionList = document.querySelector(".women-collection-list");
  const flytCard = collectionList?.querySelector('[data-category="flyt"]');
  const slorCard = collectionList?.querySelector('[data-category="slor"]');
  const skyggeCard = collectionList?.querySelector('[data-category="skygge"]');
  if (collectionList && flytCard && slorCard && skyggeCard) {
    collectionList.append(flytCard, slorCard, skyggeCard);
  }

  initializeSiteHeader();
  initializeWomenExperience();
  scrollToCurrentCollection();
}

function renderMenPage() {
  document.querySelector("#app").innerHTML = `
    <main class="men-page">
      ${renderSiteHeader("men")}

      <div class="men-collection-kicker">COLLECTIONS — <span class="brand-lambda">Λ</span>UTUMN / WINTER ’26</div>

      <section class="men-collection-list">

        <article
          class="men-collection-card men-collection-card--skaer"
          data-category="skaer"
          data-href="/collections/skaer"
          id="skaer"
          tabindex="0"
          role="link"
        >
          <div class="men-collection-copy">
            <div>
              <h2>Dø Skær<sup>™</sup></h2>

              <p>
                Refined form.<br>
                Natural movement.
              </p>
            </div>

            <a href="/collections/skaer" class="men-enter-link">
              <span>Explore</span>
              <span class="men-enter-arrow" aria-hidden="true">⟶</span>
            </a>
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
          data-href="/collections/linje"
          id="linje"
          tabindex="0"
          role="link"
        >
          <div class="men-collection-copy">
            <div>
              <h2>Dø Linje<sup>™</sup></h2>

              <p>
                Timeless tailoring.<br>
                Essential elegance.
              </p>
            </div>

            <a href="/collections/linje" class="men-enter-link">
              <span>Explore</span>
              <span class="men-enter-arrow" aria-hidden="true">⟶</span>
            </a>
          </div>

          <div class="men-collection-media">
            <video
              src="/linje-card.mp4"
              aria-label="Dø Linje collection"
              class="men-collection-image"
              autoplay
              muted
              loop
              playsinline
              preload="metadata"
            ></video>
          </div>
        </article>


        <article
          class="men-collection-card men-collection-card--stal"
          data-category="stal"
          data-href="/collections/stal"
          id="stal"
          tabindex="0"
          role="link"
        >
          <div class="men-collection-copy">
            <div>
         <h2>Dø Stål<sup class="men-tm-stal">™</sup></h2>

              <p>
                Built for everyday.<br>
                Ironclad masculinity.
              </p>
            </div>

            <a href="/collections/stal" class="men-enter-link">
              <span>Explore</span>
              <span class="men-enter-arrow" aria-hidden="true">⟶</span>
            </a>
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

      ${renderFooter()}

    </main>
  `;

  const menCollectionList = document.querySelector(".men-collection-list");
  const skaerCard = menCollectionList?.querySelector('[data-category="skaer"]');
  const stalCard = menCollectionList?.querySelector('[data-category="stal"]');
  const linjeCard = menCollectionList?.querySelector('[data-category="linje"]');
  if (menCollectionList && skaerCard && stalCard && linjeCard) {
    menCollectionList.append(skaerCard, stalCard, linjeCard);
  }

  initializeSiteHeader();
  initializeMenExperience();
  scrollToCurrentCollection();
}

function initializeMenExperience() {
  document.querySelectorAll(".men-collection-card").forEach((card) => {
    const destination = card.dataset.href;
    const openCollection = () => {
      if (destination) window.location.href = destination;
    };

    card.addEventListener("click", (event) => {
      if (event.target.closest("a, button")) return;
      openCollection();
    });

    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      openCollection();
    });
  });
}

function scrollToCurrentCollection() {
  const targetId = window.location.hash.slice(1);
  if (!targetId) return;
  const target = document.getElementById(targetId);
  if (!target) return;
  requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
}

function renderCollectionPage(slug) {
  const collection = collectionCatalog.find((item) => item.slug === slug);
  if (!collection) {
    renderHomePage();
    return;
  }

  const products = productCatalog.filter((product) => product.collection === slug);
  const displayProducts = buildDemoCollectionProducts(products, collection);
  const collectionLabel = {
    slor: "Slør", skygge: "Skygge", flyt: "Flyt",
    skaer: "Skær", linje: "Linje", stal: "Stål"
  }[slug] || collection.name;
  const filterColors = collectionDemoColors[slug] || [];
  const productTypes = [...new Set(displayProducts.map((product) => product.productType))];
  const previewSubject = encodeURIComponent(`${collection.name} — Private preview`);

  document.title = `${collection.name} — Dagdroøm`;
  document.querySelector("#app").innerHTML = `
    <main class="catalog-page catalog-page--${collection.tone}">
      ${renderSiteHeader(collection.world)}

      <section class="catalog-hero">
        <div class="catalog-hero-copy">
          <p class="catalog-eyebrow">${collection.world === "women" ? "Dagdroøm Women" : "DΛGDROØM Men"}</p>
          <h1>${collectionLabel} ${translate("Collection")}</h1>
          <p class="catalog-statement">${collection.statement}</p>
          <p class="catalog-description">${collection.description}</p>
        </div>
        <div class="catalog-hero-media">
          <img src="${collection.image}" alt="${collection.name} collection atmosphere" />
        </div>
      </section>

      <div class="catalog-view-options" aria-label="Catalog controls">
        <button type="button" class="catalog-filter-button" aria-expanded="false" aria-controls="catalog-filter-panel">Filter</button>
      </div>

      <aside class="catalog-filter-panel" id="catalog-filter-panel" hidden>
        <section>
          <h2>Collection</h2>
          <div class="catalog-filter-links">
            ${collectionCatalog.map((item) => `<a href="/collections/${item.slug}" ${item.slug === slug ? 'aria-current="page"' : ""}>${item.name.replace("Dø ", "").replace("™", "")}</a>`).join("")}
          </div>
        </section>
        <section>
          <h2>Colour</h2>
          <div class="catalog-filter-options">
            ${filterColors.map((color) => `<button type="button" data-filter-color="${color.name}" aria-pressed="false"><span style="--swatch: ${color.value}"></span>${color.name}</button>`).join("")}
          </div>
        </section>
        <section>
          <h2>Product Type</h2>
          <div class="catalog-filter-options">
            ${productTypes.map((type) => `<button type="button" data-filter-type="${type}" aria-pressed="false">${type}</button>`).join("")}
          </div>
        </section>
        <button type="button" class="catalog-filter-clear">Clear filters</button>
      </aside>

      <section class="catalog-products" aria-labelledby="catalog-products-title">
        <div class="catalog-products-heading">
          <p id="catalog-products-title">The first edit</p>
          <span class="catalog-product-count">${displayProducts.length ? `${displayProducts.length} pieces · Demo selection` : "In development"}</span>
        </div>
        ${displayProducts.length ? `
          <div class="product-grid">
            ${displayProducts.map((product) => `
              <article class="product-card" data-product-slug="${product.slug}" data-product-type="${product.productType}" data-product-colors="${product.colors.map((color) => color.name).join("|")}">
                <a href="/products/${product.detailSlug || product.slug}" class="product-card-media">
                  <img src="${product.images[0]}" alt="${product.name}" loading="lazy" />
                </a>
                <div class="product-card-information">
                  <div class="product-card-name-row">
                    <h2><a href="/products/${product.detailSlug || product.slug}">${product.name}</a></h2>
                    ${product.status === "sold-out" ? `<span class="product-card-status">Sold Out</span>` : product.isDemo ? "" : `<span class="product-card-status">New</span>`}
                  </div>
                  <div class="product-card-meta">
                    <span class="product-card-price" data-product-price="${product.slug}" data-demo="${Boolean(product.isDemo)}">${formatProductPrice(product.slug, product.isDemo)}</span>
                    <span class="product-card-swatches" aria-label="Available colors">
                      ${product.colors.map((color) => `<span class="product-card-swatch" title="${color.name}" style="--swatch: ${color.value}"></span>`).join("")}
                    </span>
                  </div>
                </div>
              </article>
            `).join("")}
          </div>
        ` : `
          <div class="catalog-empty">
            <p class="catalog-empty-index">01 / 01</p>
            <h2>Arriving quietly.</h2>
            <p>The first pieces are being refined. No placeholder products, invented prices or artificial stock — only the final collection will be presented here.</p>
            <a href="mailto:hello@dagdroom.de?subject=${previewSubject}">Request private preview <span aria-hidden="true">⟶</span></a>
          </div>
        `}
      </section>

      ${renderFooter()}
    </main>
  `;

  initializeSiteHeader();
  initializeCatalogProducts(displayProducts);
}

function initializeCatalogProducts(displayProducts) {
  const productGrid = document.querySelector(".product-grid");
  const viewButtons = document.querySelectorAll(".catalog-view-options button:not(.catalog-filter-button)");
  const filterButton = document.querySelector(".catalog-filter-button");
  const filterPanel = document.querySelector(".catalog-filter-panel");
  const colorFilters = document.querySelectorAll("[data-filter-color]");
  const typeFilters = document.querySelectorAll("[data-filter-type]");
  const clearFilters = document.querySelector(".catalog-filter-clear");
  const productCount = document.querySelector(".catalog-product-count");
  let activeColor = "";
  let activeType = "";

  const applyFilters = () => {
    let visibleCount = 0;
    document.querySelectorAll(".product-card").forEach((card) => {
      const colors = (card.dataset.productColors || "").split("|");
      const matchesColor = !activeColor || colors.includes(activeColor);
      const matchesType = !activeType || card.dataset.productType === activeType;
      card.hidden = !(matchesColor && matchesType);
      if (!card.hidden) visibleCount += 1;
    });
    if (productCount) productCount.textContent = `${visibleCount} ${translate("pieces · Demo selection")}`;
  };

  filterButton?.addEventListener("click", () => {
    const open = filterButton.getAttribute("aria-expanded") !== "true";
    filterButton.setAttribute("aria-expanded", String(open));
    if (filterPanel) filterPanel.hidden = !open;
  });

  colorFilters.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.dataset.filterColor || "";
      activeColor = activeColor === value ? "" : value;
      colorFilters.forEach((item) => item.setAttribute("aria-pressed", String(item.dataset.filterColor === activeColor)));
      applyFilters();
    });
  });

  typeFilters.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.dataset.filterType || "";
      activeType = activeType === value ? "" : value;
      typeFilters.forEach((item) => item.setAttribute("aria-pressed", String(item.dataset.filterType === activeType)));
      applyFilters();
    });
  });

  clearFilters?.addEventListener("click", () => {
    activeColor = "";
    activeType = "";
    [...colorFilters, ...typeFilters].forEach((item) => item.setAttribute("aria-pressed", "false"));
    applyFilters();
  });

  viewButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const useTwoColumns = button.textContent.trim() === "2";
      productGrid?.classList.toggle("is-two-column", useTwoColumns);
      viewButtons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
    });
  });

  document.querySelectorAll(".product-card").forEach((card) => {
    const sizeButtons = card.querySelectorAll(".product-card-sizes button");
    const colorButtons = card.querySelectorAll(".product-card-colors button");
    const addButton = card.querySelector(".product-card-add");
    let selectedSize = "";
    let selectedColor = "";

    const updateAddButton = () => {
      if (!addButton) return;
      const selectionComplete = Boolean(selectedSize && selectedColor);
      const priceAvailable = productPrice(card.dataset.productSlug) !== null;
      addButton.disabled = !selectionComplete || !priceAvailable;
      addButton.textContent = !priceAvailable
        ? "TL fiyatı yakında"
        : selectionComplete
        ? `${translate("Add to bag")} · ${selectedColor} / ${selectedSize}`
        : `${translate("Select color")} · ${translate("Select size")}`;
      addButton.classList.remove("is-added");
    };

    colorButtons.forEach((button) => {
      button.addEventListener("click", () => {
        selectedColor = button.dataset.color || "";
        colorButtons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
        updateAddButton();
      });
    });

    sizeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        selectedSize = button.dataset.size || "";
        sizeButtons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
        updateAddButton();
      });
    });

    addButton?.addEventListener("click", () => {
      if (!selectedSize || !selectedColor) return;
      const product = displayProducts.find((item) => item.slug === card.dataset.productSlug);
      if (!product) return;
      const selectedPrice = productPrice(product.slug);
      if (selectedPrice === null) return;
      demoBagItems.push({
        id: crypto.randomUUID(), slug: product.slug, name: product.name,
        size: selectedSize, color: selectedColor, image: product.images[0]
      });
      saveBag();
      addButton.textContent = translate("Added to bag");
      addButton.classList.add("is-added");
      syncDemoBagUI();
    });

    updateAddButton();
  });

  syncDemoBagUI();
}

function syncDemoBagUI() {
  const count = demoBagItems.length;
  document.querySelectorAll(".site-bag-link span").forEach((label) => {
    label.textContent = `${translate("Bag")} (${count})`;
  });
  const titleCount = document.querySelector("#site-bag-title span");
  if (titleCount) titleCount.textContent = `(${count})`;
  document.querySelectorAll(".site-bag-content").forEach((content) => {
    if (!count) {
      content.innerHTML = `<div class="site-bag-empty"><svg viewBox="0 0 42 42" aria-hidden="true"><rect x="5" y="14" width="32" height="23" rx="1"/><path d="M14 14v-3c0-4.2 2.7-6.5 7-6.5s7 2.3 7 6.5v3"/></svg><h2>${translate("Your bag is empty.")}</h2><p>Discover quiet essentials made for everyday movement.</p></div>`;
      return;
    }
    const pricedItems = demoBagItems.map((item) => ({ ...item, currentPrice: productPrice(item.slug) }));
    const pricesReady = pricedItems.every((item) => item.currentPrice !== null);
    const total = pricedItems.reduce((sum, item) => sum + Number(item.currentPrice || 0), 0);
    content.innerHTML = `<div class="site-bag-items">${demoBagItems.map((item) => `
      <article class="site-bag-item">
        <img src="${item.image}" alt="" />
        <div><h3>${item.name}</h3><p>${item.color} · ${item.size}</p><strong>${formatMoney(productPrice(item.slug))}</strong></div>
        <button type="button" data-remove-bag-item="${item.id}" aria-label="Remove ${item.name}">×</button>
      </article>`).join("")}</div>
      <div class="site-bag-summary"><div><span>Total</span><strong>${pricesReady ? formatMoney(total) : "—"}</strong></div><small>${pricesReady ? "Taxes and delivery are calculated at checkout." : "TL fiyatları tanımlandıktan sonra ödeme açılacak."}</small></div>`;
  });
  document.querySelectorAll("[data-remove-bag-item]").forEach((button) => button.addEventListener("click", () => {
    demoBagItems = demoBagItems.filter((item) => item.id !== button.dataset.removeBagItem);
    saveBag();
    syncDemoBagUI();
  }));
  document.querySelectorAll(".site-bag-checkout").forEach((button) => {
    button.hidden = !count;
    const internationalCheckoutBlocked = activeCurrency === "EUR" && !INTERNATIONAL_CHECKOUT_ENABLED;
    button.disabled = internationalCheckoutBlocked || demoBagItems.some((item) => productPrice(item.slug) === null);
    button.textContent = internationalCheckoutBlocked
      ? "N/A"
      : activeCurrency === "TRY"
        ? "Ödemeye geç"
        : "Proceed to payment";
    button.onclick = startCheckout;
  });
}

async function startCheckout(event) {
  const button = event.currentTarget;
  button.disabled = true;
  button.textContent = "Opening secure checkout…";
  try {
    const response = await fetch("/api/create-checkout-session", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ currency: activeCurrency, items: demoBagItems.map(({ slug, size, color }) => ({ slug, size, color })) })
    });
    const result = await response.json();
    if (!response.ok || !result.url) throw new Error(result.error || "Checkout could not be started.");
    window.location.assign(result.url);
  } catch (error) {
    button.disabled = false;
    button.textContent = "Proceed to payment";
    window.alert(error.message);
  }
}

function renderProductPage(slug) {
  const product = productCatalog.find((item) => item.slug === slug);
  if (!product) {
    renderHomePage();
    return;
  }
  const labels = productPageLabels[currentLanguage] || productPageLabels.en;

  document.title = `${product.name} — Dagdroøm`;
  document.querySelector("#app").innerHTML = `
    <main class="product-page">
      ${renderSiteHeader(product.world)}
      <section class="product-detail">
        <div class="product-gallery">
          ${product.images.map((image, index) => `
            <figure class="product-gallery-zoom" data-model-image="${image.includes("-model-")}">
              <img src="${image}" alt="${product.name}${index ? ` detail ${index + 1}` : ""}" />
            </figure>
          `).join("")}
        </div>
        <div class="product-information">
          <h1>${product.name}</h1>
          <span class="product-price" data-product-price="${product.slug}" data-demo="${Boolean(product.isDemo)}">${formatProductPrice(product.slug, product.isDemo)}</span>
          <p>${localizedProductField(product, "description")}</p>
          <dl>
            <div><dt>${labels.sizes}</dt><dd>${product.sizes.join(" / ")}</dd></div>
            <div><dt>${labels.material}</dt><dd>${localizedProductField(product, "material")}</dd></div>
            <div><dt>${labels.care}</dt><dd>${localizedProductField(product, "care")}</dd></div>
            <div><dt>${labels.fit}</dt><dd>${localizedProductField(product, "fit")}</dd></div>
            <div><dt>${labels.delivery}</dt><dd>${localizedProductField(product, "delivery")}</dd></div>
          </dl>
          <button type="button" ${product.inStock ? "" : "disabled"}>${product.inStock ? labels.add : product.status === "sold-out" ? labels.soldOut : labels.comingSoon}</button>
        </div>
      </section>
    </main>
  `;

  initializeSiteHeader();
  initializeProductGalleryZoom();
}

function initializeProductGalleryZoom() {
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!canHover || reduceMotion) return;

  document.querySelectorAll(".product-gallery-zoom").forEach((frame) => {
    const isModelImage = frame.dataset.modelImage === "true";

    frame.addEventListener("pointermove", (event) => {
      const bounds = frame.getBoundingClientRect();
      const x = Math.min(1, Math.max(0, (event.clientX - bounds.left) / bounds.width));
      const y = Math.min(1, Math.max(0, (event.clientY - bounds.top) / bounds.height));
      const isFaceArea = isModelImage && y < 0.23;

      frame.classList.toggle("is-face-area", isFaceArea);
      frame.classList.toggle("is-zooming", !isFaceArea);
      if (isFaceArea) return;

      frame.style.setProperty("--zoom-x", `${(x * 100).toFixed(2)}%`);
      frame.style.setProperty("--zoom-y", `${(y * 100).toFixed(2)}%`);
    });

    frame.addEventListener("pointerleave", () => {
      frame.classList.remove("is-zooming", "is-face-area");
      frame.style.removeProperty("--zoom-x");
      frame.style.removeProperty("--zoom-y");
    });
  });
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
    { number: "N° 001", city: "Reykjavík", coordinate: "64°09′N", image: "/reykjavik-64n.png", href: "/world/reykjavik/" },
    { number: "N° 002", city: "Stockholm", coordinate: "59°20′N", image: "/stockholm-59n-cropped-corrected.png", href: "/world/stockholm/" },
    { number: "N° 003", city: "Copenhagen", coordinate: "55°40′N", image: "/copenhagen-55n.png.png", href: "/world/copenhagen/" },
    { number: "N° 004", city: "Oslo", coordinate: "59°55′N", image: "/oslo-journal-cropped.png", href: "/world/oslo/" },
    { number: "N° 005", city: "Helsinki", coordinate: "60°10′N", image: "/helsinki-60n.png", href: "/world/helsinki/" }
  ];

  document.querySelector("#app").innerHTML = `
    <main class="journal-page">
      ${renderSiteHeader("")}

      <section class="journal-intro">
        <p>Notes from the North</p>
      </section>

      <section class="journal-grid" aria-label="Journal stories">
        ${stories.map(({ number, city, coordinate, image, href }) => `
          <a href="${href}" class="journal-card journal-card--${city.toLowerCase()}">
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

function renderAccountPage() {
  document.title = "Account — Dagdroøm";
  document.querySelector("#app").innerHTML = `
    <main class="site account-page">
      ${renderSiteHeader("account")}
      <section class="account-shell">
        <div class="account-panel">
          <div class="account-tabs" role="tablist" aria-label="Account access">
            <button type="button" class="is-active" role="tab" aria-selected="true" data-account-tab="login">Sign in</button>
            <button type="button" role="tab" aria-selected="false" data-account-tab="register">Create account</button>
          </div>
          <form class="account-form is-active" data-account-form="login">
            <label>Email address<input type="email" name="email" autocomplete="email" required /></label>
            <label>Password<input type="password" name="password" autocomplete="current-password" required /></label>
            <div class="account-form-row"><label class="account-check"><input type="checkbox" /> Remember me</label><a href="/contact">Forgot password?</a></div>
            <button type="submit">Sign in <span>→</span></button>
            <p class="account-form-status" aria-live="polite"></p>
          </form>
          <form class="account-form" data-account-form="register" hidden>
            <div class="account-name-grid">
              <label>First name<input type="text" name="firstName" autocomplete="given-name" required /></label>
              <label>Last name<input type="text" name="lastName" autocomplete="family-name" required /></label>
            </div>
            <label>Email address<input type="email" name="email" autocomplete="email" required /></label>
            <label>Password<input type="password" name="password" autocomplete="new-password" minlength="8" required /></label>
            <label class="account-check"><input type="checkbox" /> Receive private notes from Dagdroøm</label>
            <button type="submit">Create account <span>→</span></button>
            <p class="account-form-status" aria-live="polite"></p>
          </form>
        </div>
      </section>
    </main>`;
  initializeSiteHeader();
  initializeAccountPage();
}

function initializeAccountPage() {
  const tabs = [...document.querySelectorAll("[data-account-tab]")];
  const forms = [...document.querySelectorAll("[data-account-form]")];
  tabs.forEach((tab) => tab.addEventListener("click", () => {
    tabs.forEach((item) => { const active = item === tab; item.classList.toggle("is-active", active); item.setAttribute("aria-selected", String(active)); });
    forms.forEach((form) => { const active = form.dataset.accountForm === tab.dataset.accountTab; form.classList.toggle("is-active", active); form.hidden = !active; });
  }));
  forms.forEach((form) => form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    form.querySelector(".account-form-status").textContent = form.dataset.accountForm === "login"
      ? translate("Account connection will be enabled with the customer system.")
      : translate("Your account request is ready. Customer registration will be connected before launch.");
  }));
}

function cookiePolicyContent() {
  const policies = {
    en: {
      updated: "Legal · Last updated 19 August 2026", title: "Cookie Policy", manage: "Manage cookie preferences",
      sections: [
        ["01 · About this policy", "This page explains how Dagdroøm uses cookies and similar local storage technologies. The site currently uses only the information needed to remember your language, shopping bag and privacy choice. Advertising and analytics technologies are not active."],
        ["02 · Necessary storage", "dagdroom-language remembers the language you selected. dagdroom-bag-v1 keeps the products in your shopping bag. dagdroom-cookie-consent records your privacy choice for up to 12 months. These records support functions you request and are not used for advertising."],
        ["03 · Optional technologies", "If analytics or marketing technologies are introduced later, they will remain disabled until you actively accept them. Refusing optional technologies does not prevent you from browsing the website."],
        ["04 · Managing your choice", "You may withdraw or change your choice at any time. You can also remove stored information through your browser settings; doing so may reset your language and shopping bag."],
        ["05 · Contact", "Questions about privacy and cookies may be sent to privacy@dagdroom.de."]
      ]
    },
    tr: {
      updated: "Yasal · Son güncelleme 19 Ağustos 2026", title: "Çerez Politikası", manage: "Çerez tercihlerini yönet",
      sections: [
        ["01 · Bu politika hakkında", "Bu sayfa, Dagdroøm'un çerezleri ve benzer yerel depolama teknolojilerini nasıl kullandığını açıklar. Site şu anda yalnızca dilinizi, alışveriş sepetinizi ve gizlilik tercihinizi hatırlamak için gereken bilgileri kullanır. Reklam ve analiz teknolojileri aktif değildir."],
        ["02 · Zorunlu depolama", "dagdroom-language seçtiğiniz dili hatırlar. dagdroom-bag-v1 alışveriş sepetinizdeki ürünleri saklar. dagdroom-cookie-consent gizlilik tercihinizi 12 aya kadar kaydeder. Bu kayıtlar talep ettiğiniz işlevleri sağlar ve reklam amacıyla kullanılmaz."],
        ["03 · İsteğe bağlı teknolojiler", "İleride analiz veya pazarlama teknolojileri eklenirse siz aktif olarak kabul edene kadar devre dışı kalırlar. İsteğe bağlı teknolojileri reddetmeniz siteyi incelemenize engel olmaz."],
        ["04 · Tercihinizi yönetme", "Tercihinizi istediğiniz zaman geri çekebilir veya değiştirebilirsiniz. Kayıtlı bilgileri tarayıcı ayarlarınızdan da kaldırabilirsiniz; bu işlem dil ve alışveriş sepeti tercihlerinizi sıfırlayabilir."],
        ["05 · İletişim", "Gizlilik ve çerezlerle ilgili sorularınızı privacy@dagdroom.de adresine gönderebilirsiniz."]
      ]
    },
    de: {
      updated: "Rechtliches · Zuletzt aktualisiert am 19. August 2026", title: "Cookie-Richtlinie", manage: "Cookie-Einstellungen verwalten",
      sections: [
        ["01 · Über diese Richtlinie", "Diese Seite erläutert, wie Dagdroøm Cookies und ähnliche lokale Speichertechnologien verwendet. Derzeit werden nur Informationen gespeichert, die erforderlich sind, um Ihre Sprache, Ihren Warenkorb und Ihre Datenschutzentscheidung zu merken. Werbe- und Analysetechnologien sind nicht aktiv."],
        ["02 · Notwendige Speicherung", "dagdroom-language speichert die gewählte Sprache. dagdroom-bag-v1 bewahrt die Produkte in Ihrem Warenkorb auf. dagdroom-cookie-consent speichert Ihre Datenschutzentscheidung für bis zu 12 Monate. Diese Einträge unterstützen von Ihnen gewünschte Funktionen und werden nicht für Werbung verwendet."],
        ["03 · Optionale Technologien", "Falls zukünftig Analyse- oder Marketingtechnologien eingeführt werden, bleiben sie deaktiviert, bis Sie aktiv zustimmen. Die Ablehnung optionaler Technologien hindert Sie nicht daran, die Website zu nutzen."],
        ["04 · Auswahl verwalten", "Sie können Ihre Auswahl jederzeit widerrufen oder ändern. Gespeicherte Informationen lassen sich auch über Ihre Browsereinstellungen entfernen; dadurch können Sprache und Warenkorb zurückgesetzt werden."],
        ["05 · Kontakt", "Fragen zu Datenschutz und Cookies können Sie an privacy@dagdroom.de senden."]
      ]
    },
    sv: {
      updated: "Juridisk information · Senast uppdaterad 19 augusti 2026", title: "Cookiepolicy", manage: "Hantera cookieinställningar",
      sections: [
        ["01 · Om denna policy", "Den här sidan förklarar hur Dagdroøm använder cookies och liknande lokal lagringsteknik. Webbplatsen använder för närvarande endast information som behövs för att komma ihåg ditt språk, din varukorg och ditt integritetsval. Teknik för annonsering och analys är inte aktiv."],
        ["02 · Nödvändig lagring", "dagdroom-language kommer ihåg ditt valda språk. dagdroom-bag-v1 sparar produkterna i din varukorg. dagdroom-cookie-consent sparar ditt integritetsval i upp till 12 månader. Dessa poster stödjer funktioner du begär och används inte för annonsering."],
        ["03 · Valfri teknik", "Om analys- eller marknadsföringsteknik införs senare förblir den inaktiverad tills du aktivt godkänner den. Du kan fortsätta använda webbplatsen även om du avvisar valfri teknik."],
        ["04 · Hantera ditt val", "Du kan när som helst återkalla eller ändra ditt val. Du kan även ta bort lagrad information via webbläsarens inställningar; detta kan återställa ditt språk och din varukorg."],
        ["05 · Kontakt", "Frågor om integritet och cookies kan skickas till privacy@dagdroom.de."]
      ]
    }
  };
  return policies[currentLanguage] || policies.en;
}

function renderCookiePolicyPage() {
  const policy = cookiePolicyContent();
  document.title = `${translate("Cookie Policy")} — Dagdroøm`;
  document.querySelector("#app").innerHTML = `
    <main class="legal-page">
      ${renderSiteHeader("")}
      <article class="legal-document">
        <header><p>${policy.updated}</p><h1>${policy.title}</h1></header>
        ${policy.sections.map(([heading, body], index) => `<section><h2>${heading}</h2><p>${index === 4 ? body.replace("privacy@dagdroom.de", '<a href="mailto:privacy@dagdroom.de">privacy@dagdroom.de</a>') : body}</p>${index === 3 ? `<button class="cookie-preferences-open" type="button">${policy.manage}</button>` : ""}</section>`).join("")}
      </article>
      ${renderFooter()}
    </main>`;
  initializeSiteHeader();
}

const COOKIE_CONSENT_KEY = "dagdroom-cookie-consent";
const COOKIE_CONSENT_MAX_AGE = 365 * 24 * 60 * 60 * 1000;

function cookieConsentCopy() {
  if (currentLanguage === "tr") return { title: "Çerez tercihleri", text: "Dil ve sepet gibi temel işlevler için gerekli teknolojileri kullanıyoruz. İsteğe bağlı analiz ve pazarlama araçları yalnızca onayınızla çalışır.", accept: "Kabul et", reject: "Reddet", details: "Çerez politikası" };
  if (currentLanguage === "de") return { title: "Cookie-Einstellungen", text: "Wir verwenden notwendige Technologien für Sprache und Warenkorb. Optionale Analyse- und Marketingtools werden nur mit Ihrer Einwilligung aktiviert.", accept: "Akzeptieren", reject: "Ablehnen", details: "Cookie-Richtlinie" };
  if (currentLanguage === "sv") return { title: "Cookieinställningar", text: "Vi använder nödvändig teknik för språk och varukorg. Valfria analys- och marknadsföringsverktyg aktiveras endast med ditt samtycke.", accept: "Acceptera", reject: "Avvisa", details: "Cookiepolicy" };
  return { title: "Cookie preferences", text: "We use necessary technologies for language and bag functions. Optional analytics and marketing tools are activated only with your consent.", accept: "Accept", reject: "Reject", details: "Cookie policy" };
}

function readCookieConsent() {
  try {
    const consent = JSON.parse(localStorage.getItem(COOKIE_CONSENT_KEY) || "null");
    if (!consent?.savedAt || Date.now() - consent.savedAt > COOKIE_CONSENT_MAX_AGE) return null;
    return consent;
  } catch { return null; }
}

function saveCookieConsent(optional) {
  const consent = { necessary: true, analytics: optional, marketing: optional, savedAt: Date.now(), version: 1 };
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
  window.dispatchEvent(new CustomEvent("dagdroom:consent", { detail: consent }));
  document.querySelector(".cookie-consent")?.remove();
}

function showCookieConsent() {
  document.querySelector(".cookie-consent")?.remove();
  const copy = cookieConsentCopy();
  const panel = document.createElement("section");
  panel.className = "cookie-consent";
  panel.setAttribute("role", "dialog");
  panel.setAttribute("aria-modal", "false");
  panel.setAttribute("aria-labelledby", "cookie-consent-title");
  panel.innerHTML = `<div class="cookie-consent-copy"><span>Privacy</span><h2 id="cookie-consent-title">${copy.title}</h2><p>${copy.text}</p><a href="/${currentLanguage}/cookies">${copy.details}</a></div><div class="cookie-consent-actions"><button type="button" data-cookie-choice="reject">${copy.reject}</button><button type="button" data-cookie-choice="accept">${copy.accept}</button></div>`;
  document.body.append(panel);
  panel.querySelector('[data-cookie-choice="reject"]')?.addEventListener("click", () => saveCookieConsent(false));
  panel.querySelector('[data-cookie-choice="accept"]')?.addEventListener("click", () => saveCookieConsent(true));
}

function initializeCookieConsent() {
  if (!readCookieConsent()) showCookieConsent();
  document.querySelector(".cookie-preferences-open")?.addEventListener("click", showCookieConsent);
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
    <header class="site-header${isLandingHeader ? " site-header--landing" : ""}${isCollectionHeader ? " site-header--collection" : ""}">
      <nav class="site-navigation" aria-label="Main navigation">
        ${!isLandingHeader ? `<a href="/" class="site-back-link" data-history-back aria-label="Go back">
          <svg viewBox="0 0 34 12" aria-hidden="true">
            <path d="M6 1L1 6L6 11M1 6H33" />
          </svg>
        </a>` : ""}

        ${!isLandingHeader ? '<a href="/" class="site-home-link" aria-label="Go to homepage">Home</a>' : ""}

        ${isCollectionHeader ? `<div class="site-nav-group site-nav-group--left">
          ${activeWorldLink}
          ${alternateWorldLink}
        </div>` : ""}

        ${isLandingHeader ? '<a href="/" class="site-landing-wordmark" aria-label="Dagdroøm home">Dagdroøm</a>' : ""}
        ${!isLandingHeader ? '<a href="/" class="site-page-wordmark" aria-label="Dagdroøm home">Dagdroøm</a>' : ""}
        ${isLandingHeader ? `<div class="site-editorial-links" aria-label="Editorial navigation">
          <a href="/essens">Essens</a>
          <a href="/journal">Journal</a>
        </div>` : ""}

        <div class="site-nav-group site-nav-group--right">
          <a href="/search" class="site-utility-link site-search-trigger">
            <svg viewBox="0 0 18 18" aria-hidden="true"><circle cx="7.5" cy="7.5" r="4.75"/><path d="m11 11 4 4"/></svg>
            <span>Search</span>
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
            ${languageButton("en")}
            <span aria-hidden="true">/</span>
            ${languageButton("tr")}
            <span aria-hidden="true">/</span>
            ${languageButton("de")}
            <span aria-hidden="true">/</span>
            ${languageButton("sv")}
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
          <a href="/women" ${activeSection === "women" ? 'aria-current="page"' : ""}>
            <span class="site-nav-name">Dagdroøm</span>
            <small>Women</small>
          </a>
          <a href="/men" ${activeSection === "men" ? 'aria-current="page"' : ""}>
            <span class="site-nav-name site-nav-name--men">DΛGDROØM</span>
            <small>Men</small>
          </a>
        ` : ""}
        <a href="/essens" class="site-mobile-editorial-link">Essens</a>
        <a href="/journal" class="site-mobile-editorial-link">Journal</a>
        <a href="/search" class="site-utility-link site-search-trigger">
          <svg viewBox="0 0 18 18" aria-hidden="true"><circle cx="7.5" cy="7.5" r="4.75"/><path d="m11 11 4 4"/></svg>
          <span>Search</span>
        </a>
        <a href="/account" class="site-utility-link">
          <svg viewBox="0 0 18 18" aria-hidden="true"><circle cx="9" cy="6" r="2.7"/><path d="M3.8 15c.45-2.55 2.35-4.1 5.2-4.1s4.75 1.55 5.2 4.1"/></svg>
          <span>Account</span>
        </a>
        <a href="/bag" class="site-utility-link site-bag-link site-bag-trigger">
          <svg viewBox="0 0 18 18" aria-hidden="true"><rect x="2.5" y="6" width="13" height="9" rx="0.5"/><path d="M6.25 6V4.75C6.25 3.25 7.35 2.4 9 2.4s2.75.85 2.75 2.35V6"/></svg>
          <span>Bag (0)</span>
        </a>
        <a href="https://www.instagram.com/dagd.room/" target="_blank" rel="noopener noreferrer">Instagram</a>
        <div class="site-language-switcher" aria-label="Language selection">
          ${languageButton("en")}
          <span aria-hidden="true">/</span>
          ${languageButton("tr")}
          <span aria-hidden="true">/</span>
          ${languageButton("de")}
          <span aria-hidden="true">/</span>
          ${languageButton("sv")}
        </div>
      </div>

      <div class="site-search-panel" role="dialog" aria-modal="true" aria-label="Search collections" hidden>
        <div class="site-search-panel__inner">
          <div class="site-search-panel__topline">
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

          <div class="site-bag-content"></div>
          <button class="site-bag-checkout" type="button" hidden>Proceed to payment</button>
          <button class="site-bag-continue" type="button">Continue exploring</button>
        </aside>
      </div>
    </header>
  `;
}

function initializeSiteHeader() {
  const header = document.querySelector(".site-header");
  const backLink = header?.querySelector("[data-history-back]");
  const toggle = header?.querySelector(".site-nav-toggle");
  const menu = header?.querySelector(".site-mobile-menu");
  const searchPanel = header?.querySelector(".site-search-panel");
  const searchInput = searchPanel?.querySelector("input");
  const searchResults = searchPanel?.querySelector(".site-search-results");
  const bagPanel = header?.querySelector(".site-bag-panel");
  const newsletterForm = document.querySelector("[data-footer-newsletter]");
  newsletterForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = newsletterForm.querySelector("input");
    const button = newsletterForm.querySelector("button");
    if (!input?.checkValidity()) return input?.reportValidity();
    input.value = "";
    button.textContent = translate("Thank you");
    button.disabled = true;
  });
  syncDemoBagUI();
  initializeI18n(document);
  if (!header || !toggle || !menu) return;

  backLink?.addEventListener("click", (event) => {
    if (window.history.length <= 1) return;
    event.preventDefault();
    window.history.back();
  });

  const collections = [
    { name: "Dø Slør", world: "Women", href: "/collections/slor" },
    { name: "Dø Skygge", world: "Women", href: "/collections/skygge" },
    { name: "Dø Flyt", world: "Women", href: "/collections/flyt" },
    { name: "Dø Skær", world: "Men", href: "/collections/skaer" },
    { name: "Dø Linje", world: "Men", href: "/collections/linje" },
    { name: "Dø Stål", world: "Men", href: "/collections/stal" }
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
      : `<p class="site-search-empty">${translate("No collection found.")}</p>`;
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

function renderFooter(showJournal = false) {
  return `
    <footer class="site-footer">
      ${showJournal ? `
      <section class="footer-journal" aria-labelledby="footer-journal-title">
        <div class="footer-journal-heading">
          <h2 id="footer-journal-title">Notes from the North</h2>
          <a href="/journal">View all</a>
        </div>
        <div class="footer-journal-grid">
          <a class="footer-journal-card" href="/world/stockholm/">
            <div class="footer-journal-image"><img src="/stockholm-59n-cropped-corrected.png" alt="Stockholm" loading="lazy" /></div>
            <div class="footer-journal-card-meta"><h3>Stockholm,</h3><small>59°20′N</small></div>
            <span class="footer-journal-card-mark">Journal — N° 002</span>
          </a>
          <a class="footer-journal-card" href="/world/helsinki/">
            <div class="footer-journal-image"><img src="/helsinki-60n.png" alt="Helsinki" loading="lazy" /></div>
            <div class="footer-journal-card-meta"><h3>Helsinki,</h3><small>60°10′N</small></div>
            <span class="footer-journal-card-mark">Journal — N° 005</span>
          </a>
        </div>
      </section>
      ` : ""}
      <section class="footer-newsletter" aria-labelledby="footer-newsletter-title">
        <div>
          <h2 id="footer-newsletter-title">Stay close to Dagdroøm World</h2>
          <p class="footer-newsletter-copy">New stories, perspectives and notes on style — from Dagdroøm designers and stylists.</p>
        </div>
        <form class="footer-newsletter-form" data-footer-newsletter>
          <label class="sr-only" for="footer-newsletter-email">Email address</label>
          <input id="footer-newsletter-email" type="email" name="email" placeholder="Email address" autocomplete="email" required />
          <button type="submit">Join the Journal <span aria-hidden="true">→</span></button>
        </form>
      </section>
      <div class="footer-tagline">
        <span>Calm.</span>
        <span>Clean.</span>
        <span>Nordic.</span>
      </div>
      <div class="footer-bottom">
        <nav class="footer-bottom-primary" aria-label="Footer navigation">
          <a href="https://www.instagram.com/dagd.room/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="/shipping-returns">Shipping &amp; Returns</a>
          <a href="/contact">Contact</a>
        </nav>
        <nav class="footer-bottom-legal" aria-label="Legal navigation">
          <a href="/cookies">Cookie Policy</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </nav>
      </div>
      <div class="footer-copyright">© 2026 <a href="/">Dagdroøm</a> All rights reserved.</div>
    </footer>
  `;
}
function initializeHomeExperience() {
  const hero = document.querySelector("#home-hero");
  const heroVideo = document.querySelector("#hero-video");
  const scrollButton = document.querySelector("#hero-scroll-button");
  const chooseWorld = document.querySelector("#choose-world");

  if (heroVideo) {
    heroVideo.defaultMuted = true;
    heroVideo.muted = true;
    heroVideo.volume = 0;
  }

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

  scrollButton.addEventListener("click", (event) => {
    event.stopPropagation();
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
    const destination = card.dataset.href;
    const openCollection = () => {
      if (destination) window.location.href = destination;
    };

    card.addEventListener("click", (event) => {
      if (event.target.closest("a, button")) return;
      openCollection();
    });

    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      openCollection();
    });

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

function renderAdminPage() {
  document.title = "Orders — Dagdroom";
  document.querySelector("#app").innerHTML = `
    <main class="admin-page">
      <header class="admin-header"><a href="/">Dagdroøm</a><div><h1>Siparişler</h1><p>Ödeme, müşteri ve teslimat yönetimi</p></div><button type="button" class="admin-refresh">Yenile</button></header>
      <section class="admin-summary" aria-label="Sipariş özeti"></section>
      <section class="admin-orders"><p class="admin-loading">Siparişler yükleniyor…</p></section>
    </main>`;
  initializeAdminPage();
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]);
}

function formatAddress(address) {
  if (!address) return "—";
  return [address.line1, address.line2, `${address.postal_code || ""} ${address.city || ""}`.trim(), address.state, address.country].filter(Boolean).map(escapeHTML).join("<br>");
}

function initializeAdminPage() {
  const ordersRoot = document.querySelector(".admin-orders");
  const summaryRoot = document.querySelector(".admin-summary");
  const statusLabels = { new: "Yeni", preparing: "Hazırlanıyor", shipped: "Kargolandı", delivered: "Teslim edildi", cancelled: "İptal" };
  let password = sessionStorage.getItem("dagdroom-admin-password") || window.prompt("Yönetici şifresi") || "";

  const request = async (method = "GET", body) => {
    const response = await fetch("/api/orders", {
      method, headers: { Authorization: `Bearer ${password}`, "Content-Type": "application/json" },
      body: body ? JSON.stringify(body) : undefined
    });
    if (response.status === 401) {
      sessionStorage.removeItem("dagdroom-admin-password");
      throw new Error("Şifre hatalı. Sayfayı yenileyip tekrar deneyin.");
    }
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || "Siparişler alınamadı.");
    sessionStorage.setItem("dagdroom-admin-password", password);
    return result;
  };

  const renderOrders = (orders) => {
    const totals = orders.filter((order) => order.payment_status === "paid").reduce((result, order) => {
      const currency = String(order.currency || "EUR").toUpperCase();
      result[currency] = (result[currency] || 0) + order.amount_total;
      return result;
    }, {});
    const totalLabel = Object.entries(totals).map(([currency, amount]) => formatMoney(amount, currency)).join(" + ") || "—";
    summaryRoot.innerHTML = `<div><strong>${orders.length}</strong><span>Toplam sipariş</span></div><div><strong>${orders.filter((order) => order.status === "new").length}</strong><span>Yeni sipariş</span></div><div><strong>${totalLabel}</strong><span>Ödenen toplam</span></div>`;
    if (!orders.length) {
      ordersRoot.innerHTML = `<div class="admin-empty"><h2>Henüz sipariş yok.</h2><p>Başarılı Stripe ödemeleri burada görünecek.</p></div>`;
      return;
    }
    ordersRoot.innerHTML = orders.map((order) => `
      <article class="admin-order">
        <div class="admin-order-heading"><div><span>#${order.id} · ${new Date(order.created_at).toLocaleString("tr-TR")}</span><h2>${escapeHTML(order.customer_name || "İsimsiz müşteri")}</h2><a href="mailto:${escapeHTML(order.customer_email)}">${escapeHTML(order.customer_email || "E-posta yok")}</a></div><strong>${formatMoney(order.amount_total, String(order.currency || "EUR").toUpperCase())}</strong></div>
        <div class="admin-order-grid">
          <section><h3>Ürünler</h3>${(order.items || []).map((item) => `<p>${item.quantity} × ${escapeHTML(item.name)}</p>`).join("")}</section>
          <section><h3>Teslimat adresi</h3><p>${formatAddress(order.shipping_address)}</p>${order.customer_phone ? `<p>${escapeHTML(order.customer_phone)}</p>` : ""}</section>
          <section><h3>Fatura adresi</h3><p>${formatAddress(order.billing_address)}</p></section>
        </div>
        <div class="admin-order-footer"><span>Ödeme: ${order.payment_status === "paid" ? "Başarılı" : escapeHTML(order.payment_status)}</span><label>Durum <select data-order-status="${order.id}">${Object.entries(statusLabels).map(([value, label]) => `<option value="${value}" ${value === order.status ? "selected" : ""}>${label}</option>`).join("")}</select></label></div>
      </article>`).join("");
    document.querySelectorAll("[data-order-status]").forEach((select) => select.addEventListener("change", async () => {
      select.disabled = true;
      try { await request("PATCH", { id: select.dataset.orderStatus, status: select.value }); }
      catch (error) { window.alert(error.message); }
      finally { select.disabled = false; }
    }));
  };

  const load = async () => {
    ordersRoot.innerHTML = `<p class="admin-loading">Siparişler yükleniyor…</p>`;
    try { renderOrders((await request()).orders); }
    catch (error) { ordersRoot.innerHTML = `<div class="admin-error"><h2>Siparişler açılamadı.</h2><p>${escapeHTML(error.message)}</p></div>`; }
  };
  document.querySelector(".admin-refresh")?.addEventListener("click", load);
  load();
}

  function renderCurrentRoute() {
  const normalizedPath = localizedRoutePath;

  if (/^\/world\/[^/]+$/.test(normalizedPath)) {
    window.location.replace(`${normalizedPath}/index.html?lang=${currentLanguage}`);
    return;
  }

  if (normalizedPath.startsWith("/collections/")) {
    renderCollectionPage(normalizedPath.split("/").pop());
    return;
  }

  if (normalizedPath.startsWith("/products/")) {
    renderProductPage(normalizedPath.split("/").pop());
    return;
  }

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

  if (normalizedPath === "/account") {
    renderAccountPage();
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

  if (normalizedPath === "/cookies") {
    renderCookiePolicyPage();
    return;
  }

  if (normalizedPath === "/admin") {
    renderAdminPage();
    return;
  }

  renderHomePage();
}

renderCurrentRoute();
refreshEurTryRate();
initializeCookieConsent();
