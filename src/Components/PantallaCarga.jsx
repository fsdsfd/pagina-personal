import { useState, useEffect } from "react";
import "./PantallaCarga.scss"; // Importar estilos

const PantallaCarga = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 1000);
  }, []);

  return (
    <div className={`loading-screen ${isVisible ? "visible" : "hidden"}`}>
      <h1 className="efectos">Tomás Marcos</h1>
        <p className="efectos">Servicio y desarrollo de páginas web</p>
    </div>
  );
};

export default PantallaCarga;