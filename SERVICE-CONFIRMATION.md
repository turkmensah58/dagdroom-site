# Hizmet kararları — 22 Eylül 2026

Kullanıcı yalnızca iyzico ile ödeme alacağını ve contact@dagdroom.de e-postasının GoDaddy üzerinden açıldığını bildirdi.

- Barındırma: Vercel, önceki canlı HTTPS kontrolüyle doğrulandı.
- Ödeme: iyzico seçildi; teknik entegrasyon henüz yok. shared/payment-policy.js yeni ödemeleri kapatır. Eski Stripe oturum API'si hem kapalı ödeme bayrağı hem sağlayıcı kontrolüyle engellenir. Yalnızca bayrağı açmak iyzico entegrasyonu oluşturmaz.
- Eski Stripe webhook'u, geçmiş başarılı işlemler olabileceği için korunmuştur; yeni Stripe ödemesi başlatılmaz.
- İletişim: GoDaddy üzerinden alınan e-posta. Microsoft 365 veya başka paket olduğu bilinmiyor.
- Supabase/Resend: mevcut sipariş yönetimi kodu korunuyor; bunların hesap ve canlı kullanım durumu doğrulanmış değil. Geçmiş siparişlere erişim ve bildirim akışı bu karar nedeniyle silinmedi.

## Tamamlanamayan dış işlemler

iyzico üretim/sandbox API bilgileri olmadan entegrasyon testi ve canlı ödeme etkinleştirme yapılamaz. Gizli anahtarlar sohbet mesajına veya kaynak koda yazılmamalı, yayın ortamının gizli değişkenlerine eklenmelidir.

Vercel, GoDaddy ve varsa diğer veri işleyenlerin hesaplarına/sözleşmelerine erişilmedi. KVKK aktarım güvencesi veya standart sözleşme imzalanmış/bildirilmiş gibi gösterilmedi. GoDaddy'nin genel gizlilik politikası, Microsoft 365 gibi üçüncü taraf ürünlerin ayrı politikalara sahip olabildiğini belirtir. Genel bir sağlayıcı belgesi işletmeye özgü aktarım düzenlemesinin kanıtı değildir.

Bu dosya önceki PAYMENT-READINESS.md ve PRIVACY-DATA-REVIEW.md içindeki ödeme sağlayıcısı seçimine ilişkin belirsizliği giderir. Aktarım ve saklama doğrulamaları hâlâ açıktır. Henüz canlıya yayımlanmadı.

Kaynaklar:
- https://www.godaddy.com/en/agreements/privacy
- https://www.iyzico.com/gizlilik-politikasi
- https://www.kvkk.gov.tr/Icerik/8170/Yurt-Disina-Kisisel-Veri-Aktariminda-Kullanilacak-Standart-Sozlesmelerde-Dikkat-Edilmesi-Gereken-Hususlara-Iliskin-Kamuoyu-Duyurusu
