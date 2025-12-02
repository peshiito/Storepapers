import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  const isActive = (path) => location.pathname === path;

  // Función para navegar a la sección de contacto
  const scrollToContact = () => {
    closeMenu();
    // Si estamos en la página de inicio, hacer scroll a contacto
    if (location.pathname === "/") {
      const contactSection = document.getElementById("contact-section");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Si estamos en otra página, navegar al inicio y luego hacer scroll
      window.location.href = "/#contact-section";
    }
  };

  return (
    <header className="header_container">
      <div className="logo_container">
        <Link to="/" className="text_logo" onClick={closeMenu}>
          <h1 className="logo_text">storepapers</h1>
        </Link>
      </div>

      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`listas ${menuOpen ? "show" : ""}`}>
        <ul>
          <li className={isActive("/") ? "active" : ""}>
            <Link to="/" onClick={closeMenu}>
              Inicio
            </Link>
          </li>

          {/* Opción 1: Navegar a página de contacto separada */}
          <li className={isActive("/contact") ? "active" : ""}>
            <Link to="/contact" onClick={closeMenu}>
              Contacto
            </Link>
          </li>

          {/* Opción 2: Scroll a sección de contacto en la misma página */}
          <li>
            <button className="contact-link-button" onClick={scrollToContact}>
              Contáctanos
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
