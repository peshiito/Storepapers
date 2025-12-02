import { useState } from "react";
import "./Footer.css";

function Footer() {
  // Datos que puedes modificar fácilmente
  const companyInfo = {
    name: "Store",
    tagline: "Papers",
    description:
      "La tienda de excelencia para conseguir tus mejores insumos de papeleria",
    logo: "🖨️",
  };

  const quickLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Productos", href: "#productos" },
    { name: "Contacto", href: "#contacto" },
  ];

  const services = [
    "Productos de Papeleria",
    "Alta Calidad",
    "Entrega Inmediata",
    "Papeleria Creativa Insumos",
  ];

  const contactInfo = [
    { icon: "📱", text: "+54 9 11 2894-7318" },
    { icon: "📍", text: "Moreno, Buenos Aires" },
    { icon: "🕒", text: "Lun-Vie: 9:00 - 18:00" },
  ];

  // Solo las redes sociales que necesitas
  const socialLinks = [
    { name: "Instagram", icon: "📷", href: "#" },
    { name: "Facebook", icon: "👥", href: "#" },
    { name: "WhatsApp", icon: "💬", href: "#" },
  ];

  const trustBadges = [
    { icon: "⭐", text: "Calidad Garantizada" },
    { icon: "🚚", text: "Envíos Rápidos" },
  ];

  const paymentMethods = [
    { icon: "💳", name: "Tarjetas" },
    { icon: "📱", name: "Pagos móviles" },
    { icon: "💰", name: "Efectivo" },
    { icon: "🏦", name: "Transferencias" },
  ];

  return (
    <footer className="footer">
      {/* Wave separator */}
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Company Info */}
          <div className="footer-section company-info">
            <div className="footer-logo">
              <div className="logo-icon">{companyInfo.logo}</div>
              <div className="logo-text">
                <span className="logo-name">{companyInfo.name}</span>
                <span className="logo-tagline">{companyInfo.tagline}</span>
              </div>
            </div>
            <p className="company-description">{companyInfo.description}</p>
            <div className="trust-badges">
              {trustBadges.map((badge, index) => (
                <div key={index} className="trust-badge">
                  <span className="badge-icon">{badge.icon}</span>
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Enlaces Rápidos</h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    <span className="link-icon">→</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3 className="footer-title">Nuestros Servicios</h3>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#servicios" className="footer-link">
                    <span className="link-icon">•</span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">Contacto Directo</h3>
            <div className="contact-info">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-item">
                  <span className="contact-icon">{item.icon}</span>
                  <span className="contact-text">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            {/* Social Links */}
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="social-link"
                  aria-label={social.name}
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-name">{social.name}</span>
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="copyright">
              <p>
                &copy; 2024 Floty Impresiones. Todos los derechos reservados.
              </p>
              <div className="legal-links">
                <a href="#privacidad">Política de Privacidad</a>
                <a href="#terminos">Términos de Servicio</a>
                <a href="#cookies">Cookies</a>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="payment-methods">
              <div className="payment-title">Métodos de Pago</div>
              <div className="payment-icons">
                {paymentMethods.map((method, index) => (
                  <span
                    key={index}
                    className="payment-icon"
                    title={method.name}
                  >
                    {method.icon}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Volver al inicio"
        >
          <span className="arrow-up">↑</span>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
