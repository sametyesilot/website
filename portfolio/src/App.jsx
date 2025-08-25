import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="profile">
        <img
          src="https://avatars.githubusercontent.com/u/your-github-id?v=4"
          alt="Samet Yeşilot"
          className="avatar"
        />
        <h1>Samet Yeşilot</h1>
        <p className="bio">
          Fırat Üniversitesi Yazılım Mühendisliği öğrencisiyim. Kendimi Kotlin, Unity ve Makine Öğrenmesi alanlarında geliştirmek istiyorum. Araştırmayı ve yeni şeyler öğrenmeyi seviyorum.
        </p>
        <div className="links">
          <a
            href="https://www.linkedin.com/in/sametye%C5%9Filot"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/sametyesilot"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="highlight-skills">
        <h2>Öne Çıkan Alanlarım</h2>
        <ul>
          <li><span className="tag">Kotlin</span></li>
          <li><span className="tag">Unity</span></li>
          <li><span className="tag">Makine Öğrenmesi</span></li>
          <li><span className="tag">Java</span></li>
          <li><span className="tag">C#</span></li>
          <li><span className="tag">React</span></li>
        </ul>
      </div>
      <div className="projects">
        <h2>Projelerim</h2>
        <ul>
          <li>
            <strong>Pomotick</strong> – <span className="tag">Android</span> <br />
            <span className="desc">
              Kişisel üretkenlik için Pomodoro sayaç uygulaması. <a href="#" style={{ color: "#e94560" }}>Google Play'de yakında!</a>
            </span>
          </li>
          <li>
            <strong>Restaurant Management System</strong> – <span className="tag">Java</span> <br />
            <span className="desc">Restoran yönetimi için masaüstü uygulama.</span>
          </li>
          <li>
            <strong>Mayın Tarlası Oyunu</strong> – <span className="tag">C#</span> <br />
            <span className="desc">Klasik mayın tarlası oyununun masaüstü versiyonu.</span>
          </li>
          <li>
            <strong>Adam Asmaca</strong> – <span className="tag">C#</span> <br />
            <span className="desc">Klasik adam asmaca oyunu.</span>
          </li>
          <li>
            <strong>Flappy Bird Oyunu</strong> – <span className="tag">C#</span> <br />
            <span className="desc">Flappy Bird klonu masaüstü oyun.</span>
          </li>
        </ul>
      </div>
      <div className="contact">
        <h2>İletişim</h2>
        <p>
          Bana ulaşmak için <a href="https://www.linkedin.com/in/sametye%C5%9Filot" target="_blank" rel="noopener noreferrer">LinkedIn</a> veya <a href="https://github.com/sametyesilot" target="_blank" rel="noopener noreferrer">GitHub</a> üzerinden mesaj gönderebilirsin.
        </p>
      </div>
      <footer style={{ marginTop: 32, textAlign: "center", fontSize: "0.95rem", color: "#aaa" }}>
        <a href="/privacy.html" style={{ color: "#e94560", textDecoration: "underline" }}>
          Gizlilik Politikası
        </a>
      </footer>
    </div>
  );
}

export default App;
