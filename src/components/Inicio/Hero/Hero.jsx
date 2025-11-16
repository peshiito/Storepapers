import { useState, useEffect } from "react";
import img_papel_adhesivo from "../../../assets/Img/Productos/Hojas_papel_adhesivo_100hojas.png";
import img_papel_fotografico from "../../../assets/Img/Productos/Papel_fotografico_100hojas.png";
import "./Hero.css";

function Hero() {
  const [currentText, setCurrentText] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const texts = ["imprenta", "diseño", "calidad", "creatividad"];

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section className="hero">
      <div className="hero-bg-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>🌟 Calidad Premium Garantizada</span>
          </div>

          <h1 className="hero-title">
            <span className="title-main">Store Papers</span>
            <span className="title-subtitle">
              Donde la excelencia se encuentra con la{" "}
              <span className="text-rotator">{texts[currentText]}</span>
            </span>
          </h1>

          <p className="hero-description">
            Somos tu aliado creativo en el mundo de la papelería especializada.
            <strong>
              {" "}
              Ofrecemos materiales premium, vinilos de alta resistencia,
              adhesivos profesionales y papeles únicos
            </strong>{" "}
            que transforman tus ideas en proyectos extraordinarios.
          </p>

          <div className="hero-features">
            <div className="feature-item">
              <div className="feature-icon">🚀</div>
              <div className="feature-text">
                <span className="feature-title">Entrega Express</span>
                <span className="feature-desc">24-48 horas</span>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🎯</div>
              <div className="feature-text">
                <span className="feature-title">Precisión Total</span>
                <span className="feature-desc">Cortes perfectos</span>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💎</div>
              <div className="feature-text">
                <span className="feature-title">Materiales Elite</span>
                <span className="feature-desc">Calidad superior</span>
              </div>
            </div>
          </div>

          <div className="hero-buttons">
            <button className="btn btn-primary">
              <span>Explorar Catálogo</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="btn btn-secondary">
              <span>Contactar Asesor</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="image-container">
            <div className="image-card card-1">
              <div className="image-wrapper">
                <img
                  src={img_papel_fotografico}
                  alt="Papel Fotográfico Premium"
                  className="hero-image"
                />
              </div>
              <div className="image-badge">Nuevo Lanzamiento</div>
              <div className="card-glow"></div>
            </div>
            <div className="image-card card-2">
              <div className="image-wrapper">
                <img
                  src={img_papel_adhesivo}
                  alt="Hojas Papel Adhesivo"
                  className="hero-image"
                />
              </div>
              <div className="image-badge">Más Vendido</div>
              <div className="card-glow"></div>
            </div>

            {/* Elementos flotantes que desaparecen en móvil */}
            {!isMobile && (
              <>
                <div className="floating-element element-1">🎨</div>
                <div className="floating-element element-2">📐</div>
                <div className="floating-element element-3">🖨️</div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <span>Descubre Nuestros Productos</span>
      </div>
    </section>
  );
}

export default Hero;
