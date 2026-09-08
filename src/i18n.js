export const supportedLanguages = ["en", "de", "sv", "tr"];
export const defaultLanguage = "tr";

const languageNames = {
  en: "English",
  de: "Deutsch",
  sv: "Svenska",
  tr: "Türkçe"
};

const uiTranslations = {
  de: {
    "Women": "Damen", "Men": "Herren", "Home": "Startseite", "Search": "Suche", "Account": "Konto",
    "Bag (0)": "Warenkorb (0)", "Bag": "Warenkorb", "Explore": "Entdecken",
    "COLLECTIONS — AUTUMN / WINTER ’26": "KOLLEKTIONEN — HERBST / WINTER ’26",
    "Filter": "Filter", "Collection": "Kollektion", "Colour": "Farbe", "Product Type": "Produkttyp",
    "Clear filters": "Filter löschen", "The first edit": "Die erste Auswahl", "pieces · Demo selection": "Teile · Demo-Auswahl",
    "Demo product": "Demoprodukt", "Select color": "Farbe wählen", "Select size": "Größe wählen",
    "Add to bag": "In den Warenkorb", "Coming soon": "Demnächst", "Sizes": "Größen", "Material": "Material",
    "Care": "Pflege", "Fit": "Passform", "Delivery": "Lieferung", "Demo material": "Demomaterial",
    "Demo care": "Demopflege", "Demo only": "Nur Demo", "Relaxed": "Locker", "Regular": "Normal",
    "Straight": "Gerade", "Close": "Körpernah", "Search collections": "Kollektionen durchsuchen",
    "No collection found.": "Keine Kollektion gefunden.", "Your bag is empty.": "Ihr Warenkorb ist leer.",
    "Discover quiet essentials made for everyday movement.": "Entdecken Sie ruhige Essentials für alltägliche Bewegung.",
    "Continue exploring": "Weiter entdecken", "Shipping & Returns": "Versand & Rückgabe", "Contact": "Kontakt",
    "Cookie Policy": "Cookie-Richtlinie", "Privacy": "Datenschutz", "Terms": "Bedingungen",
    "Name": "Name", "Email": "E-Mail", "Subject": "Betreff", "Message": "Nachricht",
    "Send enquiry": "Anfrage senden", "General enquiry": "Allgemeine Anfrage", "Customer care": "Kundenservice",
    "Press & Collaborations": "Presse & Kooperationen", "General Enquiries": "Allgemeine Anfragen",
    "Orders, delivery, returns and product questions.": "Bestellungen, Lieferung, Rückgabe und Produktfragen.",
    "Editorial, creative projects and brand partnerships.": "Redaktionelle, kreative Projekte und Markenpartnerschaften.",
    "Everything that does not belong elsewhere.": "Alles, was sonst nirgendwohin gehört.",
    "We usually respond within 1–2 business days.": "Wir antworten normalerweise innerhalb von 1–2 Werktagen.",
    "Notes from the North": "Notizen aus dem Norden", "Arriving quietly.": "Leise im Entstehen.",
    "Soft silhouettes.": "Weiche Silhouetten.", "Feminine essentials.": "Feminine Essentials.",
    "Quiet layers.": "Ruhige Lagen.", "Nordic tailoring.": "Nordische Schneiderkunst.",
    "Technical movement.": "Technische Bewegungsfreiheit.", "Everyday comfort.": "Komfort für jeden Tag.",
    "A temporary visual placeholder for the future collection.": "Ein vorläufiger visueller Platzhalter für die zukünftige Kollektion.",
    "Dress": "Kleid", "Top": "Oberteil", "Trouser": "Hose", "Jacket": "Jacke", "Overshirt": "Overshirt", "Knit": "Strick"
  },
  sv: {
    "Women": "Dam", "Men": "Herr", "Home": "Hem", "Search": "Sök", "Account": "Konto",
    "Bag (0)": "Varukorg (0)", "Bag": "Varukorg", "Explore": "Utforska",
    "COLLECTIONS — AUTUMN / WINTER ’26": "KOLLEKTIONER — HÖST / VINTER ’26",
    "Filter": "Filter", "Collection": "Kollektion", "Colour": "Färg", "Product Type": "Produkttyp",
    "Clear filters": "Rensa filter", "The first edit": "Det första urvalet", "pieces · Demo selection": "plagg · demourval",
    "Demo product": "Demoprodukt", "Select color": "Välj färg", "Select size": "Välj storlek",
    "Add to bag": "Lägg i varukorgen", "Coming soon": "Kommer snart", "Sizes": "Storlekar", "Material": "Material",
    "Care": "Skötsel", "Fit": "Passform", "Delivery": "Leverans", "Demo material": "Demomaterial",
    "Demo care": "Demoskötsel", "Demo only": "Endast demo", "Relaxed": "Ledig", "Regular": "Normal",
    "Straight": "Rak", "Close": "Nära", "Search collections": "Sök kollektioner",
    "No collection found.": "Ingen kollektion hittades.", "Your bag is empty.": "Din varukorg är tom.",
    "Discover quiet essentials made for everyday movement.": "Upptäck stillsamma basplagg skapade för vardagens rörelse.",
    "Continue exploring": "Fortsätt utforska", "Shipping & Returns": "Leverans & returer", "Contact": "Kontakt",
    "Cookie Policy": "Cookiepolicy", "Privacy": "Integritet", "Terms": "Villkor",
    "Name": "Namn", "Email": "E-post", "Subject": "Ämne", "Message": "Meddelande",
    "Send enquiry": "Skicka förfrågan", "General enquiry": "Allmän förfrågan", "Customer care": "Kundservice",
    "Press & Collaborations": "Press & samarbeten", "General Enquiries": "Allmänna frågor",
    "Orders, delivery, returns and product questions.": "Beställningar, leveranser, returer och produktfrågor.",
    "Editorial, creative projects and brand partnerships.": "Redaktionella projekt, kreativa samarbeten och varumärkespartnerskap.",
    "Everything that does not belong elsewhere.": "Allt som inte hör hemma någon annanstans.",
    "We usually respond within 1–2 business days.": "Vi svarar vanligtvis inom 1–2 arbetsdagar.",
    "Notes from the North": "Anteckningar från Norden", "Arriving quietly.": "Anländer stilla.",
    "Soft silhouettes.": "Mjuka silhuetter.", "Feminine essentials.": "Feminina basplagg.",
    "Quiet layers.": "Stillsamma lager.", "Nordic tailoring.": "Nordiskt skrädderi.",
    "Technical movement.": "Teknisk rörelse.", "Everyday comfort.": "Komfort varje dag.",
    "A temporary visual placeholder for the future collection.": "En tillfällig visuell platshållare för den framtida kollektionen.",
    "Dress": "Klänning", "Top": "Topp", "Trouser": "Byxa", "Jacket": "Jacka", "Overshirt": "Overshirt", "Knit": "Stickat"
  },
  tr: {
    "Women": "Kadın", "Men": "Erkek", "Home": "Ana Sayfa", "Search": "Ara", "Account": "Hesap",
    "Bag (0)": "Sepet (0)", "Bag": "Sepet", "Explore": "Keşfet",
    "COLLECTIONS — AUTUMN / WINTER ’26": "KOLEKSİYONLAR — SONBAHAR / KIŞ ’26",
    "Filter": "Filtre", "Collection": "Koleksiyon", "Colour": "Renk", "Product Type": "Ürün Türü",
    "Clear filters": "Filtreleri temizle", "The first edit": "İlk seçki", "pieces · Demo selection": "parça · demo seçkisi",
    "Demo product": "Demo ürün", "Select color": "Renk seç", "Select size": "Beden seç",
    "Add to bag": "Sepete ekle", "Coming soon": "Yakında", "Sizes": "Bedenler", "Material": "Materyal",
    "Care": "Bakım", "Fit": "Kalıp", "Delivery": "Teslimat", "Demo material": "Demo materyal",
    "Demo care": "Demo bakım", "Demo only": "Yalnızca demo", "Relaxed": "Rahat", "Regular": "Normal",
    "Straight": "Düz", "Close": "Dar", "Search collections": "Koleksiyonlarda ara",
    "No collection found.": "Koleksiyon bulunamadı.", "Your bag is empty.": "Sepetiniz boş.",
    "Discover quiet essentials made for everyday movement.": "Günlük hareket için tasarlanan sade parçaları keşfedin.",
    "Continue exploring": "Keşfetmeye devam et", "Shipping & Returns": "Kargo & İade", "Contact": "İletişim",
    "Cookie Policy": "Çerez Politikası", "Privacy": "Gizlilik", "Terms": "Koşullar",
    "Name": "Ad", "Email": "E-posta", "Subject": "Konu", "Message": "Mesaj",
    "Send enquiry": "Mesaj gönder", "General enquiry": "Genel bilgi", "Customer care": "Müşteri hizmetleri",
    "Press & Collaborations": "Basın & İş Birlikleri", "General Enquiries": "Genel Sorular",
    "Orders, delivery, returns and product questions.": "Sipariş, teslimat, iade ve ürün soruları.",
    "Editorial, creative projects and brand partnerships.": "Editoryal ve yaratıcı projeler ile marka iş birlikleri.",
    "Everything that does not belong elsewhere.": "Diğer başlıklara girmeyen tüm konular.",
    "We usually respond within 1–2 business days.": "Genellikle 1–2 iş günü içinde yanıt veririz.",
    "Notes from the North": "Kuzeyden Notlar", "Arriving quietly.": "Sessizce yaklaşıyor.",
    "Soft silhouettes.": "Yumuşak silüetler.", "Feminine essentials.": "Feminen temel parçalar.",
    "Quiet layers.": "Sakin katmanlar.", "Nordic tailoring.": "Nordik terzilik.",
    "Technical movement.": "Teknik hareket.", "Everyday comfort.": "Günlük konfor.",
    "A temporary visual placeholder for the future collection.": "Gelecek koleksiyon için geçici bir görsel yer tutucu.",
    "Dress": "Elbise", "Top": "Üst", "Trouser": "Pantolon", "Jacket": "Ceket", "Overshirt": "Gömlek Ceket", "Knit": "Triko"
  }
};

