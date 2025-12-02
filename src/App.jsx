import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Carrito from "./pages/Carrito";
import ContactPage from "./pages/ContacPage"; // Asegúrate de crear esta página
import Header from "./common/header/Header"; // Si tienes un componente Header

function App() {
  return (
    <Router>
      {/* Si usas Header, colócalo aquí */}
      <Header />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Ruta de respaldo para cualquier otra URL */}
        <Route path="*" element={<Inicio />} />
      </Routes>
    </Router>
  );
}

export default App;
