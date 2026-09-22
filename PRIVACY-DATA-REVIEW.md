# Gizlilik metni için veri akışı incelemesi — 22 Eylül 2026

## Doğrulananlar

- Satıcı/veri sorumlusu Barış Türkmen; kullanıcı şahıs işletmesi olduğunu bildirdi. KEP: baris.turkmen@hs01.kep.tr.
- Canlı site Vercel üzerinden sunuluyor. Ziyaretçi istekleri barındırma hizmetine ulaşır.
- İletişim formu e-posta uygulamasını açar. Üyelik ve bülten formları sunucuya veri göndermez.
- Ödeme kodu Stripe oturumu oluşturur; kart alanları siteye ait bir forma girilmez.
- Ödeme bildirimi Supabase'e müşteri adı, e-posta, telefon, adresler, sipariş kalemleri, tutar, para birimi ve işlem/sipariş durumunu kaydedecek şekilde yazılmıştır.
- Resend kodu alıcı e-postası, sipariş özeti ve durum bildirimi gönderir.
- Frankfurter kur isteği doğrudan ziyaretçinin tarayıcısından yapılır. IP gibi bağlantı verileri hizmete ulaşabilir.
- iyzico logosu mevcut; iyzico ödeme entegrasyonu henüz yok.

## Kullanıcıdan beklenen, koddan doğrulanamayan bilgiler

1. Stripe, Supabase ve Resend canlıda etkin mi? Nihai ödeme sağlayıcısı yalnızca iyzico mu olacak?
2. Supabase proje bölgesi, etkin hizmetlerin veri işleme/alt işleyen konumları ve iletişim e-postası hizmet sağlayıcısı.
3. Yurt dışı aktarımlar için uygulanan KVKK 9 şartı ve varsa imzalanmış/bildirilmiş standart sözleşme veya diğer uygun güvence.
4. Sipariş, fatura, destek mesajı, teknik kayıt ve yedekler için fiili saklama/silme düzeni.

Hizmet sağlayıcısının genel gizlilik sayfası, işletmenin o sağlayıcıyla gerekli aktarım düzenlemesini yaptığına kanıt değildir. Yapılmamış bir sözleşme veya bilinmeyen saklama süresi varmış gibi yazılmadı. Gizlilik metnindeki taslak durumu bu bilgiler netleşene kadar korunuyor.

Kaynaklar:
- https://www.kvkk.gov.tr/Icerik/2053/Yurtdisina-Aktarim
- https://www.kvkk.gov.tr/Icerik/8170/Yurt-Disina-Kisisel-Veri-Aktariminda-Kullanilacak-Standart-Sozlesmelerde-Dikkat-Edilmesi-Gereken-Hususlara-Iliskin-Kamuoyu-Duyurusu

Bu inceleme canlı hizmet hesaplarına veya sözleşmelerine erişildiği anlamına gelmez.