const attributeTranslations = {
  de: { "Go back": "Zurück", "Go to homepage": "Zur Startseite", "Open menu": "Menü öffnen", "Close menu": "Menü schließen", "Language selection": "Sprachauswahl", "Close search": "Suche schließen", "Close bag": "Warenkorb schließen" },
  sv: { "Go back": "Tillbaka", "Go to homepage": "Gå till startsidan", "Open menu": "Öppna meny", "Close menu": "Stäng meny", "Language selection": "Språkval", "Close search": "Stäng sökning", "Close bag": "Stäng varukorg" },
  tr: { "Go back": "Geri dön", "Go to homepage": "Ana sayfaya git", "Open menu": "Menüyü aç", "Close menu": "Menüyü kapat", "Language selection": "Dil seçimi", "Close search": "Aramayı kapat", "Close bag": "Sepeti kapat" }
};

Object.assign(uiTranslations.de, {
  "COLLECTIONS —": "KOLLEKTIONEN —", "AUTUMN / WINTER ’26": "HERBST / WINTER ’26", "ΛUTUMN / WINTER ’26": "HERBST / WINTER ’26",
  "Added to bag": "Zum Warenkorb hinzugefügt", "demo items selected": "Demoartikel ausgewählt",
  "Your demo selection is saved for this browsing session.": "Ihre Demo-Auswahl ist für diese Sitzung gespeichert.",
  "Refined form.": "Verfeinerte Form.", "Natural movement.": "Natürliche Bewegung.",
  "Timeless tailoring.": "Zeitlose Schneiderkunst.", "Essential elegance.": "Essenzielle Eleganz.",
  "Built for everyday.": "Für jeden Tag geschaffen.", "Ironclad masculinity.": "Beständige Maskulinität.",
  "A light everyday silhouette with quiet volume and fluid movement.": "Eine leichte Silhouette für jeden Tag mit ruhigem Volumen und fließender Bewegung.",
  "Soft structure and muted tailoring designed for considered layering.": "Weiche Struktur und zurückhaltende Schneiderkunst für durchdachtes Layering.",
  "A technical essential balancing comfort, movement and a clean Nordic line.": "Ein technisches Essential im Gleichgewicht von Komfort, Bewegung und klarer nordischer Linie.",
  "A precise outer layer shaped for natural movement and restrained utility.": "Eine präzise äußere Lage für natürliche Bewegung und zurückhaltende Funktionalität.",
  "A clean tailored foundation with an easy line and everyday proportion.": "Eine klar geschnittene Basis mit entspannter Linie und alltagstauglichen Proportionen.",
  "A durable everyday layer with understated structure and functional clarity.": "Eine langlebige Alltagsschicht mit dezenter Struktur und funktionaler Klarheit.",
  "Dagdroøm is shaped by the quiet language of the North — soft light, honest materials and forms that leave room to breathe.": "Dagdroøm ist geprägt von der stillen Sprache des Nordens — sanftem Licht, ehrlichen Materialien und Formen, die Raum zum Atmen lassen.",
  "The Dagdroøm colour palette is drawn from the North: Arctic Mist, deep waters, pale winter light, muted Nordic landscapes and the subtle warmth of Nordic Sunset.": "Die Farbpalette von Dagdroøm stammt aus dem Norden: Arctic Mist, tiefen Gewässern, blassem Winterlicht, gedämpften nordischen Landschaften und der feinen Wärme von Nordic Sunset.",
  "Dagdroøm believes clothing should feel considered, never complicated. Every piece reflects a balance of clarity and character through clean silhouettes, tactile fabrics and subtle details that reveal themselves slowly.": "Dagdroøm glaubt, dass Kleidung durchdacht, aber nie kompliziert wirken sollte. Jedes Stück verbindet Klarheit und Charakter durch reine Silhouetten, fühlbare Stoffe und subtile Details.",
  "Less noise.": "Weniger Lärm.", "More feeling.": "Mehr Gefühl.", "Calm. Clean. Nordic.": "Ruhig. Klar. Nordisch."
});
Object.assign(uiTranslations.sv, {
  "COLLECTIONS —": "KOLLEKTIONER —", "AUTUMN / WINTER ’26": "HÖST / VINTER ’26", "ΛUTUMN / WINTER ’26": "HÖST / VINTER ’26",
  "Added to bag": "Tillagd i varukorgen", "demo items selected": "demoprodukter valda",
  "Your demo selection is saved for this browsing session.": "Ditt demourval sparas under den här sessionen.",
  "Refined form.": "Förfinad form.", "Natural movement.": "Naturlig rörelse.",
  "Timeless tailoring.": "Tidlöst skrädderi.", "Essential elegance.": "Essentiell elegans.",
  "Built for everyday.": "Skapad för vardagen.", "Ironclad masculinity.": "Beständig maskulinitet.",
  "A light everyday silhouette with quiet volume and fluid movement.": "En lätt vardagssilhuett med stillsam volym och följsam rörelse.",
  "Soft structure and muted tailoring designed for considered layering.": "Mjuk struktur och dämpat skrädderi skapat för genomtänkta lager.",
  "A technical essential balancing comfort, movement and a clean Nordic line.": "Ett tekniskt basplagg som balanserar komfort, rörelse och en ren nordisk linje.",
  "A precise outer layer shaped for natural movement and restrained utility.": "Ett precist ytterlager format för naturlig rörelse och återhållen funktion.",
  "A clean tailored foundation with an easy line and everyday proportion.": "En ren skräddad grund med ledig linje och vardaglig proportion.",
  "A durable everyday layer with understated structure and functional clarity.": "Ett slitstarkt vardagslager med diskret struktur och funktionell tydlighet.",
  "Dagdroøm is shaped by the quiet language of the North — soft light, honest materials and forms that leave room to breathe.": "Dagdroøm formas av Nordens stilla språk — mjukt ljus, ärliga material och former som lämnar rum att andas.",
  "The Dagdroøm colour palette is drawn from the North: Arctic Mist, deep waters, pale winter light, muted Nordic landscapes and the subtle warmth of Nordic Sunset.": "Dagdroøms färgpalett hämtas från Norden: Arctic Mist, djupa vatten, blekt vinterljus, dämpade nordiska landskap och den subtila värmen i Nordic Sunset.",
  "Dagdroøm believes clothing should feel considered, never complicated. Every piece reflects a balance of clarity and character through clean silhouettes, tactile fabrics and subtle details that reveal themselves slowly.": "Dagdroøm anser att kläder ska kännas genomtänkta, aldrig komplicerade. Varje plagg balanserar tydlighet och karaktär genom rena silhuetter, taktila tyger och subtila detaljer.",
  "Less noise.": "Mindre brus.", "More feeling.": "Mer känsla.", "Calm. Clean. Nordic.": "Lugn. Ren. Nordisk."
});
Object.assign(uiTranslations.tr, {
  "COLLECTIONS —": "KOLEKSİYONLAR —", "AUTUMN / WINTER ’26": "SONBAHAR / KIŞ ’26", "ΛUTUMN / WINTER ’26": "SONBAHAR / KIŞ ’26",
  "Added to bag": "Sepete eklendi", "demo items selected": "demo ürün seçildi",
  "Your demo selection is saved for this browsing session.": "Demo seçiminiz bu oturum boyunca kaydedildi.",
  "Refined form.": "İnceltilmiş form.", "Natural movement.": "Doğal hareket.",
  "Timeless tailoring.": "Zamansız terzilik.", "Essential elegance.": "Özlü zarafet.",
  "Built for everyday.": "Her gün için tasarlandı.", "Ironclad masculinity.": "Sağlam maskülenlik.",
  "A light everyday silhouette with quiet volume and fluid movement.": "Sakin hacim ve akıcı hareket sunan hafif bir günlük silüet.",
  "Soft structure and muted tailoring designed for considered layering.": "Özenli katmanlar için tasarlanmış yumuşak yapı ve dingin terzilik.",
  "A technical essential balancing comfort, movement and a clean Nordic line.": "Konforu, hareketi ve temiz Nordik çizgiyi dengeleyen teknik bir temel parça.",
  "A precise outer layer shaped for natural movement and restrained utility.": "Doğal hareket ve ölçülü işlevsellik için biçimlendirilmiş hassas bir dış katman.",
  "A clean tailored foundation with an easy line and everyday proportion.": "Rahat çizgili ve gündelik oranlı, temiz terzilik temeli.",
  "A durable everyday layer with understated structure and functional clarity.": "Sade yapısı ve işlevsel netliğiyle dayanıklı bir günlük katman.",
  "Dagdroøm is shaped by the quiet language of the North — soft light, honest materials and forms that leave room to breathe.": "Dagdroøm, Kuzey'in sakin diliyle şekillenir — yumuşak ışık, dürüst materyaller ve nefes almaya alan bırakan formlar.",
  "The Dagdroøm colour palette is drawn from the North: Arctic Mist, deep waters, pale winter light, muted Nordic landscapes and the subtle warmth of Nordic Sunset.": "Dagdroøm renk paleti Kuzey'den doğar: Arctic Mist, derin sular, solgun kış ışığı, dingin Nordik manzaralar ve Nordic Sunset'in ince sıcaklığı.",
  "Dagdroøm believes clothing should feel considered, never complicated. Every piece reflects a balance of clarity and character through clean silhouettes, tactile fabrics and subtle details that reveal themselves slowly.": "Dagdroøm, giyimin özenli ama asla karmaşık hissettirmemesi gerektiğine inanır. Her parça; temiz silüetler, dokulu kumaşlar ve zamanla kendini gösteren ince detaylarla netlik ve karakteri dengeler.",
  "Less noise.": "Daha az gürültü.", "More feeling.": "Daha çok his.", "Calm. Clean. Nordic.": "Sakin. Temiz. Nordik."
});

