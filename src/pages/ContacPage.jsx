import React, { useState, useRef } from "react";
import "./Contacto.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
    urgency: "normal",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulación de envío
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setCurrentStep(4); // Paso de éxito
  };

  const services = [
    {
      icon: "🎨",
      name: "Diseño Web",
      description: "Desarrollo de interfaces modernas",
    },
    {
      icon: "🛒",
      name: "E-commerce",
      description: "Tiendas online profesionales",
    },
    {
      icon: "📱",
      name: "Apps Móviles",
      description: "Aplicaciones iOS y Android",
    },
    { icon: "🔍", name: "SEO & Marketing", description: "Posicionamiento web" },
    {
      icon: "☁️",
      name: "Cloud Solutions",
      description: "Infraestructura en la nube",
    },
    {
      icon: "🤖",
      name: "AI Integration",
      description: "Inteligencia artificial",
    },
  ];

  const stats = [
    { number: "24h", label: "Tiempo Respuesta" },
    { number: "98%", label: "Satisfacción Cliente" },
    { number: "50+", label: "Proyectos Completados" },
    { number: "5★", label: "Rating Promedio" },
  ];

  return (
    <div className="contact-page">
      {/* Background Elements */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="contact-container">
        {/* Header con Partículas */}
        <div className="contact-hero">
          <div className="hero-content">
            <div className="badge">🚀 Contacto Premium</div>
            <h1 className="hero-title">
              Transformemos Tus
              <span className="gradient-text"> Ideas en Realidad</span>
            </h1>
            <p className="hero-subtitle">
              Soluciones digitales innovadoras para impulsar tu negocio al
              siguiente nivel
            </p>

            {/* Stats Grid */}
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="contact-content">
          {/* Panel de Información Mejorado */}
          <div className="contact-info-panel">
            <div className="info-card premium-card">
              <div className="card-header">
                <div className="card-icon">💼</div>
                <h3>Información Corporativa</h3>
              </div>

              <div className="contact-methods">
                <div className="contact-method enhanced">
                  <div className="method-icon">🌍</div>
                  <div className="method-content">
                    <h4>Oficinas Globales</h4>
                    <p>New York • London • Tokyo • Sydney</p>
                    <span className="method-sub">Presencial & Remoto</span>
                  </div>
                </div>

                <div className="contact-method enhanced">
                  <div className="method-icon">📞</div>
                  <div className="method-content">
                    <h4>Líneas Directas</h4>
                    <p>+1 (555) 123-4567</p>
                    <p>+44 20 7946 0958</p>
                    <span className="method-sub">24/7 Support Available</span>
                  </div>
                </div>

                <div className="contact-method enhanced">
                  <div className="method-icon">📧</div>
                  <div className="method-content">
                    <h4>Email Corporativo</h4>
                    <p>ceo@storepapers.com</p>
                    <p>solutions@storepapers.com</p>
                    <span className="method-sub">Respuesta en 2-4 horas</span>
                  </div>
                </div>

                <div className="contact-method enhanced">
                  <div className="method-icon">🕒</div>
                  <div className="method-content">
                    <h4>Horarios Flexibles</h4>
                    <p>Lun-Vie: 6:00 - 22:00 GMT</p>
                    <p>Sab-Dom: Emergencias 24/7</p>
                    <span className="method-sub">Timezone Friendly</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Showcase */}
            <div className="services-section">
              <h3>Servicios Especializados</h3>
              <div className="services-grid">
                {services.map((service, index) => (
                  <div key={index} className="service-card">
                    <div className="service-icon">{service.icon}</div>
                    <h4>{service.name}</h4>
                    <p>{service.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="trust-badges">
              <div className="trust-item">
                <div className="trust-icon">🔒</div>
                <span>NDA Disponible</span>
              </div>
              <div className="trust-item">
                <div className="trust-icon">⭐</div>
                <span>Certificados Google</span>
              </div>
              <div className="trust-item">
                <div className="trust-icon">🏆</div>
                <span>Premio Excelencia 2024</span>
              </div>
            </div>
          </div>

          {/* Formulario Multi-step Mejorado */}
          <div className="contact-form-panel">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="multi-step-form"
            >
              {/* Progress Bar */}
              <div className="form-progress">
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${(currentStep / 3) * 100}%` }}
                  ></div>
                </div>
                <div className="step-indicators">
                  <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
                    1
                  </div>
                  <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
                    2
                  </div>
                  <div className={`step ${currentStep >= 3 ? "active" : ""}`}>
                    3
                  </div>
                </div>
              </div>

              {/* Step 1: Información Básica */}
              {currentStep === 1 && (
                <div className="form-step">
                  <h2>Información Personal</h2>
                  <p className="step-description">
                    Comencemos con tus datos básicos
                  </p>

                  <div className="form-grid">
                    <div className="form-group enhanced">
                      <label>Nombre Completo *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Ej: María González"
                      />
                    </div>

                    <div className="form-group enhanced">
                      <label>Email Corporativo *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="tu@empresa.com"
                      />
                    </div>

                    <div className="form-group enhanced">
                      <label>Empresa</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nombre de tu empresa"
                      />
                    </div>

                    <div className="form-group enhanced">
                      <label>Teléfono</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <button type="button" className="btn-next" onClick={nextStep}>
                    Continuar <span>→</span>
                  </button>
                </div>
              )}

              {/* Step 2: Detalles del Proyecto */}
              {currentStep === 2 && (
                <div className="form-step">
                  <h2>Detalles del Proyecto</h2>
                  <p className="step-description">
                    Cuéntanos más sobre tu proyecto
                  </p>

                  <div className="form-group enhanced">
                    <label>Servicio de Interés *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="web-design">Diseño Web</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="mobile-app">App Móvil</option>
                      <option value="seo">SEO & Marketing</option>
                      <option value="cloud">Cloud Solutions</option>
                      <option value="ai">AI Integration</option>
                    </select>
                  </div>

                  <div className="form-group enhanced">
                    <label>Presupuesto Estimado</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                    >
                      <option value="">Selecciona un rango</option>
                      <option value="1k-5k">$1,000 - $5,000</option>
                      <option value="5k-15k">$5,000 - $15,000</option>
                      <option value="15k-50k">$15,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                  </div>

                  <div className="form-group enhanced">
                    <label>Urgencia del Proyecto</label>
                    <div className="urgency-buttons">
                      {["Baja", "Normal", "Alta", "Crítica"].map((level) => (
                        <label key={level} className="urgency-option">
                          <input
                            type="radio"
                            name="urgency"
                            value={level.toLowerCase()}
                            checked={formData.urgency === level.toLowerCase()}
                            onChange={handleChange}
                          />
                          <span className="urgency-label">{level}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="form-actions">
                    <button
                      type="button"
                      className="btn-prev"
                      onClick={prevStep}
                    >
                      ← Anterior
                    </button>
                    <button
                      type="button"
                      className="btn-next"
                      onClick={nextStep}
                    >
                      Continuar <span>→</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Mensaje Final */}
              {currentStep === 3 && (
                <div className="form-step">
                  <h2>Mensaje Detallado</h2>
                  <p className="step-description">
                    Describe tu proyecto en detalle
                  </p>

                  <div className="form-group enhanced">
                    <label>Mensaje *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      placeholder="Describe tus objetivos, requerimientos técnicos, timeline esperado, y cualquier detalle relevante..."
                      required
                    ></textarea>
                  </div>

                  <div className="form-checkbox">
                    <label>
                      <input type="checkbox" required />
                      <span>
                        Acepto recibir comunicaciones y he leído la política de
                        privacidad
                      </span>
                    </label>
                  </div>

                  <div className="form-actions">
                    <button
                      type="button"
                      className="btn-prev"
                      onClick={prevStep}
                    >
                      ← Anterior
                    </button>
                    <button
                      type="submit"
                      className="btn-submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="loading-spinner"></div>
                          Enviando...
                        </>
                      ) : (
                        "🎯 Enviar Propuesta"
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Success */}
              {currentStep === 4 && (
                <div className="success-step">
                  <div className="success-animation">✨</div>
                  <h2>¡Propuesta Enviada con Éxito!</h2>
                  <p className="success-message">
                    Hemos recibido tu información. Nuestro equipo se contactará
                    contigo en las próximas 2 horas para coordinar una reunión
                    estratégica.
                  </p>
                  <div className="success-details">
                    <div className="detail-item">
                      <span>📧</span>
                      <span>Email de confirmación enviado</span>
                    </div>
                    <div className="detail-item">
                      <span>👥</span>
                      <span>Ejecutivo asignado: María González</span>
                    </div>
                    <div className="detail-item">
                      <span>⏰</span>
                      <span>Próximo contacto: 2 horas máximo</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn-reset"
                    onClick={() => {
                      setCurrentStep(1);
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        phone: "",
                        service: "",
                        budget: "",
                        message: "",
                        urgency: "normal",
                      });
                    }}
                  >
                    Enviar Nueva Propuesta
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
