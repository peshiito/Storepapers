// helpers/importarImagenes.js
// Carga automática de imágenes ubicadas en: src/components/data/productos/

const imagenes = import.meta.glob(
  "/src/data/Productos/*.{png,jpg,jpeg,webp,avif}",
  { eager: true }
);

// Convierte los imports en un objeto { "archivo.jpg": url }
const images = {};
for (const path in imagenes) {
  const fileName = path.split("/").pop();
  images[fileName] = imagenes[path].default;
}

// Devuelve la URL de la imagen según el nombre de archivo
export const obtenerImagen = (nombreArchivo) => {
  if (!nombreArchivo) return null;
  return images[nombreArchivo] || null;
};

export default images;
