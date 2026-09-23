# İletişim ve hukuki metin çevirileri — 23 Eylül 2026

TR kaynak metni `src/legal-content.js` içinde korunur. EN, DE ve SV karşılıkları `src/legal-translations.js` içindedir. `getLegalPages(currentLanguage)` dil seçimine göre sayfa gövdesini ve başlığını döndürür. Bunlar Türkiye satışlarına ilişkin Türkçe metnin çevirileridir; başka ülke hukukuna uyarlama yapılmamıştır.

İletişim bölümünün alan etiketleri `serviceUI` ile çevrilir. Dagdroøm, Veltora, Barış Türkmen, Çiğli Vergi Dairesi, Yurtiçi Kargo, sağlayıcı adları, adres, vergi numarası, telefon, e-posta ve KEP aynen korunur. Yerelleştirilmiş bölümlerde `lang` seçili dile göre değişir; `translate="no"` mevcut sözcük değiştirme sistemi ve tarayıcının özel adları tekrar çevirmesini önler. İç bağlantılar mevcut dil yönlendirmesiyle dil önekini alır.

Tüm tutarlar ortak fiyat dosyasından okunur. `TL_ONLY_DISPLAY` false yapılırsa kur servisi açıklaması üç dilde de önceki davranışa döner. Çeviri değişikliği ödeme veya döviz ayarlarını değiştirmez.

Kontrol: `node scripts/check-service-translations.mjs` dört dilde bölüm sayıları, sayısal değerler, özel adlar, bağlantılar ve gerçek sayfa oluşturma fonksiyonlarını kontrol eder. Üretim derlemesi ayrıca çalıştırılır. Bu oturumda kullanılabilir tarayıcı bulunmadığı için görsel/etkileşimli tarayıcı testi yapılamadı.
