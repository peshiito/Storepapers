import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Carrito from "./pages/Carrito";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/carrrito" element={<Carrito />} />
        {/* la pagina faltante */}
      </Routes>
    </Router>
  );
}

export default App;
