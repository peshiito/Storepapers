import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

// Función para formatear precios
const formatPrice = (price) => {
  return new Intl.NumberFormat("es-AR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

// Función para formatear precios con decimales (para cálculos)
const formatPriceWithDecimals = (price) => {
  return new Intl.NumberFormat("es-AR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
};

const normalizeProduct = (p) => {
  return {
    id:
      p.id ??
      p.ID ??
      p._id ??
      String(p.title ?? p.nombre ?? p.name ?? Math.random()),
    title: String(p.title ?? p.nombre ?? p.name ?? "Producto"),
    price:
      Number(p.price ?? p.precio ?? p.precio_unitario ?? p.unit_price ?? 0) ||
      0,
    image: p.image ?? p.imagen ?? p.img ?? p.thumbnail ?? "",
    raw: p,
  };
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem("cart_v1");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("cart_v1", JSON.stringify(cart));
    } catch {}
  }, [cart]);

  const findIndex = (id) =>
    cart.findIndex((it) => String(it.id) === String(id));

  const addToCart = (product, qty = 1) => {
    if (!product) return;
    const p = normalizeProduct(product);
    const quantity = Math.max(1, Number(qty) || 1);
    const idx = findIndex(p.id);

    if (idx >= 0) {
      const next = [...cart];
      next[idx] = {
        ...next[idx],
        quantity: next[idx].quantity + quantity,
      };
      setCart(next);
    } else {
      setCart((c) => [
        ...c,
        {
          ...p,
          quantity,
        },
      ]);
    }
  };

  const updateQuantity = (id, quantity) => {
    const qty = Math.max(0, Number(quantity) || 0);
    const idx = findIndex(id);
    if (idx < 0) return;

    if (qty === 0) {
      removeFromCart(id);
      return;
    }

    const next = [...cart];
    next[idx] = { ...next[idx], quantity: qty };
    setCart(next);
  };

  const removeFromCart = (id) => {
    setCart((c) => c.filter((it) => String(it.id) !== String(id)));
  };

  const clearCart = () => setCart([]);

  const getTotal = () =>
    cart.reduce(
      (acc, it) => acc + (Number(it.price) || 0) * (Number(it.quantity) || 0),
      0
    );

  const getTotalItems = () =>
    cart.reduce((acc, it) => acc + (Number(it.quantity) || 0), 0);

  const buildWhatsAppText = (prefix = "Hola, quiero hacer un pedido:") => {
    if (!cart.length) return `${prefix}\n\nNo hay productos en el carrito.`;

    const header = `${prefix}\n\n— Detalle del pedido —\n`;
    const lines = cart.map((it, idx) => {
      const unit = formatPrice(Number(it.price || 0));
      const qty = Number(it.quantity || 0);
      const subtotal = formatPrice(Number(it.price || 0) * qty);
      return `${idx + 1}) ${
        it.title
      }\n   • Cantidad: ${qty}\n   • Precio unitario: $${unit}\n   • Subtotal: $${subtotal}`;
    });
    const total = formatPrice(getTotal());
    const footer = `\n-------------------------\nPrecio final: $${total}\n\nDatos de envío:\n- Nombre:\n- Dirección:\n- Teléfono:\n\nMuchas gracias.`;
    return `${header}\n${lines.join("\n\n")}${footer}`;
  };

  const sendWhatsApp = (prefix = "Hola, quiero hacer un pedido:") => {
    const text = buildWhatsAppText(prefix);
    const encoded = encodeURIComponent(text);
    const phoneNumber = "5491128947318";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encoded}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        getTotal,
        getTotalItems,
        buildWhatsAppText,
        sendWhatsApp,
        formatPrice,
        formatPriceWithDecimals,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe ser usado dentro de un CartProvider");
  }
  return context;
};