Object.assign(uiTranslations.de, {
  "View all": "Alle ansehen",
  "Stay close to Dagdroøm World": "Bleiben Sie der Dagdroøm World nah",
  "New stories, perspectives and notes on style — from Dagdroøm designers and stylists.": "Neue Geschichten, Perspektiven und Stilnotizen — von den Designern und Stylisten von Dagdroøm.",
  "Email address": "E-Mail-Adresse", "Subscribe": "Abonnieren", "Join the Journal": "Journal beitreten", "Thank you": "Vielen Dank",
  "All rights reserved.": "Alle Rechte vorbehalten."
});

Object.assign(uiTranslations.sv, {
  "View all": "Visa alla",
  "Stay close to Dagdroøm World": "Håll dig nära Dagdroøm World",
  "New stories, perspectives and notes on style — from Dagdroøm designers and stylists.": "Nya berättelser, perspektiv och stilanteckningar — från Dagdroøms designers och stylister.",
  "Email address": "E-postadress", "Subscribe": "Prenumerera", "Join the Journal": "Gå med i journalen", "Thank you": "Tack",
  "All rights reserved.": "Alla rättigheter förbehållna."
});

Object.assign(uiTranslations.tr, {
  "View all": "Tümünü gör",
  "Stay close to Dagdroøm World": "Dagdroøm World'e yakın kal",
  "New stories, perspectives and notes on style — from Dagdroøm designers and stylists.": "Dagdroøm tasarımcıları ve stilistlerinden yeni hikâyeler, bakış açıları ve stil notları.",
  "Email address": "E-posta adresi", "Subscribe": "Abone ol", "Join the Journal": "Journal'a katıl", "Thank you": "Teşekkürler",
  "All rights reserved.": "Tüm hakları saklıdır."
});

