import { useState } from "react";
import Carrusel from "./Carrusel_Info/Carrusel";
import "./Infor.css";

// ✅ IMPORTAR LAS IMÁGENES DIRECTAMENTE como en el Hero
import img1 from "../../../assets/Img/Carrusel/img1.webp";
import img2 from "../../../assets/Img/Carrusel/img2.webp";
import img3 from "../../../assets/Img/Carrusel/img3.avif";
import img4 from "../../../assets/Img/Carrusel/img4.jpeg";

function Infor() {
  const [activeTab, setActiveTab] = useState("mision");

  // ✅ Usar las imágenes importadas directamente
  const galleryImages = [img1, img2, img3, img4];

  // Estadísticas del negocio
  const stats = [
    { number: "1", label: "Año de Experiencia" },
    { number: "100+", label: "Clientes Satisfechos" },
    { number: "24/7", label: "Soporte al Cliente" },
  ];

  // Características principales
  const features = [
    {
      icon: "🎯",
      title: "Enfoque Personalizado",
      description:
        "Cada proyecto recibe atención individualizada y soluciones a medida.",
    },
    {
      icon: "⚡",
      title: "Entrega Rápida",
      description:
        "Procesos optimizados para entregas puntuales sin comprometer calidad.",
    },
    {
      icon: "🛡️",
      title: "Garantía de Calidad",
      description:
        "Materiales premium y estándares de control rigurosos en cada trabajo.",
    },
    {
      icon: "💎",
      title: "Resultados Profesionales",
      description:
        "Acabados impecables que elevan la imagen de tu marca o proyecto.",
    },
  ];

  return (
    <section className="infor-section" id="nosotros">
      {/* Hero de la sección */}
      <div className="infor-hero">
        <div className="hero-content">
          <div className="hero-badge">Store Papers</div>
          <h1 className="hero-title">
            Excelencia en <span className="highlight">Cada Detalle</span>
          </h1>
          <p className="hero-description">
            Inspiramos tu creatividad con materiales de papelería de calidad
            superior. Con una gran variedad de papeles, vinilos y adhesivos, te
            ayudamos a dar forma a tus proyectos creativos con productos que
            destacan por su estilo, textura y durabilidad.
          </p>
        </div>
      </div>

      <div className="infor-container">
        {/* Estadísticas */}
        <div className="stats-section">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Sección principal con tabs */}
        <div className="main-content">
          <div className="content-tabs">
            <button
              className={`tab-button ${activeTab === "mision" ? "active" : ""}`}
              onClick={() => setActiveTab("mision")}
            >
              Nuestra Misión
            </button>
            <button
              className={`tab-button ${activeTab === "vision" ? "active" : ""}`}
              onClick={() => setActiveTab("vision")}
            >
              Visión Futura
            </button>
            <button
              className={`tab-button ${
                activeTab === "valores" ? "active" : ""
              }`}
              onClick={() => setActiveTab("valores")}
            >
              Valores
            </button>
          </div>

          <div className="tab-content">
            {activeTab === "mision" && (
              <div className="tab-panel">
                <div className="panel-content">
                  <div className="panel-text">
                    <h2>Impulsando Tu Creatividad</h2>
                    <p>
                      En <strong>Store Papers</strong>, acompañamos tus
                      proyectos con los mejores insumos de papelería creativa.
                      Ofrecemos materiales de calidad para que tus ideas cobren
                      vida y cada creación refleje tu estilo único.
                    </p>
                    <ul className="feature-list">
                      <li>
                        ✅ Amplia variedad de papeles, vinilos y adhesivos
                      </li>
                      <li>
                        ✅ Productos seleccionados para proyectos creativos
                      </li>
                      <li>✅ Asesoramiento cercano y atención personalizada</li>
                      <li>✅ Calidad garantizada y envíos rápidos</li>
                    </ul>
                  </div>
                  <div className="panel-visual">
                    <div className="visual-card">
                      <div className="card-icon">🎨</div>
                      <h4>Creatividad Sin Límites</h4>
                      <p>Desde diseños simples hasta proyectos complejos</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "vision" && (
              <div className="tab-panel">
                <div className="panel-content">
                  <div className="panel-text">
                    <h2>Liderando la Innovación Gráfica</h2>
                    <div>
                      <p>
                        En <strong>Store Papers</strong>, impulsamos el futuro
                        de la impresión con una visión enfocada en la mejora
                        constante. Buscamos ser un referente en la industria
                        gráfica regional, incorporando tecnologías emergentes y
                        perfeccionando cada técnica para ofrecer resultados de
                        excelencia.
                      </p>
                      <div className="vision-goals">
                        <div className="goal-item">
                          <span className="goal-check">✓</span>
                          Expansión de servicios digitales integrados
                        </div>
                        <div className="goal-item">
                          <span className="goal-check">✓</span>
                          Sustentabilidad en procesos y materiales
                        </div>
                        <div className="goal-item">
                          <span className="goal-check">✓</span>
                          Formación continua de nuestro equipo
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "valores" && (
              <div className="tab-panel">
                <div className="values-grid">
                  <div className="value-item">
                    <div className="value-icon">🤝</div>
                    <h4>Integridad</h4>
                    <p>
                      Transparencia y honestidad en cada interacción y proceso.
                    </p>
                  </div>
                  <div className="value-item">
                    <div className="value-icon">🤝</div>
                    <h4>Integridad</h4>
                    <p>
                      Actuamos con transparencia y honestidad en cada proyecto,
                      construyendo relaciones basadas en la confianza.
                    </p>
                  </div>
                  <div className="value-item">
                    <div className="value-icon">🌟</div>
                    <h4>Excelencia</h4>
                    <p>
                      Buscamos la perfección en cada detalle, garantizando
                      resultados que superen las expectativas.
                    </p>
                  </div>
                  <div className="value-item">
                    <div className="value-icon">🚀</div>
                    <h4>Innovación</h4>
                    <p>
                      Nos adaptamos constantemente a las nuevas tecnologías y
                      tendencias para mantenernos a la vanguardia del diseño
                      gráfico.
                    </p>
                  </div>
                  <div className="value-item">
                    <div className="value-icon">❤️</div>
                    <h4>Pasión</h4>
                    <p>
                      Amamos lo que hacemos, y esa energía se refleja en cada
                      impresión y en cada idea que materializamos.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Características destacadas */}
        <div className="features-section">
          <div className="section-header">
            <h2>¿Por Qué Elegirnos?</h2>
            <p>
              Combinamos calidad, variedad y dedicación para ofrecerte los
              mejores insumos creativos del mercado.
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Galería con carrusel */}
        <div className="gallery-section">
          <div className="section-header">
            <h2>Nuestros Productos</h2>
            <p>
              Una selección de materiales y papeles ideales para tus proyectos
              creativos y manualidades.
            </p>
          </div>
          <div className="gallery-container">
            <Carrusel images={galleryImages} autoPlayInterval={5000} />
          </div>
        </div>

        {/* CTA Final */}
        <div className="cta-section">
          <div className="cta-content">
            <h2>¿Listo para Dar Vida a Tus Creaciones?</h2>
            <p>
              Descubrí todo lo que <strong>Store Papers</strong> tiene para vos
              y elevá tus proyectos con materiales de primera calidad.
            </p>
            <div className="cta-buttons">
              <button className="cta-btn primary">Ver Productos</button>
              <button className="cta-btn secondary">
                Solicitar Cotización
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Infor;
