# Mobil kontrol — 7 Eylül 2026

## 8 Eylül — tam ekran açılış düzeltmesi

- `hero-clean.mp4`, mevcut 7 saniyelik videodan üretildi: alt 52 pikseldeki Kling yazısı kırpıldı; ortadaki gömülü logo/slogan kare bazında temizlenerek aynı metinler duyarlı HTML ile gösterildi. Temiz poster, otomatik oynatma kapalıyken de aynı düzeni koruyor. Orijinal video saklandı.
- Hero yüksekliği görünür pencereye göre ayarlanıyor; ilk ekranda başlık/çerez paneli görünmüyor. Ok, koleksiyon bölümünü sabit menünün altına kaydırıyor.
- Koleksiyon görselinin kenar boşlukları, sezon başlığı ve Journal başlık/bağlantı hizası düzeltildi. Yeni içerik veya bağlantı eklenmedi.
- Chrome dokunmatik emülasyonunda 320×568, 375×548, 375×667, 414×715, 414×896, 667×375 ve 768×1024: tam ekran, logo/slogan ayrımı, ok hedefi, menü ve yatay taşma kontrolleri geçti.
- 31 sayfa / 124 mobil yerleşim, dört dil ve üç masaüstü sayfası tekrar kontrol edildi. Gerçek iPhone testi yapılmadı; Windows WebKit aracı medya oturumunda kapandığı için Safari doğrulaması tamamlanamadı.

## Düzeltilenler

- Mobil açılış 8 Eylül talebiyle tekrar tam ekran yapıldı; mevcut logo ve slogan videodan ayrılarak dar ekranda kesilmeden gösteriliyor.
- Sonradan eklenen Kadın / Erkek bağlantıları kullanıcı talebiyle kaldırıldı.
- Mobil menü tüm sayfalarda iki koleksiyona erişiyor. Kısa/yatay ekranlarda menü başlığının altında kayıyor.
- Arama ve sepet kapatma, dil seçimi, filtreler ve ürün seçeneklerinin dokunma alanları büyütüldü.
- Arama sonuçları seçili dili koruyor. Panellerde klavye odağı içeride tutuluyor ve kapanışta açan kontrole dönüyor.
- Erkek koleksiyonundaki iki eksik görsel mevcut koleksiyon görselleriyle değiştirildi; koleksiyon videolarına poster eklendi.
- Mobil katalog iki sütuna geçirildi; 480 px boş bilgi alanları kaldırıldı. Ürün fotoğrafları kırpılmadan gösteriliyor.
- Filtrelenen kartların CSS nedeniyle görünmeye devam etmesi düzeltildi; sıfır sonuç mesajı eklendi.
- Ürün galerisi mobilde yatay kaydırılabilir; numaralı düğmeler ve klavye okları destekleniyor. Ek fotoğraflar tembel yükleniyor.
- Tepkisiz ürün ekleme düğmesine beden/renk seçimi ve mevcut sepet işlevi bağlandı. Tükenen ürünler ve mevcut ödeme kısıtları korunuyor.
- Sepette dar kolonlar, uzun ürün adları, kısa ekran kaydırması ve düğme erişimi düzenlendi.
- Form yazıları 16 px yapıldı; iOS form odaklama yakınlaştırmasının önüne geçildi. Altbilgi, çerez paneli ve bilgi metinleri büyütüldü.
- Ürün ve hesap sayfalarına ortak altbilgi eklendi. Depolama kullanılamadığında sepet/çerez arayüzü hata vermiyor.
- Burgundy renk göstergesi ürün fotoğrafıyla eşleştirildi.

## Doğrulama

- Yerel Chrome, dokunmatik mobil emülasyon: 31 sayfa × 4 genişlik (320 / 390 / 430 / 768 px), toplam 124 düzen.
- Ana sayfa, kadın/erkek, 6 koleksiyon, 12 ürün, iletişim, hesap, Essens, Journal, çerez ve 5 şehir sayfası.
- Dört dilde 320 × 568 menü/sepet ve kayıt ekranı; 667 × 375 yatay menü/arama/sepet.
- Menü, arama dili, filtre uygula/temizle, galeri geçişi, beden/renk seçimi, sepete ekle/çıkar, hesap sekmeleri.
- 1440 px masaüstünde ana sayfa, katalog ve ürün sayfası kontrolü.
- Sayfa seviyesinde yatay taşma, yüklenmiş bozuk görsel veya JavaScript hatası görülmedi. Galerinin kendi yatay kaydırması beklenen davranıştır.
- Kaynakta başvurulan 49 yerel görsel/video dosyası mevcut.
- `npm.cmd run build` ve `git diff --check` başarılı.
- Ekran görüntüleri ve kontrol çıktıları yerel `.local/mobile-audit/` klasöründe. Gerçek iPhone/Safari donanım testi yapılmadı.

## Mevcut servis / içerik eksikleri

- Hesap girişi/kayıt formları müşteri kimlik doğrulama servisine bağlı değil.
- Bülten formu gerçek abonelik kaydetmiyor; mevcut teşekkür davranışı sunucu kaydı anlamına gelmiyor.
- `/shipping-returns`, `/privacy`, `/terms` artık başlıklı bilgilendirme/iletişim sayfalarına açılıyor. Ayrıntılı, onaylı koşul ve politika metinleri hâlâ gerekli; bu metinler uydurulmadı.
- Katalogda demo ürünler ve tanımlanmamış fiyatlar mevcut. Uluslararası ödeme mevcut yapılandırmada kapalı. Gerçek ödeme işlemi yapılmadı.

Bu kontrol mobil arayüz ve mevcut istemci akışlarını kapsar; servis ve içerik eksiklerinin tamamlandığı anlamına gelmez.

## İkinci tur — 8 Eylül 2026

- 44 görselin 480 / 960 px WebP kopyaları üretildi; küçük orijinaller büyütülmedi. 73.394.310 bayt orijinale karşı bütün responsive kopyalar 2.192.740 bayt. Bu karşılaştırma video dosyalarını içermez.
- Katalog, ürün galerisi, menü, arama, sepet ve Journal kartları `srcset` / `sizes` kullanıyor. Görsel boyutları ayrılarak yükleme sırasında yer değişimi azaltıldı. Orijinal dosyalar korunuyor.
- Flyt kataloğunda 390 px / 2× mobil testte seçilen dört ürün görseli 45.240 bayt; aynı orijinaller 5.139.354 bayt.
- Arama ürünleri de buluyor; küçük ürün fotoğrafı, Türkçe/İskandinav harf normalizasyonu, çok kelimeli arama, boş sonuç mesajı ve Enter ile sonuca gitme eklendi.
- Doğrudan `/account`, `/search`, `/bag` ve destek bağlantıları için yayın yönlendirmeleri tamamlandı.
- Bilinmeyen sayfa/ürün/koleksiyon adreslerinde anlaşılır bir bulunamadı ekranı ve geri dönüş bağlantıları gösteriliyor.
- Görünmeyen ana sayfa videosu durduruluyor; azaltılmış hareket tercihi ana sayfa ve kadın koleksiyonu videolarında uygulanıyor.
- Dört dilde ürün ve aksansız arama, doğrudan sepet, azaltılmış hareket ve 6 destek/hata sayfası × 7 genişlik (320–1024 px) geçti.
- Görsel seçim testi ve ekran görüntülerine ek olarak 31 sayfalık mobil/masaüstü taraması tekrar çalıştırıldı.