Object.assign(uiTranslations.de, {
  "Private client area": "Privater Kundenbereich", "Your Dagdroøm": "Ihr Dagdroøm",
  "Keep your details, orders and considered pieces in one quiet place.": "Bewahren Sie Ihre Daten, Bestellungen und ausgewählten Stücke an einem ruhigen Ort auf.",
  "Sign in": "Anmelden", "Create account": "Konto erstellen", "Password": "Passwort",
  "Remember me": "Angemeldet bleiben", "Forgot password?": "Passwort vergessen?",
  "First name": "Vorname", "Last name": "Nachname", "Receive private notes from Dagdroøm": "Private Notizen von Dagdroøm erhalten",
  "With an account": "Mit einem Konto", "A quieter checkout": "Ein ruhigerer Checkout",
  "Save your delivery details for next time.": "Speichern Sie Ihre Lieferdaten für das nächste Mal.",
  "Your order archive": "Ihr Bestellarchiv", "Follow current orders and revisit past pieces.": "Verfolgen Sie aktuelle Bestellungen und entdecken Sie frühere Stücke wieder.",
  "Private access": "Privater Zugang", "Receive early notes on new collections.": "Erhalten Sie frühzeitig Notizen zu neuen Kollektionen.",
  "Account connection will be enabled with the customer system.": "Die Kontoanmeldung wird mit dem Kundensystem aktiviert.",
  "Your account request is ready. Customer registration will be connected before launch.": "Ihre Kontoanfrage ist bereit. Die Kundenregistrierung wird vor dem Start verbunden."
});

