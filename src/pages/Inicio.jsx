import Header from "../common/header/Header";
import Hero from "../components/InicioV2/hero/Hero";
import Infor from "../components/Inicio/Infor/Infor";
import Footer from "../common/footer/Footer";
import ProductosContainer from "../components/InicioV2/Productos/ProductosContainer/ProductosContainer";

function Inicio() {
  return (
    <div>
      <Header />
      <Hero />
      <ProductosContainer />
      <Infor />
      <Footer />
    </div>
  );
}

export default Inicio;
