import Header from "../common/header/Header";
import Hero from "../components/Inicio/Hero/Hero";
import Infor from "../components/Inicio/Infor/Infor";
import Footer from "../common/footer/Footer";
import ProductosDestacados from "../components/Inicio/ProductosDesatacados/ProductosDestacados";

function Inicio() {
  return (
    <div>
      <Header />
      <Hero />
      <Infor />
      <ProductosDestacados />
      <Footer />
    </div>
  );
}

export default Inicio;
