import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom"; // <-- Corregido el import
import { NavBar } from "./Components/NavBar.jsx";
import Rutas from "./routes/Rutas.jsx";
import Footer from "./Components/Footer.jsx";
import PantallaCarga from "./Components/PantallaCarga.jsx";
import UseVisible from "./hooks/UseVisible.jsx"; // <-- Import correcto

const App = () => {


  return (
    <BrowserRouter>
      <Rutas />
      <Footer />
    </BrowserRouter>
  );
};
export default App