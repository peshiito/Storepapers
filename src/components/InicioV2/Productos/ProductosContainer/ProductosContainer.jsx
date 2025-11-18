import React, { useEffect, useState } from "react";
import { useCart } from "../../Cart/CartContext/CartContext";
import { traerProductos } from "../../../../helpers/traerProductos";
import { obtenerImagen } from "../../../../helpers/importarImagenes"; 
import CardProducto from "../CardProducto/CardProducto";
import "./ProductosContainer.css";

const ProductosContainer = () => {
  const { addToCart } = useCart();
  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("nombre");

  const cargarProductos = async () => {
    try {
      setLoading(true);
      setError(null);

      console.log("🔄 Iniciando carga de productos...");

      const res = await traerProductos();
      console.log("📦 Productos cargados:", res);

      if (!res?.Data || !Array.isArray(res.Data)) {
        throw new Error("Formato de datos inválido");
      }

      const normalized = res.Data.map((p, index) => {
        console.log(`🖼️ Procesando: ${p.nombre}`);
        console.log(`   📁 Imagen (JSON): ${p.imagen}`);

        // ✔ Cargar correctamente la imagen desde src/components/data/productos
        const imagenCargada = obtenerImagen(p.imagen);

        console.log(`   🔗 Imagen cargada:`, imagenCargada);

        return {
          id: `prod-${index}-${Date.now()}`,
          title: p.nombre || "Producto sin nombre",
          price: Number(p.precio_unitario || p.precio || 0),
          image: imagenCargada, // <-- 👍 IMAGEN CARGADA AUTOMÁTICAMENTE
          raw: p,
          category: p.categoria || "general"
        };
      });

      console.log("🎉 Todos los productos normalizados:", normalized);
      setProductos(normalized);
      setProductosFiltrados(normalized);

    } catch (err) {
      console.error("❌ Error cargando productos:", err);
      setError("No se pudieron cargar los productos. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  // ─────────────────────────────────────────────
  // FILTROS Y BÚSQUEDA
  // ─────────────────────────────────────────────
  useEffect(() => {
    let filtered = [...productos];

    if (searchTerm) {
      filtered = filtered.filter(producto =>
        producto.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "precio-asc":
          return a.price - b.price;
        case "precio-desc":
          return b.price - a.price;
        case "nombre":
        default:
          return a.title.localeCompare(b.title);
      }
    });

    setProductosFiltrados(filtered);
  }, [productos, searchTerm, sortBy]);

  useEffect(() => {
    cargarProductos();
  }, []);

  const handleAgregarCarrito = (producto, qty = 1) => {
    console.log("🛒 Agregando al carrito:", producto, "cantidad:", qty);
    addToCart(producto, qty);
  };

  // ─────────────────────────────────────────────
  // LOADING
  // ─────────────────────────────────────────────
  if (loading) {
    return (
      <div className="productos-main-container">
        <div className="loading-fullscreen">
          <div className="spinner"></div>
          <p className="loading-text">Cargando productos...</p>
          <p className="loading-subtext">Preparando nuestro catálogo para ti</p>
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────
  // ERROR
  // ─────────────────────────────────────────────
  if (error) {
    return (
      <div className="productos-main-container">
        <div className="error-container">
          <div className="error-icon">⚠️</div>
          <h2 className="error-title">Error al cargar</h2>
          <p className="error-message">{error}</p>
          <button className="retry-button" onClick={cargarProductos}>
            🔄 Reintentar
          </button>
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────
  // RENDER NORMAL
  // ─────────────────────────────────────────────
  return (
    <div className="productos-main-container">
      <div className="productos-content">

        <div className="productos-header">
          <h2 className="productos-title">Nuestros Productos</h2>
          <p className="productos-subtitle">
            Descubre nuestra selección premium de materiales de impresión y papelería especializada
          </p>
        </div>

        {/* Estadísticas */}
        <div className="productos-stats">
          <div className="stat-item">
            <span className="stat-number">{productos.length}</span>
            <span className="stat-label">Productos</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">
              {new Set(productos.map(p => p.category)).size}
            </span>
            <span className="stat-label">Categorías</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">
              ${Math.min(...productos.map(p => p.price)).toLocaleString('es-ES')}
            </span>
            <span className="stat-label">Desde</span>
          </div>
        </div>

        {/* Filtros y Búsqueda */}
        <div className="productos-filters">
          <div className="filter-group">
            <span className="filter-label">Ordenar por:</span>
            <select 
              className="filter-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="nombre">Nombre</option>
              <option value="precio-asc">Precio: Menor a Mayor</option>
              <option value="precio-desc">Precio: Mayor a Menor</option>
            </select>
          </div>

          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              className="search-input"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Grid de Productos */}
        <div className="cards-grid-container">
          {productosFiltrados.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">🔍</div>
              <h3 className="empty-title">No se encontraron productos</h3>
              <p className="empty-message">
                {searchTerm 
                  ? `No hay productos que coincidan con "${searchTerm}"`
                  : "No hay productos disponibles en este momento"
                }
              </p>
              {searchTerm && (
                <button 
                  className="retry-button"
                  onClick={() => setSearchTerm("")}
                >
                  Mostrar todos los productos
                </button>
              )}
            </div>
          ) : (
            <>
              <CardProducto 
                productos={productosFiltrados} 
                onAgregarCarrito={handleAgregarCarrito} 
              />
              
              <div className="productos-footer">
                <p className="footer-text">
                  Mostrando {productosFiltrados.length} de {productos.length} productos
                  {searchTerm && ` para "${searchTerm}"`}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductosContainer;
