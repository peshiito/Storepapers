import React from "react";
import { useCart } from "../CartContext/CartContext";
import "./CartSlider.css";

const CartSlider = ({ visible, onClose }) => {
  const { cart, updateQuantity, removeFromCart, getTotal, sendWhatsApp, clearCart } = useCart();

  if (!visible) return null;

  const handleWhatsApp = () => {
    sendWhatsApp("", "Hola, quiero hacer un pedido:");
  };

  const handleContinueShopping = () => {
    onClose();
  };

  return (
    <>
      <div className="cart-overlay" onClick={onClose}></div>
      <aside className="cart-slider">
        <div className="cart-header">
          <h2>Tu Carrito</h2>
          <button className="close-btn" onClick={onClose} aria-label="Cerrar carrito">
            ✕
          </button>
        </div>

        <div className="cart-content">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <p>El carrito está vacío</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cart.map((item) => {
                  const subtotal = (Number(item.price || 0) * Number(item.quantity || 0)).toFixed(2);
                  return (
                    <div key={item.id} className="cart-item">
                      {item.image ? (
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="item-image"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      ) : (
                        <div className="item-image placeholder">📦</div>
                      )}
                      
                      <div className="item-details">
                        <h4>{item.title}</h4>
                        <p className="item-price">${Number(item.price || 0).toFixed(2)} c/u</p>
                        
                        <div className="quantity-controls">
                          <button 
                            className="quantity-btn"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </button>
                          <span className="quantity">{item.quantity}</span>
                          <button 
                            className="quantity-btn"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                        
                        <p className="item-subtotal">Subtotal: ${subtotal}</p>
                      </div>
                      
                      <button 
                        className="remove-btn"
                        onClick={() => removeFromCart(item.id)}
                        aria-label="Eliminar producto"
                      >
                        🗑️
                      </button>
                    </div>
                  );
                })}
              </div>

              <div className="cart-footer">
                <div className="cart-total">
                  Total: <strong>${getTotal().toFixed(2)}</strong>
                </div>
                
                <div className="cart-actions">
                  <button 
                    className="checkout-btn"
                    onClick={handleWhatsApp}
                  >
                    📱 Enviar por WhatsApp
                  </button>
                  
                  <button 
                    className="clear-cart-btn"
                    onClick={clearCart}
                  >
                    🗑️ Vaciar Carrito
                  </button>
                  
                  <button 
                    className="continue-btn"
                    onClick={handleContinueShopping}
                  >
                    ← Seguir Comprando
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </aside>
    </>
  );
};

export default CartSlider;