# Euro gösterimi — 25 Eylül 2026

Kullanıcı euro karşılıklarının yeniden gösterilmesini istedi. Önceki yalnızca TL tercihi kaldırıldı.

- Referans kur: 1 EUR = 55,7975 TRY, tarih 2026-09-25.
- Kaynak: https://api.frankfurter.dev/v1/2026-09-25?base=EUR&symbols=TRY (ECB referans kuru).
- Mevcut TRY tutarları korunur. EUR cent = Math.round(TRY kuruş / 55.7975).
- Türkçe ürünlerde TL + yaklaşık EUR; EN/DE/SV ürün ve sepetlerinde EUR gösterilir.
- Bu yayında tarihli sabit kur kullanılır; eski tarayıcı kur önbelleği veya canlı istek fiyatları değiştirmez. Yeni kur istendiğinde merkezi EUR fiyatları birlikte hesaplanmalıdır.
- Ödeme ve uluslararası teslimat ayarları ayrı kalır. Gizli işletme bilgileri, satış sözleşmesi ve teslimat/iade sayfaları yeniden açılmaz.
