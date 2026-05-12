import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import { ArrowRight, Menu, X, Mail } from 'lucide-react';
import './style.css';



function DagdroomLandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const products = [
    { name: 'Halter Drape Top', note: 'The signature feminine piece.' },
    { name: 'Soft Baby Tee', note: 'Minimal, fitted, everyday Nordic mood.' },
    { name: 'Summer Viscose Pants', note: 'Light movement, clean silhouette.' },
  ];

  return (
    <main className="page">
      <header className="header">
        <div className="header-inner">
          <a href="#home" className="logo">Dagdroøm</a>

          <nav className="desktop-nav">
            <a href="#brand">Brand</a>
            <a href="#collection">Collection</a>
            <a href="#waitlist">Waitlist</a>
          </nav>

          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-nav">
            <a href="#brand" onClick={() => setMenuOpen(false)}>Brand</a>
            <a href="#collection" onClick={() => setMenuOpen(false)}>Collection</a>
            <a href="#waitlist" onClick={() => setMenuOpen(false)}>Waitlist</a>
          </div>
        )}
      </header>

      <section id="home" className="hero">
        <div className="blur-one" />
        <div className="blur-two" />

        <div className="hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-copy"
          >
            <p className="eyebrow">Spring / Summer 2027</p>
            <h1>Calm. Clean. Nordic.</h1>
            <p className="hero-text">
              A premium womenswear concept shaped by Scandinavian minimalism, soft sensuality and effortless summer silhouettes.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#waitlist">Join Waitlist <ArrowRight size={16} /></a>
              <a className="button secondary" href="#brand">View Concept</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="hero-visual-wrap"
          >
            <div className="hero-visual">
              <div className="studio-badge">Dagdroøm Studio</div>
              <div className="glass-card">
                <p>Soft power dressing for summer.</p>
                <span>Minimal pieces designed to feel elegant, effortless and quietly magnetic.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="brand" className="brand-section">
        <div className="brand-grid">
          <div>
            <p className="eyebrow light">Brand Direction</p>
            <h2>Nordic minimalism, made warmer.</h2>
          </div>
          <div className="values-grid">
            {['Minimal', 'Feminine', 'Premium'].map((item) => (
              <div key={item} className="value-card">
                <p>{item}</p>
                <span>Clean forms, soft textures and confident restraint for a modern summer wardrobe.</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="collection" className="collection-section">
        <div className="section-head">
          <div>
            <p className="eyebrow">Collection Preview</p>
            <h2>First summer pieces.</h2>
          </div>
          <p>A tight capsule built around wearable statement tops and clean warm-weather essentials.</p>
        </div>

        <div className="product-grid">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="product-card"
            >
              <div className="product-image"><span>0{index + 1}</span></div>
              <div className="product-body">
                <h3>{product.name}</h3>
                <p>{product.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="waitlist" className="waitlist-section">
        <div className="waitlist-card">
          <div>
            <p className="eyebrow">Early Access</p>
            <h2>Be first to enter the room.</h2>
          </div>
          <form className="email-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <input type="email" placeholder="Email address" />
              <button type="submit">Notify Me</button>
            </div>
            <p>No spam. Only launch notes, collection previews and early access updates.</p>
          </form>
        </div>
      </section>

      <footer className="footer">
        <p className="footer-logo">Dagdroøm</p>
        <div className="footer-links">
          <a href="https://instagram.com/dagd.room"><Instagram size={16} /> Instagram</a>
          <a href="mailto:hello@dagdroom.de"><Mail size={16} /> hello@dagdroom.de</a>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<DagdroomLandingPage />);
