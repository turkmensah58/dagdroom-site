# Dagdroom Website

Bu klasor Dagdroom landing page web sitesidir.

## En kolay yayinlama yontemi

1. GitHub hesabi ac: https://github.com
2. Vercel hesabi ac: https://vercel.com
3. Bu klasordeki dosyalari GitHub'a yeni bir repository olarak yukle.
4. Vercel'de "Add New Project" de ve GitHub repository'ni sec.
5. Vercel otomatik olarak siteyi yayinlar.
6. dagdroom.de domainini Vercel'de "Domains" bolumunden ekle.
7. Domaini satin aldigin yerde Vercel'in verdigi DNS kayitlarini gir.

## Lokal bilgisayarda calistirmak istersen

Bilgisayarda Node.js kurulu olmali.

Terminalde:

npm install
npm run dev

Sonra tarayicida verilen localhost linkini ac.

## Not

Waitlist formu su an sadece gorsel olarak calisir. Email toplamak icin daha sonra Mailchimp, Brevo, ConvertKit veya Formspree baglanabilir.

## Kredi karti odemesi (Stripe Checkout)

Sepetteki `Proceed to payment` dugmesi Vercel'deki `/api/create-checkout-session` fonksiyonunu cagirir ve musteriyi Stripe'in guvenli odeme sayfasina yonlendirir.

1. Stripe Dashboard > Developers > API keys alanindan once test gizli anahtarini al.
2. Vercel > Project Settings > Environment Variables alaninda `STRIPE_SECRET_KEY` adiyla ekle.
3. Projeyi yeniden deploy et.
4. Stripe test karti `4242 4242 4242 4242`, gelecekte bir tarih ve herhangi bir CVC ile akisi test et.
5. Urunler ve fiyatlar kesinlestiginde hem `src/main.jsx` hem `api/create-checkout-session.js` kataloglarini guncelle.
6. Canli tahsilata gecmeden once test anahtarini canli gizli anahtarla degistir.

Kart bilgileri bu projeye veya Vercel sunucusuna gelmez. Gizli anahtari kaynak koda yazma; `.env` dosyalari Git tarafindan dislanmistir.

## Siparis yonetimi

Odeme sonrasinda siparislerin kaydedilmesi ve yonetilmesi icin:

1. Supabase'de yeni bir proje olustur ve SQL Editor'de `supabase-schema.sql` dosyasini calistir.
2. `.env.example` icindeki `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` ve guclu bir `ADMIN_PASSWORD` degerini Vercel'e ekle.
3. Stripe Dashboard > Developers > Webhooks alaninda `https://dagdroom.de/api/stripe-webhook` adresini ekle. `checkout.session.completed` ve `checkout.session.async_payment_succeeded` olaylarini sec.
4. Stripe'in verdigi signing secret degerini Vercel'e `STRIPE_WEBHOOK_SECRET` olarak ekle.
5. Resend'de `dagdroom.de` alan adini dogrula; `RESEND_API_KEY`, `ORDER_NOTIFICATION_EMAIL` ve `ORDER_FROM_EMAIL` degerlerini Vercel'e ekle.
6. Yeniden deploy et ve `/tr/admin` adresini ac. Vercel'e ekledigin `ADMIN_PASSWORD` ile giris yap.

Yonetim ekraninda toplam ciro, yeni siparis sayisi, urunler, musteri bilgileri, fatura/teslimat adresleri ve siparis durumu gorunur. Durum `Hazirlaniyor`, `Kargolandi`, `Teslim edildi` veya `Iptal` olarak degistirildiginde musterinin e-posta adresine bildirim gonderilir.

## EUR / TL fiyat sistemi

Merkezi fiyat listesi `shared/pricing.js` dosyasindadir. Tutarlar en kucuk para birimiyle yazilir: EUR icin cent, TRY icin kurus. Turkce sayfalarda TRY; Ingilizce, Almanca ve Isvecce sayfalarda EUR kullanilir. TRY alanlari gercek sabit fiyatlar gelene kadar `null` birakilmistir; bu durumda Turkce sepette odeme guvenlik amaciyla kapali kalir.

Uluslararasi teslimat acilana kadar ayni dosyadaki `INTERNATIONAL_CHECKOUT_ENABLED` degeri `false` kalir. Bu durumda EN/DE/SV sepetlerinde EUR fiyatlar gorunur ancak odeme hem arayuzde hem sunucu API'sinde engellenir.
