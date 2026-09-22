# Geçici TL gösterimi — 22 Eylül 2026

Kullanıcının isteğiyle tüm dillerde ürün ve sepet fiyatları yalnızca mevcut TRY fiyatlarıyla gösterilir. EUR fiyatları ve önceki gösterim kodu korunmuştur. Fiyat tutarları değiştirilmedi. Bu modda harici kur isteği yapılmaz.

Kullanıcı euro gösterimi için “geri al” dediğinde her iki klasörde shared/pricing.js içindeki TL_ONLY_DISPLAY değerini false yap. Önceki Türkçe EUR + yaklaşık TL ürün gösterimi ve diğer dillerde EUR gösterimi geri gelir. Ödeme etkinleştirme ve uluslararası teslimat ayrı ayarlardır; bu istekle değiştirilmez.