Object.assign(uiTranslations.sv, {
  "Private client area": "Privat kundområde", "Your Dagdroøm": "Ditt Dagdroøm",
  "Keep your details, orders and considered pieces in one quiet place.": "Samla dina uppgifter, beställningar och utvalda plagg på en lugn plats.",
  "Sign in": "Logga in", "Create account": "Skapa konto", "Password": "Lösenord",
  "Remember me": "Kom ihåg mig", "Forgot password?": "Glömt lösenordet?",
  "First name": "Förnamn", "Last name": "Efternamn", "Receive private notes from Dagdroøm": "Ta emot privata anteckningar från Dagdroøm",
  "With an account": "Med ett konto", "A quieter checkout": "En lugnare kassa",
  "Save your delivery details for next time.": "Spara dina leveransuppgifter till nästa gång.",
  "Your order archive": "Ditt orderarkiv", "Follow current orders and revisit past pieces.": "Följ aktuella beställningar och återvänd till tidigare plagg.",
  "Private access": "Privat tillgång", "Receive early notes on new collections.": "Få tidiga anteckningar om nya kollektioner.",
  "Account connection will be enabled with the customer system.": "Kontoinloggningen aktiveras tillsammans med kundsystemet.",
  "Your account request is ready. Customer registration will be connected before launch.": "Din kontoförfrågan är klar. Kundregistreringen ansluts före lansering."
});

