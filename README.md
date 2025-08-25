# Samet Yeşilot - Kişisel Portföy Sitesi

Bu proje, Fırat Üniversitesi Yazılım Mühendisliği 3. sınıf öğrencisi Samet Yeşilot'un kişisel portföy sitesidir. PHP tabanlıdır ve Vercel üzerinde kolayca dağıtılabilir.

## Hızlı Deploy Adımları

1. **Tüm dosyaları bu haliyle GitHub'a pushla.**
2. **Vercel hesabında yeni bir proje oluştur ve GitHub reposunu bağla.**
3. **Ayarlar:**
   - Framework Preset: `Other` veya `Static`
   - Build Command: (boş bırak)
   - Output Directory: (boş bırak)
   - Environment Variables: (gerek yok)
4. **Deploy'a tıkla.**

## Özel Ayarlar
- `/privacy` adresi otomatik olarak `privacy.php` dosyasına yönlendirilir (vercel.json ile).
- Tüm .php dosyaları doğrudan çalışır.
- PHP desteği için ek bir ayar yapmana gerek yoktur, Vercel otomatik olarak algılar.

## Dosya Yapısı
- `index.php` : Ana sayfa
- `privacy.php` : Gizlilik Politikası (sadece bu sayfa açılır, başka içerik yok)
- `vercel.json` : Vercel yönlendirme ayarları
- `composer.json` : PHP için temel ayar
- `assets/` : CSS, JS ve görseller

## İletişim
Her türlü soru ve iş birliği için: [sametyesilotiletisim@gmail.com](mailto:sametyesilotiletisim@gmail.com)

---
© 2024 Samet Yeşilot
