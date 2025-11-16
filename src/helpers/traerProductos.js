import Data from "../data/Productos.json";

export const traerProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Retorna solo el array de productos, no el objeto completo
      resolve(Data.Data || []);
    }, 500);
  });
};
