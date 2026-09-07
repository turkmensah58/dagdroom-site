(() => {
  const supportedLanguages = ["en", "de", "sv", "tr"];
  const params = new URLSearchParams(window.location.search);
  const requestedLanguage = params.get("lang");
  const language = supportedLanguages.includes(requestedLanguage) ? requestedLanguage : "tr";
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
  addLink("alternate", `${window.location.origin}/tr/world/${city}`, "x-default");

  const reykjavikTranslations = {
    de: {
      title: "Wo die Stadt auf den Traum trifft",
      lead: "Reykjavík offenbart eine ruhigere Lebensweise — geprägt von wechselndem Himmel, geschützten Innenräumen und der Schönheit des Innehaltens.",
      caption: "Reykjavík unter einem wechselnden nördlichen Himmel — eine Studie über Stille, Geborgenheit und zurückhaltende Farben.",
      paragraphs: [
        "Von oben betrachtet scheint Reykjavík zwischen zwei Zuständen zu schweben. Eng beieinanderstehende Häuserreihen ziehen sich zu einem dunklen, scheinbar endlosen Meer. Ihre Dächer — in Silber, Rostrot, gedämpftem Grün und Anthrazit — fangen das durch die Wolken fallende Licht ein. Die Stadt ist wach, aber nie in Eile; voller Leben und doch zutiefst privat.",
        "Diese nordische Stille hat etwas Filmisches. Die Landschaft sucht nicht durch Überfluss nach Aufmerksamkeit. Stattdessen zieht sie uns durch feine Kontraste näher: geordnete Straßen vor einem offenen Horizont, kleine Lebensräume unter einem unendlichen Himmel und die erahnte Wärme hinter Fenstern gegenüber der kühlen, ungezähmten Luft draußen.",
        "Diese Stadt erinnert uns daran, dass Geborgenheit selbst eine Atmosphäre sein kann.",
        "An Orten, die von langen Abenden und unberechenbarem Wetter geprägt sind, wird das Zuhause mehr als eine Kulisse. Es verwandelt sich in einen Rückzugsort, ein Ritual und eine eigene Welt. Einfache Handlungen — die Vorhänge zuziehen, etwas Weiches anziehen und den Tag langsam ausklingen lassen — erhalten eine neue Bedeutung. Ruhe ist keine Unterbrechung des Lebens; sie gehört zu seinem natürlichen Rhythmus.",
        "Dieselbe Philosophie lebt im Herzen von Dagdroøm.",
        "Dagdroøm entwirft für die Stunden, in denen die Außenwelt langsam verblasst und die natürlichste Version des Selbst hervortritt. Die Stücke begleiten langsame Morgen, stille Nachmittage und Abende ohne Eile. Sie gehören zu Momenten, in denen nicht Erwartungen, sondern Gefühle das Ankleiden bestimmen. Weiche Silhouetten, unverwechselbare Muster und fließende Stoffe verwandeln Loungewear in eine persönliche Erfahrung — Kleidung, die nicht nur gesehen, sondern wirklich gelebt werden soll.",
        "Die Skyline von Reykjavík spiegelt dieses Gleichgewicht vollkommen wider. Ihre Architektur ist funktional, ohne kalt zu wirken, zurückhaltend, ohne ihren Charakter zu verlieren. Zwischen grauen Fassaden und hellen Dächern erscheinen unerwartete Farben: ein rotes Dach, eine Wand in warmen Erdtönen oder eine tiefgrüne Fläche. Diese stillen Eingriffe entsprechen dem Ansatz von Dagdroøm: Komfort als Grundlage, Charakter im Detail.",
        "Jenseits der Häuser zeichnet das Meer den Rand des Bildes wie einen zweiten Himmel nach. Es weckt Gedanken an Ferne, Fantasie und die Möglichkeit, anderswo zu sein. Doch die Stadt darunter wirkt geerdet und intim. In dieser Spannung — zwischen Aufbruch und Zugehörigkeit, Träumen und Bleiben — findet Dagdroøm seine eigene Sprache.",
        "Tagträumen bedeutet nicht immer, den Ort zu verlassen, an dem wir sind. Manchmal bedeutet es, gegenwärtiger zu werden: die Textur eines Stoffes auf der Haut wahrzunehmen, das wechselnde Licht in einem vertrauten Raum oder die Stille, die vor Einbruch der Nacht eintritt.",
        "Reykjavík lädt uns genau in diesen Geisteszustand ein. Die Stadt fordert uns auf, nach innen zu schauen, ohne uns von der Welt zu lösen — Schönheit in der Einfachheit, Wärme in der Einsamkeit und Freiheit in der Stille zu entdecken.",
        "Vielleicht ist dies die Essenz von Dagdroøm: der Fantasie Raum zu geben, wo immer man sich befindet."
      ],
      author: "Geschrieben von Elín Sól Jónsdóttir — 30. Juli 2026"
    },
    sv: {
      title: "Där staden möter drömmen",
      lead: "Reykjavík visar ett stillsammare sätt att leva — format av skiftande himlar, skyddade interiörer och skönheten i att sakta ner.",
      caption: "Reykjavík under en skiftande nordlig himmel — en studie i stillhet, skydd och återhållsam färg.",
      paragraphs: [
        "Sedd ovanifrån tycks Reykjavík sväva mellan två tillstånd. Rader av tätt samlade hus sträcker sig mot ett mörkt och till synes oändligt hav. Taken — i nyanser av silver, rostrött, dämpat grönt och kol — fångar ljuset som silas genom molnen. Staden är vaken men aldrig jäktad; full av liv men samtidigt djupt privat.",
        "Det finns något filmiskt i denna nordliga stillhet. Landskapet söker inte uppmärksamhet genom överflöd. I stället drar det oss närmare genom subtila kontraster: ordnade gator mot en öppen horisont, små livsrum under en oändlig himmel och den föreställda värmen bakom fönstren mot den svala, otämjda luften utanför.",
        "Den här staden påminner oss om att välbefinnande kan vara en atmosfär i sig.",
        "På platser formade av långa kvällar och oförutsägbart väder blir hemmet mer än en bakgrund. Det förvandlas till en tillflykt, en ritual och en egen värld. Enkla handlingar — att dra för gardinerna, byta till något mjukt och låta dagen långsamt avta — får ny betydelse. Vila är inte ett avbrott i livet; den är en del av dess naturliga rytm.",
        "Samma filosofi finns i hjärtat av Dagdroøm.",
        "Dagdroøm formger för timmarna då världen utanför börjar blekna och den mest naturliga versionen av jaget träder fram. Plaggen följer långsamma morgnar, stilla eftermiddagar och kvällar utan brådska. De hör till stunder då klädseln styrs av känsla, inte förväntan. Mjuka silhuetter, särpräglade mönster och följsamma tyger gör loungewear till en personlig upplevelse — kläder skapade inte bara för att synas, utan för att verkligen levas i.",
        "Reykjavíks silhuett speglar denna balans perfekt. Arkitekturen är funktionell utan att kännas kall, återhållen utan att förlora sin karaktär. Oväntade färger framträder bland grå fasader och bleka tak: ett rött tak, en vägg i varma jordtoner eller en djupt grön yta. Dessa stillsamma inslag speglar Dagdroøms synsätt: komfort som grund, karaktär i detaljerna.",
        "Bortom husen följer havet bildens kant som en andra himmel. Det väcker tankar om avstånd, fantasi och möjligheten att vara någon annanstans. Ändå känns staden nedanför jordnära och intim. I denna spänning — mellan flykt och tillhörighet, drömmande och kvarstannande — finner Dagdroøm sitt eget språk.",
        "Att dagdrömma betyder inte alltid att lämna platsen där vi är. Ibland betyder det att bli mer närvarande: att lägga märke till tygets struktur mot huden, det skiftande ljuset i ett välbekant rum eller tystnaden som kommer före skymningen.",
        "Reykjavík bjuder in oss till just detta sinnestillstånd. Staden ber oss att vända oss inåt utan att koppla bort världen — att upptäcka skönhet i enkelhet, värme i ensamhet och frihet i stillhet.",
        "Kanske är detta kärnan i Dagdroøm: att skapa ett rum för fantasin, var du än befinner dig."
      ],
      author: "Skriven av Elín Sól Jónsdóttir — 30 juli 2026"
    },
    tr: {
      title: "Şehrin Düşle Buluştuğu Yer",
      lead: "Reykjavík, değişen gökyüzünün, korunaklı iç mekânların ve yavaşlamanın güzelliğinin şekillendirdiği daha sakin bir yaşam biçimini gösterir.",
      caption: "Değişken kuzey göğünün altındaki Reykjavík — dinginlik, sığınak ve ölçülü renk üzerine bir çalışma.",
      paragraphs: [
        "Yukarıdan bakıldığında Reykjavík iki hal arasında asılı görünür. Birbirine yakın ev sıraları, karanlık ve sonsuzmuş gibi duran denize doğru uzanır. Gümüş, pas kırmızısı, dingin yeşil ve kömür tonlarındaki çatılar, bulutların arasından süzülen ışığı yakalar. Şehir uyanıktır ama asla aceleci değildir; hayat dolu, bir o kadar da kendine dönüktür.",
        "Bu kuzey dinginliğinde sinematik bir şey vardır. Manzara, fazlalıkla dikkat çekmeye çalışmaz. Bunun yerine ince karşıtlıklarla bizi kendine yaklaştırır: açık ufka karşı düzenli sokaklar, sonsuz göğün altındaki küçük yaşam alanları ve dışarıdaki serin, dizginlenmemiş havaya karşı pencerelerin ardında hayal edilen sıcaklık.",
        "Bu şehir bize konforun başlı başına bir atmosfer olabileceğini hatırlatır.",
        "Uzun akşamların ve öngörülemeyen havanın şekillendirdiği yerlerde ev, bir arka plandan fazlasına dönüşür. Bir sığınak, bir ritüel ve kendine ait bir dünya olur. Perdeleri çekmek, yumuşak bir şeyler giymek ve günün yavaşça geride kalmasına izin vermek gibi basit eylemler yeni bir anlam kazanır. Dinlenmek hayata verilen bir ara değil, onun doğal ritminin parçasıdır.",
        "Aynı felsefe Dagdroøm'un kalbinde yaşar.",
        "Dagdroøm, dış dünyanın silikleşmeye başladığı ve benliğin en doğal hâlinin ortaya çıktığı saatler için tasarlar. Parçaları yavaş sabahlara, sakin öğleden sonralara ve telaşsız akşamlara eşlik eder. Giyinmenin beklentilerle değil, hislerle yönlendirildiği anlara aittirler. Yumuşak silüetler, ayırt edici desenler ve akıcı kumaşlar ev giyimini kişisel bir deneyime dönüştürür — yalnızca görülmek için değil, gerçekten yaşanmak için yaratılan giysiler.",
        "Reykjavík silüeti bu dengeyi kusursuzca yansıtır. Mimarisi soğuk hissettirmeden işlevsel, karakterini kaybetmeden ölçülüdür. Gri cepheler ve solgun çatılar arasında beklenmedik renkler belirir: kırmızı bir çatı, sıcak toprak tonlarında bir duvar veya koyu yeşil bir yüzey. Bu sessiz dokunuşlar Dagdroøm'un yaklaşımını yansıtır: temelde konfor, detaylarda karakter.",
        "Evlerin ötesinde deniz, görüntünün kenarını ikinci bir gökyüzü gibi çizer. Uzaklığı, hayal gücünü ve başka bir yerde olma ihtimalini çağrıştırır. Buna rağmen aşağıdaki şehir ayakları yere basan, samimi bir his verir. Kaçış ile aidiyet, düş kurmak ile kalmak arasındaki bu gerilim, Dagdroøm'un kendi dilini bulduğu yerdir.",
        "Gündüz düşü kurmak her zaman bulunduğumuz yeri terk etmek anlamına gelmez. Bazen daha çok anda olmak demektir: kumaşın ten üzerindeki dokusunu, tanıdık bir odadaki değişen ışığı veya gece çökmeden önce gelen sessizliği fark etmek.",
        "Reykjavík bizi tam da bu ruh hâline davet eder. Dünyadan kopmadan içimize dönmemizi; sadelikte güzelliği, yalnızlıkta sıcaklığı ve dinginlikte özgürlüğü keşfetmemizi ister.",
        "Belki de Dagdroøm'un özü budur: nerede olursanız olun hayal gücüne bir oda açmak."
      ],
      author: "Yazan Elín Sól Jónsdóttir — 30 Temmuz 2026"
    }
  };

  if (city === "reykjavik" && reykjavikTranslations[language]) {
    const copy = reykjavikTranslations[language];
    const heading = document.querySelector(".article-header h2");
    const lead = document.querySelector(".article-lead");
    const caption = document.querySelector(".article-image figcaption");
    const paragraphs = document.querySelectorAll(".article-body p");
    const author = document.querySelector(".article-author p");
    if (heading) heading.innerHTML = copy.title.replace(" ", " ").replace(/ (\S+)$/, "<br />$1");
    if (lead) lead.textContent = copy.lead;
    if (caption) caption.textContent = copy.caption;
    paragraphs.forEach((paragraph, index) => {
      if (copy.paragraphs[index]) paragraph.textContent = copy.paragraphs[index];
    });
    if (author) author.textContent = copy.author;
    const backLink = document.querySelector(".back-link");
    if (backLink) backLink.setAttribute("aria-label", language === "de" ? "Zurück zum Journal" : language === "sv" ? "Tillbaka till Journal" : "Journal'e dön");
  }
})();
