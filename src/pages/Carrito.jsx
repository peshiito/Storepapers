import React from "react";
import Header from "../common/header/Header"; // Ajusta la ruta según tu estructura
import Footer from "../common/footer/Footer"; // Ajusta la ruta según tu estructura
import ProductosContainer from "../components/Productos/ProductosContainer/ProductosContainer";

function Carrito() {
  return (
    <div>
      <Header />
      <main>
        <ProductosContainer />
      </main>
      <Footer />
    </div>
  );
}

export default Carrito;