Object.assign(uiTranslations.tr, {
  "Private client area": "Özel müşteri alanı", "Your Dagdroøm": "Senin Dagdroøm'un",
  "Keep your details, orders and considered pieces in one quiet place.": "Bilgilerini, siparişlerini ve özenle seçtiğin parçaları tek bir sakin alanda tut.",
  "Sign in": "Giriş yap", "Create account": "Hesap oluştur", "Password": "Şifre",
  "Remember me": "Beni hatırla", "Forgot password?": "Şifreni mi unuttun?",
  "First name": "Ad", "Last name": "Soyad", "Receive private notes from Dagdroøm": "Dagdroøm'dan özel notlar al",
  "With an account": "Bir hesapla", "A quieter checkout": "Daha sakin bir ödeme",
  "Save your delivery details for next time.": "Teslimat bilgilerini bir sonraki alışverişin için kaydet.",
  "Your order archive": "Sipariş arşivin", "Follow current orders and revisit past pieces.": "Güncel siparişlerini takip et ve geçmiş parçalarına yeniden göz at.",
  "Private access": "Özel erişim", "Receive early notes on new collections.": "Yeni koleksiyonlar hakkındaki notlara erkenden ulaş.",
  "Account connection will be enabled with the customer system.": "Hesap girişi müşteri sistemiyle birlikte etkinleştirilecek.",
  "Your account request is ready. Customer registration will be connected before launch.": "Hesap talebin hazır. Müşteri kaydı yayından önce bağlanacak."
});

