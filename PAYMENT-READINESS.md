# Ödeme başvurusu hazırlığı — 21 Eylül 2026

- `/about`: dört dilde Hakkımızda sayfası eklendi; alt menüden erişilir.
- `/shipping-returns`: Teslimat ve İade Şartları başlığı görünür hale getirildi; Türkiye içi teslimat kapsamı ve azami teslimat süresi eklendi.
- `/privacy` ve `/terms`: mevcut metinler ve bağlantılar korundu. Gizlilik başlığı açıklaştırıldı.
- Alt bilgiye kullanıcının sağladığı iyzico paketindeki orijinal renkli SVG bandı eklendi. Bant iyzico ile Öde, Mastercard, Visa, American Express ve Troy logolarını içerir. Logo göstermek ödeme entegrasyonunu etkinleştirmez; mevcut ödeme kodu Stripe kullanır.
- HTTPS: `https://dagdroom.de` geçerli TLS bağlantısıyla 308 yönlendirmesi; `https://www.dagdroom.de` geçerli TLS bağlantısıyla 200 yanıtı verdi. `http://dagdroom.de` HTTPS'ye 308 yönlendiriyor. Her iki HTTPS yanıtta HSTS mevcut. Sertifika kontrolünde doğrulama atlanmadı; yeni sertifika kurulmasına gerek bulunmadı.

## Tamamlanması gereken bilgiler

Mevcut satıcı Barış Türkmen; adres, vergi dairesi, vergi numarası, telefon ve iletişim e-postası metinlerde bulunuyor. Kullanıcı şahıs işletmesi olduğunu ve MERSİS numarası bulunmadığını teyit etti; sözleşmelere işlendi. Ticaret sicili kaydı hakkında ayrıca bilgi verilmedi. Canlı veri işleyenler, barındırma ülkeleri, yurt dışı aktarım şartları ve saklama süreleri doğrulanmadan gizlilik metni tamamlanmış sayılmaz. Bu nedenle mevcut taslak işareti korundu.

Siparişe özel ön bilgilendirme, sözleşme nüshası ve kalıcı ortamda gönderim bu değişiklikle uygulanmadı. iyzico ödeme entegrasyonu kurulmadı. Canlı yayın yapılmadı.

## Başvurulan resmi kaynaklar

- https://tuketici.ticaret.gov.tr/yayinlar/tuketici-bilgi-rehberi/mesafeli-sozlesmeler-hakkinda-bilgilendirme
- https://www.kvkk.gov.tr/Icerik/6765/AYDINLATMA-YUKUMLULUGUNUN-YERINE-GETIRILMESI-HAKKINDA-KAMUOYU-DUYURUSU
- https://vercel.com/docs/domains/working-with-ssl

Vercel, doğrulanmış alan adlarının SSL sertifikasını otomatik yönetir. Bu kayıttaki canlı HTTPS durumu ayrıca doğrudan ağ kontrolüyle doğrulandı.
