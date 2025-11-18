import React, { useState } from "react";
import Header from "../common/header/Header";
import Hero from "../components/InicioV2/hero/Hero";
import Infor from "../components/InicioV2/Infor/Infor";
import Footer from "../common/footer/Footer";
import ProductosContainer from "../components/InicioV2/Productos/ProductosContainer/ProductosContainer";
import { CartProvider } from "../components/InicioV2/Cart/CartContext/CartContext";
import CartButton from "../components/InicioV2/Cart/CartButton/CartButton";
import CartSlider from "../components/InicioV2/Cart/CartSlider/CartSlider";

// Componente wrapper que usa el carrito
function InicioContent() {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => setShowCart((s) => !s);
  const closeCart = () => setShowCart(false);

  return (
    <div>
      <Header />
      <Hero />
      <ProductosContainer />
      <Infor />
      <Footer />
      <CartButton onToggle={toggleCart} />
      <CartSlider visible={showCart} onClose={closeCart} />
    </div>
  );
}

function Inicio() {
  return (
    <CartProvider>
      <InicioContent />
    </CartProvider>
  );
}

export default Inicio;