Object.assign(uiTranslations.de, {
  "Your private services": "Ihre privaten Services", "Everything, considered": "Alles, durchdacht",
  "Sign in to manage every part of your Dagdroøm experience.": "Melden Sie sich an, um Ihr gesamtes Dagdroøm Erlebnis zu verwalten.",
  "Orders & returns": "Bestellungen & Rückgaben", "Track deliveries, view order history and request a return.": "Verfolgen Sie Lieferungen, sehen Sie Ihre Bestellhistorie ein und beantragen Sie Rückgaben.",
  "Saved pieces": "Gespeicherte Stücke", "Keep a private edit of pieces you wish to revisit.": "Bewahren Sie eine private Auswahl Ihrer vorgemerkten Stücke auf.",
  "Private appointments": "Private Termine", "Arrange a personal online or in-person styling appointment.": "Vereinbaren Sie eine persönliche Stylingberatung online oder vor Ort.",
  "Address book": "Adressbuch", "Manage delivery and billing addresses for a quieter checkout.": "Verwalten Sie Liefer- und Rechnungsadressen für einen ruhigeren Checkout.",
  "Preferences": "Präferenzen", "Choose the stories, collections and private notes you receive.": "Wählen Sie die Geschichten, Kollektionen und privaten Notizen, die Sie erhalten.",
  "Client care": "Kundenservice", "Speak with Dagdroøm about products, care, sizing and repairs.": "Sprechen Sie mit Dagdroøm über Produkte, Pflege, Größen und Reparaturen."
});
Object.assign(uiTranslations.sv, {
  "Your private services": "Dina privata tjänster", "Everything, considered": "Allt, genomtänkt",
  "Sign in to manage every part of your Dagdroøm experience.": "Logga in för att hantera hela din Dagdroøm-upplevelse.",
  "Orders & returns": "Beställningar & returer", "Track deliveries, view order history and request a return.": "Spåra leveranser, se din orderhistorik och begär en retur.",
  "Saved pieces": "Sparade plagg", "Keep a private edit of pieces you wish to revisit.": "Spara ett privat urval av plagg du vill återvända till.",
  "Private appointments": "Privata möten", "Arrange a personal online or in-person styling appointment.": "Boka personlig styling online eller på plats.",
  "Address book": "Adressbok", "Manage delivery and billing addresses for a quieter checkout.": "Hantera leverans- och fakturaadresser för en lugnare kassa.",
  "Preferences": "Preferenser", "Choose the stories, collections and private notes you receive.": "Välj vilka berättelser, kollektioner och privata anteckningar du får.",
  "Client care": "Kundservice", "Speak with Dagdroøm about products, care, sizing and repairs.": "Prata med Dagdroøm om produkter, skötsel, storlekar och reparationer."
});
Object.assign(uiTranslations.tr, {
  "Your private services": "Özel hizmetlerin", "Everything, considered": "Her şey, özenle düşünüldü",
  "Sign in to manage every part of your Dagdroøm experience.": "Dagdroøm deneyiminin her bölümünü yönetmek için giriş yap.",
  "Orders & returns": "Siparişler & iadeler", "Track deliveries, view order history and request a return.": "Teslimatlarını takip et, sipariş geçmişini görüntüle ve iade talebi oluştur.",
  "Saved pieces": "Kaydedilen parçalar", "Keep a private edit of pieces you wish to revisit.": "Yeniden görmek istediğin parçalardan özel bir seçki oluştur.",
  "Private appointments": "Özel randevular", "Arrange a personal online or in-person styling appointment.": "Çevrim içi veya yüz yüze kişisel stil randevusu oluştur.",
  "Address book": "Adres defteri", "Manage delivery and billing addresses for a quieter checkout.": "Daha sakin bir ödeme için teslimat ve fatura adreslerini yönet.",
  "Preferences": "Tercihler", "Choose the stories, collections and private notes you receive.": "Almak istediğin hikâyeleri, koleksiyonları ve özel notları seç.",
  "Client care": "Müşteri hizmetleri", "Speak with Dagdroøm about products, care, sizing and repairs.": "Ürünler, bakım, bedenler ve onarımlar hakkında Dagdroøm ile görüş."
});

