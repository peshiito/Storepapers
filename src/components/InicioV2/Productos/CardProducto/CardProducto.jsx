import React, { useState } from "react";
import "./CardProducto.css";

const CardProducto = ({ productos = [], onAgregarCarrito }) => {
  return (
    <div className="cards-grid">
      {productos.map((p) => {
        return (
          <ProductoCard
            key={p.id}
            producto={p}
            title={p.title}
            price={p.price}
            image={p.image}
            onAgregarCarrito={onAgregarCarrito}
          />
        );
      })}
    </div>
  );
};

const ProductoCard = ({ producto, title, price, image, onAgregarCarrito }) => {
  const [qty, setQty] = useState(1);
  const [adding, setAdding] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [imgLoading, setImgLoading] = useState(!!image);

  const handleAdd = async () => {
    if (typeof onAgregarCarrito === "function") {
      setAdding(true);
      await new Promise(resolve => setTimeout(resolve, 300));
      onAgregarCarrito(producto, Number(qty) || 1);
      setQty(1);
      setAdding(false);
    }
  };

  const handleImageError = () => {
    console.warn(`❌ Error cargando imagen: ${image}`);
    setImgError(true);
    setImgLoading(false);
  };

  const handleImageLoad = () => {
    setImgLoading(false);
    setImgError(false);
  };

  const incrementQty = () => setQty(prev => prev + 1);
  const decrementQty = () => setQty(prev => Math.max(1, prev - 1));

  return (
    <article className="product-card">
      <div className="card-image-container">
        {image && !imgError ? (
          <>
            {imgLoading && (
              <div className="image-loading">
                <div className="loading-spinner">⏳</div>
              </div>
            )}
            <img
              src={image}
              alt={title}
              className="card-image"
              onError={handleImageError}
              onLoad={handleImageLoad}
              style={{ display: imgLoading ? 'none' : 'block' }}
            />
          </>
        ) : (
          <div className="card-image-placeholder">
            📦<span>Imagen no disponible</span>
          </div>
        )}
        
        <div className="card-price">
          ${price.toLocaleString('es-ES')}
        </div>
        
        <div className="card-overlay">
          <button 
            className={`add-button ${adding ? 'adding' : ''}`}
            onClick={handleAdd}
            disabled={adding}
          >
            {adding ? '✓' : '🛒'}
          </button>
        </div>
      </div>

      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        
        <div className="card-actions">
          <div className="quantity-selector">
            <button 
              className="qty-btn minus" 
              onClick={decrementQty}
              disabled={qty <= 1}
            >
              -
            </button>
            <span className="qty-display">{qty}</span>
            <button 
              className="qty-btn plus" 
              onClick={incrementQty}
            >
              +
            </button>
          </div>
          
          <button
            className={`add-to-cart-btn ${adding ? 'adding' : ''}`}
            onClick={handleAdd}
            disabled={adding}
          >
            {adding ? (
              <>
                <span className="spinner"></span>
                Agregando...
              </>
            ) : (
              <>
                <span className="cart-icon">🛒</span>
                Agregar
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
};

export default CardProducto;