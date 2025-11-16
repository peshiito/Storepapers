import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  const isActive = (path) => location.pathname === path;

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

          <li className={isActive("/productos") ? "active" : ""}>
            <Link to="/productos" onClick={closeMenu}>
              Productos
            </Link>
          </li>

          <li className={isActive("/contacto") ? "active" : ""}>
            <Link to="/contacto" onClick={closeMenu}>
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
