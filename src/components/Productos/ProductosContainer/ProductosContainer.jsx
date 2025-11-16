import { useEffect, useState } from "react";
import { traerProductos } from "../../../helpers/traerProductos";
import CardProducto from "../CardProducto/CardProducto";
import "./ProductosContainer.css";

const ProductosContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const cargarProductos = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await traerProductos();
      console.log("Respuesta de la API:", res);
      setProductos(res);
    } catch (err) {
      console.error("Error fetching productos:", err);
      setError("No se pudieron cargar los productos. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  if (loading) {
    return (
      <div className="productos-main-container">
        <div className="loading-fullscreen">
          <div className="spinner"></div>
          <p>Cargando productos...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="productos-main-container">
        <div className="error-container">
          <div className="error-icon">⚠️</div>
          <h2 className="error-title">Error</h2>
          <p className="error-message">{error}</p>
          <button className="retry-button" onClick={cargarProductos}>
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="productos-main-container">
      <div className="productos-content">
        <CardProducto productos={productos} />
      </div>
    </div>
  );
};

export default ProductosContainer;
