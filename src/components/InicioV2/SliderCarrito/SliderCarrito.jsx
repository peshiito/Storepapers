import { useState, useEffect } from "react";
import "./SliderCarrito.css";
import {
  obtenerCarrito,
  eliminarDelCarrito,
  actualizarCantidadCarrito,
  calcularTotalCarrito,
  obtenerCantidadTotal,
} from "../../helpers/carritoHelpers";

const SliderCarrito = ({ isOpen, onClose, onActualizarCarrito }) => {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    if (isOpen) {
      setCarrito(obtenerCarrito());
    }
  }, [isOpen]);

  const formatearPrecio = (precio) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    }).format(precio);
  };

  const handleEliminarProducto = (productoId) => {
    const nuevoCarrito = eliminarDelCarrito(productoId);
    setCarrito(nuevoCarrito);
    if (onActualizarCarrito) onActualizarCarrito(nuevoCarrito);
  };

  const handleActualizarCantidad = (productoId, nuevaCantidad) => {
    if (nuevaCantidad < 1) return;
    const nuevoCarrito = actualizarCantidadCarrito(productoId, nuevaCantidad);
    setCarrito(nuevoCarrito);
    if (onActualizarCarrito) onActualizarCarrito(nuevoCarrito);
  };

  const handleVaciarCarrito = () => {
    guardarCarrito([]);
    setCarrito([]);
    if (onActualizarCarrito) onActualizarCarrito([]);
  };

  const handleCheckout = () => {
    alert(
      "¡Proceso de checkout iniciado! Total: " +
        formatearPrecio(calcularTotalCarrito(carrito))
    );
    // Aquí puedes redirigir a la página de checkout
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="carrito-overlay" onClick={onClose}></div>

      {/* Slider */}
      <div className="carrito-slider">
        {/* Header */}
        <div className="carrito-header">
          <h2>🛒 Tu Carrito</h2>
          <button className="btn-cerrar" onClick={onClose}>
            ×
          </button>
        </div>

        {/* Contenido */}
        <div className="carrito-content">
          {carrito.length === 0 ? (
            <div className="carrito-vacio">
              <div className="carrito-vacio-icon">🛒</div>
              <h3>Tu carrito está vacío</h3>
              <p>Agrega algunos productos para continuar</p>
              <button className="btn-seguir-comprando" onClick={onClose}>
                Seguir comprando
              </button>
            </div>
          ) : (
            <>
              {/* Lista de productos */}
              <div className="carrito-items">
                {carrito.map((item) => (
                  <div key={item.id} className="carrito-item">
                    <div className="item-imagen">
                      <img
                        src={item.imagen}
                        alt={item.nombre}
                        onError={(e) => {
                          e.target.src = "/imagen-placeholder.jpg";
                        }}
                      />
                    </div>

                    <div className="item-info">
                      <h4 className="item-nombre">{item.nombre}</h4>
                      <p className="item-precio">
                        {formatearPrecio(
                          item.precio_descuento || item.precio_unitario
                        )}
                      </p>

                      <div className="item-controls">
                        <div className="cantidad-controls">
                          <button
                            className="btn-cantidad"
                            onClick={() =>
                              handleActualizarCantidad(
                                item.id,
                                item.cantidadSeleccionada - 1
                              )
                            }
                          >
                            -
                          </button>
                          <span className="cantidad">
                            {item.cantidadSeleccionada}
                          </span>
                          <button
                            className="btn-cantidad"
                            onClick={() =>
                              handleActualizarCantidad(
                                item.id,
                                item.cantidadSeleccionada + 1
                              )
                            }
                            disabled={item.cantidadSeleccionada >= 10}
                          >
                            +
                          </button>
                        </div>

                        <button
                          className="btn-eliminar"
                          onClick={() => handleEliminarProducto(item.id)}
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Resumen */}
              <div className="carrito-resumen">
                <div className="resumen-linea">
                  <span>Subtotal:</span>
                  <span>{formatearPrecio(calcularTotalCarrito(carrito))}</span>
                </div>
                <div className="resumen-linea">
                  <span>Envío:</span>
                  <span className="envio-gratis">Gratis</span>
                </div>
                <div className="resumen-total">
                  <span>Total:</span>
                  <span>{formatearPrecio(calcularTotalCarrito(carrito))}</span>
                </div>

                <button className="btn-checkout" onClick={handleCheckout}>
                  Finalizar Compra
                </button>

                <button
                  className="btn-vaciar-carrito"
                  onClick={handleVaciarCarrito}
                >
                  Vaciar Carrito
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SliderCarrito;
