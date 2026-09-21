import { DOMESTIC_SHIPPING_FEE } from '../shared/pricing.js';
const shippingFeeText = new Intl.NumberFormat('tr-TR').format(DOMESTIC_SHIPPING_FEE / 100) + ' TL';
// Turkish drafts. Complete the legal identity and operational details before publication.
export const legalLabels = {
  tr: { terms: "Mesafeli Satış Sözleşmesi", returns: "Teslimat ve İade Şartları", privacy: "Gizlilik Sözleşmesi / KVKK" },
  en: { terms: "Distance Sales Agreement", returns: "Delivery & Returns", privacy: "Privacy / KVKK" },
  de: { terms: "Fernabsatzvertrag", returns: "Lieferung & Rückgabe", privacy: "Datenschutz / KVKK" },
  sv: { terms: "Distansköpsavtal", returns: "Leverans & returer", privacy: "Integritet / KVKK" }
};

export const legalLanguageNotes = {
  tr: "Türkiye satışları için Türkçe metin · 14 Eylül 2026",
  en: "Turkish-language document for sales in Türkiye · 14 September 2026",
  de: "Türkischsprachiges Dokument für Verkäufe in der Türkei · 14. September 2026",
  sv: "Dokument på turkiska för försäljning i Turkiet · 14 september 2026"
};

const care = '<a href="mailto:contact@dagdroom.de">contact@dagdroom.de</a>';
const privacy = '<a href="mailto:contact@dagdroom.de">contact@dagdroom.de</a>';
const businessAddress = '1821/1 Sokak 7/9 Bostanlı Karşıyaka / İZMİR';
const identity = `Marka: Dagdroøm. Satıcı / veri sorumlusu: Barış Türkmen (şahıs işletmesi). Açık adres: ${businessAddress}. Vergi dairesi: Çiğli Vergi Dairesi. Vergi numarası: 8790693184. Telefon: <a href="tel:+905389715733">0538 971 57 33</a>. MERSİS numarası bulunmamaktadır.`;

