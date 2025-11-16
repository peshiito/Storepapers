import "./Hero.css";

function Hero() {
  return (
    <section className="hero-compact" id="inicio">
      <div className="compact-container">
        <div className="compact-content">
          <div className="compact-badge">Store Papers</div>
          <h1 className="compact-title">
            Insumos de Papelería <span className="highlight">Creativa</span>
          </h1>
          <p className="compact-description">
            Papeles especiales, vinilos adhesivos y materiales premium para tus
            proyectos. Calidad garantizada y entrega rápida.
          </p>
          <div className="compact-buttons">
            <button className="compact-btn primary">Ver Catálogo</button>
            <button className="compact-btn secondary">Consultar Precios</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
