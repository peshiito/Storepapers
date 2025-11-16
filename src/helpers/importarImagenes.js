// Importa TODAS las imágenes de la carpeta Productos automáticamente
const imagenes = import.meta.glob("../data/Productos/*", { eager: true });

export const obtenerImagen = (rutaJSON) => {
  if (!rutaJSON) return null;

  // Extrae solo el nombre del archivo desde el JSON
  const nombre = rutaJSON.split("/").pop();

  // Busca dentro de las rutas importadas por Vite
  for (const ruta in imagenes) {
    if (ruta.includes(nombre)) {
      return imagenes[ruta].default;
    }
  }

  console.warn("Imagen no encontrada:", nombre);
  return null;
};
