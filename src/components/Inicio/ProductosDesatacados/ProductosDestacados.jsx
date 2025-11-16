import React from "react";
import "./ProductosDestacados.css";

// ✅ Importar imágenes desde /src/assets (no uses "../../../src")
import img_papel_fotografico from "../../../assets/Img/Productos/Papel_fotografico_100hojas.png";
import img_papel_adhesivo from "../../../assets/Img/Productos/Hojas_papel_adhesivo_100hojas.png";
import img_holofan from "../../../assets/Img/Productos/holofan_efecto_tornasol_20hojas.jpg";
import img_papel_fotografico_20 from "../../../assets/Img/Productos/20_hojas_papel_fotografico.jpg";

const productos = [
  {
    nombre: "Papel fotográfico 200 grs 100 hojas",
    precio_unitario: 11900,
    imagen: img_papel_fotografico,
  },
  {
    nombre: "Papel adhesivo 115 grs 100 hojas",
    precio_unitario: 19620,
    imagen: img_papel_adhesivo,
  },
  {
    nombre: "Holofan efecto mundo tornasol",
    precio_unitario: 10800,
    imagen: img_holofan,
  },
  {
    nombre: "Papel fotográfico 200 grs 20 hojas",
    precio_unitario: 2980,
    imagen: img_papel_fotografico_20,
  },
];

export default function ProductosDestacados() {
  return (
    <section className="productos-section">
      <div className="productos-container">
        <h2 className="productos-title">Productos Destacados</h2>
        <p className="productos-subtitle">
          Conocé algunos de nuestros papeles y efectos más elegidos
        </p>

        <div className="productos-grid">
          {productos.map((p, index) => (
            <div key={index} className="producto-card">
              <div className="producto-img">
                <img src={p.imagen} alt={p.nombre} loading="lazy" />
              </div>
              <div className="producto-info">
                <h3>{p.nombre}</h3>
                <p className="precio">
                  ${p.precio_unitario.toLocaleString("es-AR")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
