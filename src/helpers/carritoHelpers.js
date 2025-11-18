// helpers/carritoHelpers.js

// Obtener carrito del localStorage
export const obtenerCarrito = () => {
  if (typeof window === "undefined") return [];
  try {
    const carrito = localStorage.getItem("carrito");
    return carrito ? JSON.parse(carrito) : [];
  } catch (error) {
    console.error("Error al obtener carrito:", error);
    return [];
  }
};

// Guardar carrito en localStorage
export const guardarCarrito = (carrito) => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  } catch (error) {
    console.error("Error al guardar carrito:", error);
  }
};

// Agregar producto al carrito
export const agregarAlCarrito = (producto) => {
  const carrito = obtenerCarrito();

  // Verificar si el producto ya existe en el carrito
  const productoExistente = carrito.find((item) => item.id === producto.id);

  if (productoExistente) {
    // Actualizar cantidad si ya existe
    productoExistente.cantidadSeleccionada +=
      producto.cantidadSeleccionada || 1;
  } else {
    // Agregar nuevo producto
    carrito.push({
      ...producto,
      cantidadSeleccionada: producto.cantidadSeleccionada || 1,
    });
  }

  guardarCarrito(carrito);
  return carrito;
};

// Eliminar producto del carrito
export const eliminarDelCarrito = (productoId) => {
  const carrito = obtenerCarrito().filter((item) => item.id !== productoId);
  guardarCarrito(carrito);
  return carrito;
};

// Actualizar cantidad en el carrito
export const actualizarCantidadCarrito = (productoId, nuevaCantidad) => {
  if (nuevaCantidad < 1) return obtenerCarrito();

  const carrito = obtenerCarrito().map((item) =>
    item.id === productoId
      ? { ...item, cantidadSeleccionada: Math.min(nuevaCantidad, 10) } // Máximo 10
      : item
  );

  guardarCarrito(carrito);
  return carrito;
};

export const calcularTotalCarrito = (carrito) => {
  return carrito.reduce((total, item) => {
    const precio = item.precio_descuento || item.precio_unitario;
    return total + precio * item.cantidadSeleccionada;
  }, 0);
};

export const obtenerCantidadTotal = (carrito) => {
  return carrito.reduce((total, item) => total + item.cantidadSeleccionada, 0);
};
