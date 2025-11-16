import "./CardProducto.css";
import { useState } from "react";
import { obtenerImagen } from "../../../../helpers/importarImagenes";

const ImagenProducto = ({ src, alt }) => {
  const [error, setError] = useState(false);
  const [cargando, setCargando] = useState(true);

  // Obtener la imagen importada
  const imagenImportada = obtenerImagen(src);

  if (error || !imagenImportada) {
    return (
      <div className="producto-imagen-error">
        <span>Imagen no disponible</span>
      </div>
    );
  }

  return (
    <div className="producto-imagen-container">
      {cargando && <div className="imagen-cargando">Cargando...</div>}
      <img
        src={imagenImportada}
        alt={alt}
        className="producto-imagen"
        onLoad={() => setCargando(false)}
        onError={() => {
          console.log(`Error cargando imagen: ${src}`);
          setError(true);
          setCargando(false);
        }}
        style={{ display: cargando ? "none" : "block" }}
      />
    </div>
  );
};

const CardProducto = ({ productos }) => {
  // Validar que productos existe y es un array
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

  // Validar si el array está vacío
  if (productos.length === 0) {
    return (
      <div className="productos-container">
        <div className="empty-state">
          <h2>No hay productos disponibles</h2>
          <p>Intenta más tarde o contacta al administrador.</p>
        </div>
      </div>
    );
  }

  // Función para formatear precio
  const formatearPrecio = (precio) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
    }).format(precio);
  };

  return (
    <div className="productos-container">
      <div className="productos-header">
        <h1>Nuestros Productos</h1>
        <p>
          Descubre nuestra amplia gama de productos cuidadosamente seleccionados
          para satisfacer todas tus necesidades con la mejor calidad del
          mercado.
        </p>
      </div>

      <div className="productos-grid">
        {productos.map((prod, index) => (
          <div key={index} className="producto-card">
            <ImagenProducto src={prod.imagen} alt={prod.nombre} />
            <h3 className="producto-nombre">{prod.nombre}</h3>
            <div className="producto-info">
              <span className="producto-precio">
                {formatearPrecio(prod.precio_unitario)}
              </span>
              <span className="producto-cantidad">Stock: {prod.cantidad}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardProducto;
