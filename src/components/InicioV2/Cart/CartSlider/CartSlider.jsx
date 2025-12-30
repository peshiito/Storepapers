import React, { useState } from "react";
import { useCart } from "../CartContext/CartContext";
import "./CartSlider.css";

const CartSlider = ({ visible, onClose }) => {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    getTotal,
    clearCart,
    formatPrice,
  } = useCart();

  const [hasRecargo, setHasRecargo] = useState(true);
  const RECARGO = 1200;

  if (!visible) return null;

  const getFinalTotal = () => {
    const baseTotal = getTotal();
    return hasRecargo ? baseTotal + RECARGO : baseTotal;
  };

  // Función para generar el mensaje de WhatsApp (mover aquí toda la lógica)
  const generateWhatsAppMessage = () => {
    const finalTotal = getFinalTotal();

    let message = "Hola, quiero hacer un pedido:\n\n";
    message += "— Detalle del pedido —\n\n";

    cart.forEach((item, index) => {
      const subtotal = Number(item.price || 0) * Number(item.quantity || 0);
      message += `${index + 1}) ${item.title}\n`;
      message += `   • Cantidad: ${item.quantity}\n`;
      message += `   • Precio unitario: $${formatPrice(
        Number(item.price || 0)
      )}\n`;
      message += `   • Subtotal: $${formatPrice(subtotal)}\n\n`;
    });

    message += `Recargo : ${hasRecargo ? "Sí" : "No"}\n`;

    if (hasRecargo) {
      message += `   • Valor: ${formatPrice(RECARGO)}\n`;
    }

    message += "-------------------------\n";
    message += `Precio final: $${formatPrice(finalTotal)}`;

    return message;
  };

  // Función para enviar a WhatsApp (mover aquí)
  const sendToWhatsApp = () => {
    const message = generateWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "5491128947318"; // Tu número
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleWhatsApp = () => {
    sendToWhatsApp();
    setTimeout(() => {
      onClose();
    }, 1000);
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
          <button
            className="close-btn"
            onClick={onClose}
            aria-label="Cerrar carrito"
          >
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
              <div className="cart-items-container">
                <div className="cart-items">
                  {cart.map((item) => {
                    const subtotal =
                      Number(item.price || 0) * Number(item.quantity || 0);
                    return (
                      <div key={item.id} className="cart-item">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.title}
                            className="item-image"
                            onError={(e) => {
                              e.target.style.display = "none";
                            }}
                          />
                        ) : (
                          <div className="item-image placeholder">📦</div>
                        )}

                        <div className="item-details">
                          <h4>{item.title}</h4>
                          <p className="item-price">
                            ${formatPrice(Number(item.price || 0))} c/u
                          </p>

                          <div className="quantity-controls">
                            <button
                              className="quantity-btn"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              disabled={item.quantity <= 1}
                            >
                              -
                            </button>
                            <span className="quantity">{item.quantity}</span>
                            <button
                              className="quantity-btn"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                            >
                              +
                            </button>
                          </div>

                          <p className="item-subtotal">
                            Subtotal: ${formatPrice(subtotal)}
                          </p>
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
              </div>

              {/* Opciones de recargo */}
              <div className="recargo-options">
                <h3 className="recargo-title">Opciones de entrega:</h3>

                <div className="recargo-checkbox">
                  <label
                    className={`checkbox-label ${hasRecargo ? "checked" : ""}`}
                  >
                    <input
                      type="checkbox"
                      checked={hasRecargo}
                      onChange={(e) => setHasRecargo(e.target.checked)}
                      className="checkbox-input"
                    />
                    <span className="checkbox-custom"></span>
                    <div className="checkbox-text">
                      <span className="checkbox-title">
                        Con recargo (+${formatPrice(RECARGO)})
                      </span>
                      <span className="checkbox-description">
                        Entrega en puntos de encuentro
                      </span>
                    </div>
                  </label>
                </div>

                <div className="recargo-checkbox">
                  <label
                    className={`checkbox-label ${!hasRecargo ? "checked" : ""}`}
                  >
                    <input
                      type="checkbox"
                      checked={!hasRecargo}
                      onChange={(e) => setHasRecargo(!e.target.checked)}
                      className="checkbox-input"
                    />
                    <span className="checkbox-custom"></span>
                    <div className="checkbox-text">
                      <span className="checkbox-title">Sin recargo</span>
                      <span className="checkbox-description">
                        Retirar en tienda
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              <div className="cart-footer">
                <div className="cart-summary">
                  <div className="summary-row">
                    <span>Subtotal:</span>
                    <span>${formatPrice(getTotal())}</span>
                  </div>
                  {hasRecargo && (
                    <div className="summary-row">
                      <span>Recargo por entrega:</span>
                      <span>+${formatPrice(RECARGO)}</span>
                    </div>
                  )}
                  <div className="summary-row total-row">
                    <span>Total:</span>
                    <strong>${formatPrice(getFinalTotal())}</strong>
                  </div>
                </div>

                <div className="cart-actions">
                  <button className="checkout-btn" onClick={handleWhatsApp}>
                    📱 Enviar pedido por WhatsApp
                  </button>

                  <button className="clear-cart-btn" onClick={clearCart}>
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