Object.assign(uiTranslations.tr, {
  "Contact us with delivery and return questions about a product or order.": "Ürün veya siparişinizin teslimatı ve iadesiyle ilgili sorularınız için bizimle iletişime geçin.",
  "For questions about your personal information, contact us. You can also review and manage your cookie preferences.": "Kişisel bilgilerinizle ilgili sorularınız için bizimle iletişime geçebilirsiniz. Çerez tercihlerinizi de inceleyebilir ve yönetebilirsiniz.",
  "For information about product and order conditions, please contact us.": "Ürün ve sipariş koşulları hakkında bilgi almak için bizimle iletişime geçin.",
  "Page not found": "Sayfa bulunamadı",
  "This page is unavailable. Explore the collections or return to the homepage.": "Bu sayfaya ulaşılamıyor. Koleksiyonları keşfedebilir veya ana sayfaya dönebilirsiniz.",
  "Search products and collections": "Ürün veya koleksiyon ara",
  "Search by product or collection name.": "Ürün ya da koleksiyon adıyla arayın.",
  "No products or collections found. Try another name.": "Sonuç bulunamadı. Başka bir adla deneyin.",
  "New": "Yeni", "Product images": "Ürün görselleri", "Image": "Görsel",
  "No products match these filters.": "Bu filtrelere uygun ürün bulunamadı.",
  "Customer Care": "Müşteri Hizmetleri", "Send an enquiry": "Mesaj gönder", "Follow": "Takip et",
  "Total": "Toplam", "Taxes and delivery are calculated at checkout.": "Vergiler ve teslimat ödeme adımında hesaplanır."
});
Object.assign(uiTranslations.de, {
  "Contact us with delivery and return questions about a product or order.": "Kontaktieren Sie uns bei Fragen zu Lieferung und Rückgabe eines Produkts oder einer Bestellung.",
  "For questions about your personal information, contact us. You can also review and manage your cookie preferences.": "Kontaktieren Sie uns bei Fragen zu Ihren persönlichen Daten. Sie können auch Ihre Cookie-Einstellungen prüfen und verwalten.",
  "For information about product and order conditions, please contact us.": "Für Informationen zu Produkt- und Bestellbedingungen kontaktieren Sie uns bitte.",
  "Page not found": "Seite nicht gefunden",
  "This page is unavailable. Explore the collections or return to the homepage.": "Diese Seite ist nicht verfügbar. Entdecken Sie die Kollektionen oder kehren Sie zur Startseite zurück.",
  "Search products and collections": "Produkte und Kollektionen",
  "Search by product or collection name.": "Nach Produkt- oder Kollektionsnamen suchen.",
  "No products or collections found. Try another name.": "Keine Ergebnisse. Versuchen Sie einen anderen Namen.",
  "New": "Neu", "Product images": "Produktbilder", "Image": "Bild",
  "No products match these filters.": "Keine Produkte entsprechen diesen Filtern.",
  "Total": "Gesamt", "Taxes and delivery are calculated at checkout.": "Steuern und Versand werden an der Kasse berechnet."
});
Object.assign(uiTranslations.sv, {
  "Contact us with delivery and return questions about a product or order.": "Kontakta oss med frågor om leverans och retur av en produkt eller beställning.",
  "For questions about your personal information, contact us. You can also review and manage your cookie preferences.": "Kontakta oss om du har frågor om dina personuppgifter. Du kan också granska och hantera dina cookieinställningar.",
  "For information about product and order conditions, please contact us.": "Kontakta oss för information om produkt- och beställningsvillkor.",
  "Page not found": "Sidan hittades inte",
  "This page is unavailable. Explore the collections or return to the homepage.": "Den här sidan är inte tillgänglig. Utforska kollektionerna eller återgå till startsidan.",
  "Search products and collections": "Sök produkt eller kollektion",
  "Search by product or collection name.": "Sök efter produktens eller kollektionens namn.",
  "No products or collections found. Try another name.": "Inga resultat. Prova ett annat namn.",
  "New": "Ny", "Product images": "Produktbilder", "Image": "Bild",
  "No products match these filters.": "Inga produkter matchar dessa filter.",
  "Total": "Totalt", "Taxes and delivery are calculated at checkout.": "Skatter och leverans beräknas i kassan."
});

export function translate(key, replacements = {}) {
  let value = currentLanguage === "en" ? key : (uiTranslations[currentLanguage]?.[key] || key);
  Object.entries(replacements).forEach(([name, replacement]) => { value = value.replace(`{${name}}`, replacement); });
  return value;
}

function translateTextValue(value, language) {
  if (language === "en" || !value.trim()) return value;
  const dictionary = uiTranslations[language] || {};
  const leading = value.match(/^\s*/)?.[0] || "";
  const trailing = value.match(/\s*$/)?.[0] || "";
  const clean = value.trim();
  if (dictionary[clean]) return `${leading}${dictionary[clean]}${trailing}`;
  const countMatch = clean.match(/^(\d+)\s+pieces · Demo selection$/);
  if (countMatch && dictionary["pieces · Demo selection"]) return `${leading}${countMatch[1]} ${dictionary["pieces · Demo selection"]}${trailing}`;
  let translated = clean;
  Object.entries(dictionary)
    .filter(([source]) => source.length > 8 && translated.includes(source))
    .sort(([a], [b]) => b.length - a.length)
    .forEach(([source, target]) => { translated = translated.replaceAll(source, target); });
  if (translated !== clean) return `${leading}${translated}${trailing}`;
  return value;
}

function translatePage(root, language) {
  if (language === "en") return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => { node.nodeValue = translateTextValue(node.nodeValue, language); });

  const attributes = attributeTranslations[language] || {};
  root.querySelectorAll("[aria-label], input[placeholder]").forEach((element) => {
    ["aria-label", "placeholder"].forEach((name) => {
      const value = element.getAttribute(name);
      if (value && attributes[value]) element.setAttribute(name, attributes[value]);
      else if (value && uiTranslations[language]?.[value]) element.setAttribute(name, uiTranslations[language][value]);
    });
  });
}

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
  root.querySelectorAll('[data-href^="/"]').forEach((element) => {
    element.dataset.href = pathForLanguage(element.dataset.href, currentLanguage);
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
  translatePage(root, currentLanguage);

  root.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => {
      const language = button.dataset.language;
      if (!supportedLanguages.includes(language)) return;
      try { window.localStorage.setItem("dagdroom-language", language); } catch {}
      window.location.assign(pathForLanguage(localizedRoutePath, language));
    });
  });
}
