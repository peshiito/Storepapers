import "./CardProducto.css";
import { useState } from "react";
import { obtenerImagen } from "../../../../helpers/importarImagenes";

// Componente de Imagen mejorado
const ImagenProducto = ({ src, alt, onImageClick, tieneDescuento }) => {
  const [error, setError] = useState(false);
  const [cargando, setCargando] = useState(true);

  const imagenImportada = obtenerImagen(src);

  if (error || !imagenImportada) {
    return (
      <div className="producto-imagen-error" onClick={onImageClick}>
        <div className="error-icon">📷</div>
        <span>Imagen no disponible</span>
      </div>
    );
  }

  return (
    <div className="producto-imagen-container" onClick={onImageClick}>
      {cargando && (
        <div className="imagen-cargando">
          <div className="loading-spinner-small"></div>
        </div>
      )}
      <img
        src={imagenImportada}
        alt={alt}
        className="producto-imagen"
        onLoad={() => setCargando(false)}
        onError={() => {
          setError(true);
          setCargando(false);
        }}
        style={{ display: cargando ? "none" : "block" }}
      />

      {/* Efecto hover */}
      <div className="imagen-overlay">
        <button className="btn-ver-detalles">
          <span>👁️</span>
          Ver detalles
        </button>
      </div>

      {/* Ribbon de descuento */}
      {tieneDescuento && (
        <div className="descuento-ribbon">
          <span>🔥 OFERTA</span>
        </div>
      )}
    </div>
  );
};

// Componente de Rating mejorado
const Rating = ({ calificacion, reseñas = 0 }) => {
  return (
    <div className="producto-rating">
      <div className="estrellas">
        {[1, 2, 3, 4, 5].map((estrella) => (
          <span
            key={estrella}
            className={`estrella ${
              estrella <= calificacion ? "llena" : "vacia"
            }`}
          >
            ★
          </span>
        ))}
      </div>
      <span className="rating-puntaje">{calificacion.toFixed(1)}</span>
      {reseñas > 0 && <span className="rating-resenas">({reseñas})</span>}
    </div>
  );
};

// Componente principal mejorado
const CardProducto = ({ productos, onProductoClick, onAgregarCarrito }) => {
  const [cantidades, setCantidades] = useState({});

  if (!productos || !Array.isArray(productos)) {
    return (
      <div className="productos-container">
        <div className="loading-state">
          <div className="loading-spinner"></div>
          <p>Cargando productos...</p>
        </div>
      </div>
    );
  }

  if (productos.length === 0) {
    return (
      <div className="productos-container">
        <div className="empty-state">
          <div className="empty-icon">📦</div>
          <h2>No hay productos disponibles</h2>
          <p>Prueba ajustando los filtros de búsqueda</p>
        </div>
      </div>
    );
  }

  const formatearPrecio = (precio) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    }).format(precio);
  };

  const calcularDescuento = (precioOriginal, precioDescuento) => {
    if (!precioDescuento || precioDescuento >= precioOriginal) return null;
    const descuento =
      ((precioOriginal - precioDescuento) / precioOriginal) * 100;
    return Math.round(descuento);
  };

  const handleCantidadChange = (productoId, nuevaCantidad) => {
    if (nuevaCantidad < 1) return;
    if (nuevaCantidad > 10) return; // Límite máximo
    setCantidades((prev) => ({
      ...prev,
      [productoId]: nuevaCantidad,
    }));
  };

  const handleAgregarCarrito = (producto, e) => {
    e.stopPropagation();
    const cantidad = cantidades[producto.id] || 1;

    if (onAgregarCarrito) {
      onAgregarCarrito({
        ...producto,
        cantidadSeleccionada: cantidad,
      });
    }

    // Efecto visual de confirmación
    const boton = e.target;
    const textoOriginal = boton.innerHTML;
    boton.innerHTML = "✅ Agregado";
    boton.style.backgroundColor = "#28a745";

    setTimeout(() => {
      boton.innerHTML = textoOriginal;
      boton.style.backgroundColor = "";
    }, 2000);
  };

  return (
    <div className="productos-container">
      <div className="productos-header">
        <div className="header-content">
          <h1>Productos</h1>
        </div>
        <div className="filtros-container">
          <span className="contador-productos">
            {productos.length} producto{productos.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      <div className="productos-grid">
        {productos.map((prod) => {
          const descuento = prod.precio_descuento
            ? calcularDescuento(prod.precio_unitario, prod.precio_descuento)
            : null;

          const cantidad = cantidades[prod.id] || 1;

          return (
            <div
              key={prod.id}
              className="producto-card"
              onClick={() => onProductoClick && onProductoClick(prod)}
            >
              <ImagenProducto
                src={prod.imagen}
                alt={prod.nombre}
                onImageClick={() => onProductoClick && onProductoClick(prod)}
                tieneDescuento={!!descuento}
              />

              <div className="producto-content">
                {/* Categoría */}
                {prod.categoria && (
                  <span className="producto-categoria">{prod.categoria}</span>
                )}

                {/* Nombre */}
                <h3 className="producto-nombre">{prod.nombre}</h3>

                {/* Descripción */}
                {prod.descripcion_corta && (
                  <p className="producto-descripcion">
                    {prod.descripcion_corta}
                  </p>
                )}

                {/* Rating */}
                <Rating
                  calificacion={prod.calificacion || 4.5}
                  reseñas={prod.reseñas || 0}
                />

                {/* Precios */}
                <div className="producto-precios">
                  {descuento ? (
                    <>
                      <div className="precio-descuento-container">
                        <span className="precio-original">
                          {formatearPrecio(prod.precio_unitario)}
                        </span>
                        <span className="descuento-porcentaje">
                          -{descuento}%
                        </span>
                      </div>
                      <span className="precio-actual oferta">
                        {formatearPrecio(prod.precio_descuento)}
                      </span>
                    </>
                  ) : (
                    <span className="precio-actual">
                      {formatearPrecio(prod.precio_unitario)}
                    </span>
                  )}
                </div>

                {/* Stock */}
                <div className="producto-stock">
                  <span
                    className={`stock-indicator ${
                      prod.cantidad > 0 ? "disponible" : "agotado"
                    }`}
                  >
                    {prod.cantidad > 0 ? "✓ En stock" : "✗ Agotado"}
                  </span>
                  {prod.envio_gratis && (
                    <span className="envio-gratis-tag">🚚 Envío gratis</span>
                  )}
                </div>

                {/* Selector de cantidad y carrito */}
                <div className="producto-acciones">
                  <div className="cantidad-selector">
                    <button
                      className="btn-cantidad"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCantidadChange(prod.id, cantidad - 1);
                      }}
                      disabled={cantidad <= 1}
                    >
                      -
                    </button>
                    <span className="cantidad-display">{cantidad}</span>
                    <button
                      className="btn-cantidad"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCantidadChange(prod.id, cantidad + 1);
                      }}
                      disabled={cantidad >= 10}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="btn-agregar-carrito"
                    onClick={(e) => handleAgregarCarrito(prod, e)}
                    disabled={prod.cantidad === 0}
                  >
                    🛒 Agregar
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardProducto;