export const legalPages = {
  "/terms": {
    title: legalLabels.tr.terms,
    intro: "Dagdroøm üzerinden Türkiye içindeki tüketicilere yapılan çevrim içi ürün satışlarına ilişkin sözleşme taslağıdır.",
    sections: [
      ["01 · Taraflar", `${identity} Sipariş desteği: ${care}. Alıcı; adı, iletişim ve teslimat bilgileri siparişte yer alan tüketicidir.`],
      ["02 · Konu ve sipariş bilgileri", "Sözleşme, seçilen giyim ürününün satışı ve teslimini kapsar. Ürün, beden, renk, adet, vergili bedel, kargo ücreti, toplam tutar, ödeme şekli ve teslimat koşulları siparişe özgü ön bilgilendirmede yer almalıdır. Bu genel sayfa, siparişe özgü ön bilgilendirme ve sözleşme nüshasının yerine geçmez."],
      ["03 · Ödeme ve teslimat", "Siparişler, ödeme onayından itibaren en geç 2 iş günü içinde Yurtiçi Kargo’ya teslim edilir. Bu süre kargoya verme süresidir; müşteriye teslim süresi değildir. Ürün fiyatları KDV dahil, kargo hariçtir. Türkiye içi siparişlerde KDV dahil " + shippingFeeText + " sabit kargo bedeli sipariş başına bir kez eklenir; ürün tutarı, kargo bedeli ve ödenecek toplam sepette ayrı gösterilir. Teslimat, bildirilen süre içinde ve kişiye özel üretim istisnası dışında en geç 30 günde yapılır. Önceden açıklanmayan ek ücretler tüketiciye yüklenemez. Satıcının belirttiği taşıyıcıyla teslimata kadar kayıp ve hasar sorumluluğu satıcıdadır."],
      ["04 · Cayma ve geri ödeme", 'Cayma bildirimi, geri gönderim, kargo masrafları ve geri ödeme koşulları <a href="/shipping-returns">Teslimat ve İade Şartları</a> sayfasında açıklanmıştır; bu koşullar sözleşmenin parçasıdır.'],
      ["05 · Ayıplı ürünler", "Ürün kararlaştırılan nitelikleri taşımıyorsa tüketici, kanuni koşulları çerçevesinde sözleşmeden dönme, bedel indirimi, ücretsiz onarım veya ayıpsız ürünle değişim haklarından yararlanabilir. Bu haklar, gerekçesiz cayma süresiyle sınırlandırılamaz."],
      ["06 · Başvurular ve kapsam", `Satış ve teslimat kapsamı Türkiye ile sınırlıdır. Siparişe ilişkin talepler ${care} üzerinden iletilebilir. Tüketicinin yetkili tüketici hakem heyetine veya tüketici mahkemesine başvuru hakkı saklıdır.`]
    ]
  },
  "/shipping-returns": {
    title: legalLabels.tr.returns,
    intro: "Siparişler, ödeme onayından itibaren en geç 2 iş günü içinde Yurtiçi Kargo’ya teslim edilir. Bu süre kargoya verme süresidir; müşteriye teslim süresi değildir. Ürün fiyatları KDV dahil, kargo hariçtir. Türkiye içi siparişlerde KDV dahil " + shippingFeeText + " sabit kargo bedeli sipariş başına bir kez eklenir; ürün tutarı, kargo bedeli ve ödenecek toplam sepette ayrı gösterilir. İade talebiniz için müşteri hizmetleriyle iletişime geçebilirsiniz.",
    sections: [
      ["Teslimat kapsamı ve süresi", "Teslimat yalnızca Türkiye içindeki adreslere yapılır. Kargoya verildikten sonra teslimat süresi adrese ve taşıyıcının dağıtım planına göre değişebilir. Taahhüt edilen teslimat süresi saklı kalmak üzere, kişiye özel üretim istisnası dışında teslimat en geç 30 gün içinde tamamlanır. Teslimatla ilgili sorularınız için contact@dagdroom.de adresine yazabilirsiniz."],
      ["01 · Cayma hakkı", `Teslimden itibaren 14 gün içinde gerekçesiz ve cezasız cayabilirsiniz; teslimden önce de cayma mümkündür. Açık cayma bildiriminizi ${care} adresine iletebilirsiniz. Bildirimin geçerliliği müşteri hizmetlerinin onayına bağlı değildir.`],
      ["02 · Ürünü gönderme", `Cayma bildiriminden itibaren 14 gün içinde ürünü geri gönderin. İade alıcısı: Barış Türkmen. İade adresi: ${businessAddress}. İade taşıyıcısı: Yurtiçi Kargo. Belirtilen taşıyıcıyla iadede masraf alınmaz; taşıyıcı belirtilmemişse de iade masrafı tüketiciye yüklenemez. Gönderi belgesini saklayın.`],
      ["03 · Bedel iadesi", "Teslimat giderleri dahil geri ödeme, belirtilen taşıyıcıya teslimden; başka taşıyıcı kullanılırsa ürünün satıcıya ulaşmasından itibaren 14 gün içinde yapılır. Teslim öncesi caymada süre bildirimle başlar. İade, kullanılan ödeme aracına uygun biçimde, tek seferde ve masrafsız yapılır."],
      ["04 · Ürün durumu ve istisnalar", "Tüketici ALICI’nın cayma hakkını kullandığına ilişkin bildirimi yönelttiği tarihten itibaren 14 (on dört) gün içinde malı SATICI’ya geri göndermesi gerekmektedir. İadeye konu mal ile beraber söz konusu malın faturasının, kutusunun, ambalajının, varsa standart aksesuarlarının ve söz konusu malın satın alınması sebebiyle hediye edilen diğer ürünlerin de eksiksiz ve hasarsız olarak SATICI’ya iade edilmesi gerekmektedir. Tüketici ALICI, cayma süresi içinde malı, işleyişine, teknik özelliklerine ve kullanım talimatlarına uygun bir şekilde kullanmalıdır, aksi halde malda meydana gelen değişiklik ve bozulmalardan sorumludur.<br><br>Kişiye özel hazırlanan ürünler ile koruyucu ambalajı açılmış, sağlık veya hijyen nedeniyle iadeye uygun olmayan ürünlerde kanuni istisnalar uygulanabilir. Her pijama veya giyim ürünü otomatik olarak hijyen istisnasına girmez."],
      ["05 · Değişim ve kusurlu ürün", `Beden veya renk tercihi nedeniyle doğrudan değişim yapılmamaktadır. Farklı bir beden veya renk isterseniz mevcut ürünü cayma hakkı ve bu sayfadaki iade koşulları kapsamında iade edebilir, istediğiniz ürün için stok durumuna göre yeni sipariş oluşturabilirsiniz. Yeni sipariş, verildiği tarihteki ürün fiyatı ve kargo koşullarına tabidir. İade bedeli yeni siparişten bağımsız olarak yukarıda belirtilen süre ve yöntemle geri ödenir; yeniden alışveriş yapmanız zorunlu değildir. Destek için ${care} adresine yazabilirsiniz. Kusurlu ya da yanlış ürün tesliminde, kanuni koşulları kapsamında ayıpsız ürünle değişim dahil seçimlik haklarınız korunur; bu durumlarda yeni sipariş vermeniz şart koşulmaz. Fotoğraf paylaşmanız incelemeyi kolaylaştırabilir, hak kullanımı yalnızca fotoğraf sunulmasına bağlanmaz.`],
      ["06 · Örnek cayma bildirimi", "Alıcı adı soyadı: … / Sipariş numarası: … / Ürün: … / Sipariş ve teslim tarihi: … / Adres: … / Bildirim tarihi: … — Belirttiğim ürünün satışına ilişkin sözleşmeden cayma hakkımı kullanıyorum. Bu örneği kullanmak zorunlu değildir; açık bir cayma beyanı yeterlidir."]
    ]
  },
  "/privacy": {
    title: legalLabels.tr.privacy,
    intro: "Site ziyaretçileri, iletişim kuran kişiler ve müşteriler için kişisel veri işleme faaliyetlerine ilişkin aydınlatma taslağıdır.",
    sections: [
      ["01 · Veri sorumlusu", `${identity} Gizlilik talepleri için sitede belirtilen iletişim adresi: ${privacy}.`],
      ["02 · Veriler ve toplanma yöntemi", "İletişim taleplerinde ad, e-posta ve mesaj içeriği; siparişlerde iletişim, teslimat, fatura, ürün ve ödeme durumu bilgileri işlenebilir. Bilgiler doğrudan sizin iletiminizle, ödeme akışıyla ve siteye erişim sırasında elektronik olarak elde edilir. İletişim formu e-posta uygulamanızı açar. Mevcut bülten formu adresinizi bir abonelik hizmetine göndermemektedir."],
      ["03 · Amaç ve hukuki sebep", "Sipariş ve teslimat verileri sözleşmenin kurulması veya ifası (KVKK 5/2-c); fatura ve zorunlu kayıtlar hukuki yükümlülük (5/2-ç); uyuşmazlık kayıtları hakların tesisi ve korunması (5/2-e) amacıyla işlenir. Güvenlik kayıtlarında temel hakları zedelemeyen meşru menfaat (5/2-f) değerlendirilir. İsteğe bağlı pazarlama için gereken izin ayrıca alınmalıdır; bu metni okumak açık rıza sayılmaz."],
      ["04 · Alıcılar ve yurt dışı aktarım", "Siparişin yürütülmesi için gerekli bilgiler ödeme, barındırma, sipariş kayıt, e-posta ve kargo hizmeti sağlayıcılarına; kanuni talepler halinde yetkili kurumlara aktarılabilir. Projede Stripe, Supabase ve Resend entegrasyonları bulunmaktadır. Etkin sağlayıcılar, veri merkezleri ve yurt dışı aktarım mekanizması işletme tarafından henüz doğrulanmamıştır. Yurt dışı aktarım için KVKK 9 kapsamındaki geçerli şart ve güvencelerin ayrıca sağlanması gerekir; bu metin tek başına aktarım izni oluşturmaz."],
      ["05 · Çerezler ve tarayıcı verileri", 'Site dil, sepet, çerez tercihleri ve döviz kuru önbelleği için tarayıcı depolamasından yararlanır. Kur bilgisi için harici Frankfurter hizmetine istek gönderilir; bağlantıda IP adresi gibi teknik bilgiler karşı tarafa ulaşabilir. Mevcut çerez tercih sisteminde reklam ve analitik etkin değildir. Ayrıntılar ve tercih yönetimi için <a href="/cookies">Çerez Politikası</a> sayfasına bakabilirsiniz.'],
      ["06 · Saklama ve güvenlik", "Kişisel veriler, ilgili mevzuatta öngörülen veya işleme amacı için gerekli süreyle sınırlı olarak saklanır. Sipariş ve fatura kayıtlarında uygulanabilir vergi, muhasebe ve tüketici mevzuatı; talep ve uyuşmazlık kayıtlarında talebin sonuçlandırılması ve ilgili hakların korunması için gereken süre esas alınır. İletişim ve teknik kayıtlar, başka bir hukuki saklama sebebi yoksa amaç sona erdikten sonra tutulmaz. İşleme şartlarının tamamı ortadan kalktığında veriler mevzuata uygun şekilde silinir, yok edilir veya anonim hale getirilir. Yalnızca açık rızaya dayanan işlemlerde rızanın geri çekilmesi sonrası işleme durdurulur; başka bir hukuki saklama yükümlülüğü varsa ilgili kayıtlar bu amaçla sınırlı tutulur. Veri türü ve hizmet sağlayıcı bazında azami sürelerin ve uygulanacak güvenlik tedbirlerinin işletmenin kayıt düzeninde ayrıca belirlenmesi gerekir."],
      ["07 · Haklarınız ve başvuru", `KVKK 11 kapsamında veri işlenmesini öğrenme, bilgi isteme, amaç ve alıcıları öğrenme, düzeltme, şartları varsa silme veya yok etme, bu işlemlerin alıcılara bildirilmesini isteme, yalnızca otomatik analizle aleyhinize sonuç oluşmasına itiraz ve hukuka aykırı işleme zararının giderilmesini talep haklarınız vardır. Yazılı başvurularınızı Barış Türkmen adına ${businessAddress} adresine iletebilirsiniz. Daha önce bildirdiğiniz ve sistemde kayıtlı e-posta adresiniz üzerinden ${privacy} adresine de başvurabilirsiniz. Başvuruda ad soyad, T.C. kimlik numarası (yabancılar için uyruğu, pasaport veya varsa kimlik numarası), tebligat adresi, varsa e-posta ve telefon, talep konusu ve yazılı başvuruda imza bulunmalıdır; ilgili bilgi ve belgeler eklenmelidir. Kimlik doğrulama için yalnızca gerekli bilgiler istenir. Talepler niteliğine göre en kısa sürede ve en geç 30 gün içinde yanıtlanır. Başvurular kural olarak ücretsizdir; ek maliyet doğarsa yalnızca Kurulun belirlediği tarife uygulanabilir.`]
    ]
  }
};
