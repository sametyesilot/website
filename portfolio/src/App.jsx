import React, { useState } from "react";
import "./App.css";

const blogPosts = [
  {
    id: 1,
    title: "Yapay Zeka ile Hediye Öneri Platformu Geliştirmek",
    date: "2024-06-10",
    summary: "BTK Hackathon'da geliştirdiğimiz GiftGenie'nin teknik detayları ve süreçleri...",
    content: "GiftGenie, hediye seçme sürecini kolaylaştırmak için tasarlanmış yapay zeka destekli bir mobil uygulama...",
  },
  {
    id: 2,
    title: "Kotlin ile Modern Android Uygulama Geliştirme",
    date: "2024-05-20",
    summary: "Kotlin ve Jetpack Compose ile Android uygulama geliştirmenin püf noktaları...",
    content: "Kotlin, modern Android uygulama geliştirme için güçlü bir dil...",
  },
];

const projects = [
  {
    id: 1,
    title: "GiftGenie",
    description: "Yapay zeka destekli hediye öneri platformu (BTK Hackathon)",
    link: "https://github.com/sametyesilot/hediyeApp-main",
    tags: ["Kotlin", "AI", "Mobile"],
  },
  {
    id: 2,
    title: "Pomotick",
    description: "Kişisel üretkenlik için Pomodoro sayaç uygulaması.",
    link: "#",
    tags: ["Android"],
  },
  {
    id: 3,
    title: "Restaurant Management System",
    description: "Restoran yönetimi için masaüstü uygulama.",
    link: "#",
    tags: ["Java", "Desktop"],
  },
];

const apps = [
  {
    id: 1,
    title: "GiftGenie",
    description: "Yapay zeka destekli hediye öneri platformu.",
    link: "https://github.com/sametyesilot/hediyeApp-main",
  },
  {
    id: 2,
    title: "Pomotick",
    description: "Pomodoro sayaç uygulaması.",
    link: "#",
  },
];

function Navbar({ section, setSection }) {
  return (
    <nav className="navbar sticky">
      <div className="nav-logo">Samet Yeşilot</div>
      <ul className="nav-links">
        <li className={section === "home" ? "active" : ""} onClick={() => setSection("home")}>Ana Sayfa</li>
        <li className={section === "blog" ? "active" : ""} onClick={() => setSection("blog")}>Blog</li>
        <li className={section === "projects" ? "active" : ""} onClick={() => setSection("projects")}>Projeler</li>
        <li className={section === "apps" ? "active" : ""} onClick={() => setSection("apps")}>Mobil Uygulamalar</li>
        <li className={section === "tools" ? "active" : ""} onClick={() => setSection("tools")}>Araçlar</li>
        <li className={section === "contact" ? "active" : ""} onClick={() => setSection("contact")}>İletişim</li>
      </ul>
    </nav>
  );
}

function Home({ setSection }) {
  return (
    <div className="home-grid">
      <section className="bio-card">
        <img className="avatar-large" src="https://avatars.githubusercontent.com/u/your-github-id?v=4" alt="Samet Yeşilot" />
        <h1>Samet Yeşilot</h1>
        <p>Yazılım Mühendisliği öğrencisi. Kotlin, Unity, Makine Öğrenmesi ve modern web teknolojileriyle ilgileniyor. Araştırmayı ve üretmeyi seviyor.</p>
        <div className="bio-links">
          <a href="https://www.linkedin.com/in/sametye%C5%9Filot" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/sametyesilot" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </section>
      <section className="section-card">
        <h2>Öne Çıkan Projeler</h2>
        <div className="card-grid">
          {projects.map((p) => (
            <div className="card" key={p.id} onClick={() => setSection("projects")}> {/* tıklayınca projeler sekmesine gider */}
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="tags">{p.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="section-card">
        <h2>Son Blog Yazıları</h2>
        <div className="card-grid">
          {blogPosts.map((b) => (
            <div className="card" key={b.id} onClick={() => setSection("blog")}>
              <h3>{b.title}</h3>
              <p className="blog-date">{b.date}</p>
              <p>{b.summary}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Blog() {
  const [selected, setSelected] = useState(null);
  if (selected) {
    const post = blogPosts.find((b) => b.id === selected);
    return (
      <div className="blog-detail">
        <button className="btn" onClick={() => setSelected(null)}>← Geri</button>
        <h2>{post.title}</h2>
        <p className="blog-date">{post.date}</p>
        <div className="blog-content">{post.content}</div>
      </div>
    );
  }
  return (
    <div className="blog-list">
      <h2>Blog Yazıları</h2>
      <div className="card-grid">
        {blogPosts.map((b) => (
          <div className="card" key={b.id} onClick={() => setSelected(b.id)}>
            <h3>{b.title}</h3>
            <p className="blog-date">{b.date}</p>
            <p>{b.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="project-list">
      <h2>Projeler</h2>
      <div className="card-grid">
        {projects.map((p) => (
          <a className="card" key={p.id} href={p.link} target="_blank" rel="noopener noreferrer">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="tags">{p.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
          </a>
        ))}
      </div>
    </div>
  );
}

function Apps() {
  return (
    <div className="project-list">
      <h2>Mobil Uygulamalarım</h2>
      <div className="card-grid">
        {apps.map((a) => (
          <a className="card" key={a.id} href={a.link} target="_blank" rel="noopener noreferrer">
            <h3>{a.title}</h3>
            <p>{a.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

function Tools() {
  return (
    <div className="project-list">
      <h2>Araçlarım</h2>
      <div className="card-grid">
        <div className="card placeholder">Yakında pratik araçlar burada olacak!</div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="contact-form">
      <h2>İletişim</h2>
      <p>Bana ulaşmak için <a href="https://www.linkedin.com/in/sametye%C5%9Filot" target="_blank" rel="noopener noreferrer">LinkedIn</a> veya <a href="https://github.com/sametyesilot" target="_blank" rel="noopener noreferrer">GitHub</a> üzerinden mesaj gönderebilirsin.</p>
    </div>
  );
}

function App() {
  const [section, setSection] = useState("home");
  return (
    <div>
      <Navbar section={section} setSection={setSection} />
      <main className="main-content">
        {section === "home" && <Home setSection={setSection} />}
        {section === "blog" && <Blog />}
        {section === "projects" && <Projects />}
        {section === "apps" && <Apps />}
        {section === "tools" && <Tools />}
        {section === "contact" && <Contact />}
      </main>
      <footer className="footer">
        <a href="/privacy.html" style={{ color: "#e94560", textDecoration: "underline" }}>
          Gizlilik Politikası
        </a>
      </footer>
    </div>
  );
}

export default App;
