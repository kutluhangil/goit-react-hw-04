<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8" />
  <title>GOIT React HW-04 | Image Search</title>
</head>
<body>

  <h1>GOIT-REACT-HW-04</h1>

  <p>
    Bu proje, <strong>React</strong> kullanılarak geliştirilmiş bir
    <strong>Görsel Arama (Image Search)</strong> uygulamasıdır.
    Uygulama, kullanıcıdan alınan anahtar kelimeye göre
    <strong>Unsplash API</strong> üzerinden HTTP istekleri yaparak görselleri listeler.
  </p>

  <p>
    Bu ödevin temel amacı:
    <strong>HTTP istekleri</strong>, <strong>React Hook'ları</strong> ve
    <strong>bileşen tabanlı mimari</strong> kullanımını pekiştirmektir.
  </p>

  <hr />

  <h2>🔗 Proje Bağlantıları</h2>

  <ul>
    <li>
      <strong>GitHub Repository:</strong><br />
      <a href="https://github.com/kutluhangil/goit-react-hw-04" target="_blank">
        https://github.com/kutluhangil/goit-react-hw-04
      </a>
    </li>
    <br />
    <li>
      <strong>Canlı Demo (Vercel):</strong><br />
      <a href="https://goit-react-hw-04-self-one.vercel.app/" target="_blank">
        https://goit-react-hw-04-self-one.vercel.app/
      </a>
    </li>
  </ul>

  <hr />

  <h2>📌 Proje Gereksinimleri</h2>

  <ul>
    <li>Proje <strong>Vite</strong> kullanılarak oluşturulmuştur.</li>
    <li>HTTP istekleri için <strong>axios</strong> kütüphanesi kullanılmıştır.</li>
    <li>Stil dosyaları <strong>CSS Modules</strong> ile hazırlanmıştır.</li>
    <li>Tüm bileşenler <code>export default</code> ile dışa aktarılmıştır.</li>
    <li>Kod formatlaması için <strong>Prettier</strong> kullanılmıştır.</li>
    <li>Uygulama çalışırken konsolda hata veya uyarı bulunmamaktadır.</li>
  </ul>

  <hr />

  <h2>🧠 Kullanılan Teknolojiler ve Kütüphaneler</h2>

  <ul>
    <li>React</li>
    <li>Vite</li>
    <li>Axios (HTTP istekleri)</li>
    <li>React Hooks (useState, useEffect)</li>
    <li>React Hot Toast (bildirimler)</li>
    <li>React Modal (modal pencere)</li>
    <li>CSS Modules</li>
  </ul>

  <hr />

  <h2>🌍 Görsel Arama Servisi (Unsplash API)</h2>

  <p>
    Uygulama, görselleri <strong>Unsplash API</strong> üzerinden alır.
    Bunun için Unsplash üzerinde bir geliştirici hesabı oluşturulmuş ve
    bir uygulama kaydı yapılmıştır.
  </p>

  <ul>
    <li>Görseller anahtar kelimeye göre aranır</li>
    <li>Galeride <code>small</code> boyutlu görseller gösterilir</li>
    <li>Modal pencerede <code>regular</code> boyutlu görsel açılır</li>
    <li>API anahtarı güvenlik için <code>.env</code> dosyasında saklanır</li>
  </ul>

  <p>
    ⚠️ Unsplash demo hesapları için API istek limiti
    <strong>saatte 50 istek</strong> ile sınırlıdır.
  </p>

  <hr />

  <h2>🧩 Bileşenler</h2>

  <h3>SearchBar</h3>
  <ul>
    <li>Kullanıcıdan arama kelimesini alır</li>
    <li>Boş gönderimde uyarı mesajı gösterir</li>
    <li>React Hot Toast kullanılmıştır</li>
  </ul>

  <h3>ImageGallery</h3>
  <ul>
    <li>Yüklenen görselleri liste halinde render eder</li>
    <li>Sadece veri varsa görüntülenir</li>
  </ul>

  <h3>ImageCard</h3>
  <ul>
    <li>Tek bir görsel kartını temsil eder</li>
    <li>Tıklanınca modal açılır</li>
  </ul>

  <h3>Loader</h3>
  <ul>
    <li>Veri yüklenirken gösterilir</li>
    <li>Galerinin altına render edilir</li>
  </ul>

  <h3>ErrorMessage</h3>
  <ul>
    <li>HTTP isteği hata verdiğinde gösterilir</li>
  </ul>

  <h3>LoadMoreBtn</h3>
  <ul>
    <li>Bir sonraki sayfayı yükler</li>
    <li>Sadece görseller varsa gösterilir</li>
  </ul>

  <h3>ImageModal</h3>
  <ul>
    <li>Büyük boyutlu görseli gösterir</li>
    <li>ESC veya dış alana tıklayınca kapanır</li>
    <li>React Modal kullanılmıştır</li>
  </ul>

  <hr />

  <h2>🧱 Bileşen Hiyerarşisi</h2>

  <pre>
App
 ├─ SearchBar
 ├─ ImageGallery
 │   ├─ ImageCard
 │   ├─ ImageCard
 │   └─ ImageCard
 ├─ LoadMoreBtn
 ├─ Loader
 ├─ ErrorMessage
 └─ ImageModal
  </pre>

  <hr />

  <h2>📁 Proje Dosya Yapısı</h2>

  <pre>
GOIT-REACT-HW-04
 ├── node_modules
 ├── public
 ├── src
 │   ├── assets
 │   │   └── react.svg
 │   ├── components
 │   │   ├── ErrorMessage
 │   │   ├── ImageCard
 │   │   ├── ImageGallery
 │   │   ├── ImageModal
 │   │   ├── Loader
 │   │   ├── LoadMoreBtn
 │   │   └── SearchBar
 │   ├── services
 │   │   └── unsplash-api.js
 │   ├── App.jsx
 │   ├── App.css
 │   ├── index.css
 │   └── main.jsx
 ├── .env
 ├── .env.example
 ├── .gitignore
 ├── eslint.config.js
 ├── index.html
 ├── package.json
 ├── vite.config.js
 └── README.md
  </pre>

  <hr />

  <h2>🚀 Projeyi Çalıştırma</h2>

  <pre>
npm install
npm run dev
  </pre>

  <p>
    Uygulama varsayılan olarak
    <strong>http://localhost:5173</strong>
    adresinde çalışır.
  </p>

  <hr />

  <h2>✅ Sonuç</h2>

  <p>
    Bu proje ile React'ta:
    <strong>HTTP istekleri</strong>,
    <strong>state yönetimi</strong>,
    <strong>effect kullanımı</strong> ve
    <strong>modüler bileşen yapısı</strong>
    başarıyla uygulanmıştır.
  </p>

</body>
</html>
