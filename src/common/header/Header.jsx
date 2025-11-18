import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header({ onAbrirCarrito }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contadorCarrito, setContadorCarrito] = useState(0);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  const isActive = (path) => location.pathname === path;

  // Efecto para actualizar el contador del carrito
  useEffect(() => {
    const actualizarContador = () => {
      const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");
      const totalItems = carrito.reduce(
        (sum, item) => sum + (item.cantidadSeleccionada || 1),
        0
      );
      setContadorCarrito(totalItems);
    };

    // Actualizar al montar
    actualizarContador();

    // Escuchar cambios en localStorage
    const handleStorageChange = () => {
      actualizarContador();
    };

    window.addEventListener("storage", handleStorageChange);

    // Polling para detectar cambios (en caso de misma pestaña)
    const interval = setInterval(actualizarContador, 1000);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  const handleAbrirCarrito = () => {
    if (onAbrirCarrito) {
      onAbrirCarrito();
    }
    closeMenu(); // Cerrar menú hamburguesa si está abierto
  };

  return (
    <header className="header_container">
      <div className="logo_container">
        <Link to="/" className="text_logo" onClick={closeMenu}>
          <h1 className="logo_text">storepapers</h1>
        </Link>
      </div>

      {/* Contenedor para hamburguesa y carrito en móvil */}
      <div className="mobile-controls">
        {/* Botón del carrito - Visible en móvil y desktop */}
        <button
          className="carrito-btn"
          onClick={handleAbrirCarrito}
          aria-label="Abrir carrito"
        >
          <span className="carrito-icon">🛒</span>
          {contadorCarrito > 0 && (
            <span className="carrito-contador">{contadorCarrito}</span>
          )}
        </button>

        {/* Menú hamburguesa - Solo móvil */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav className={`listas ${menuOpen ? "show" : ""}`}>
        <ul>
          <li className={isActive("/") ? "active" : ""}>
            <Link to="/" onClick={closeMenu}>
              Inicio
            </Link>
          </li>

          <li className={isActive("/productos") ? "active" : ""}>
            <Link to="/productos" onClick={closeMenu}>
              Pedido
            </Link>
          </li>

          <li className={isActive("/contacto") ? "active" : ""}>
            <Link to="/contacto" onClick={closeMenu}>
              Contacto
            </Link>
          </li>

          {/* Carrito en versión desktop dentro del nav */}
          <li className="carrito-desktop-item">
            <button
              className="carrito-desktop-btn"
              onClick={handleAbrirCarrito}
            >
              <span className="carrito-icon">🛒</span>
              Carrito
              {contadorCarrito > 0 && (
                <span className="carrito-contador-desktop">
                  {contadorCarrito}
                </span>
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
