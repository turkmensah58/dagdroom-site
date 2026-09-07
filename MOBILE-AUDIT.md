# Mobil kontrol — 7 Eylül 2026

## Düzeltilenler

- Mobil açılış videosunun içindeki logoyu kesen tam ekran kırpma kaldırıldı; videonun oranı yüklenmeden önce ayrılıyor.
- Ana sayfaya okunabilir, 48 px yüksekliğinde Kadın / Erkek bağlantıları eklendi.
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
- `/shipping-returns`, `/privacy`, `/terms` için ayrı yayımlanmış içerik yok; mevcut yönlendirici ana sayfaya düşüyor. Onaylı içerikler olmadan politika metni üretilmedi.
- Katalogda demo ürünler ve tanımlanmamış fiyatlar mevcut. Uluslararası ödeme mevcut yapılandırmada kapalı. Gerçek ödeme işlemi yapılmadı.

Bu kontrol mobil arayüz ve mevcut istemci akışlarını kapsar; servis ve içerik eksiklerinin tamamlandığı anlamına gelmez.
