import { useEffect, useRef, useState } from "react"
import './Inicio.scss'
import Carrusel from "../Components/Carrusel";

const Inicio = () => {
    const refTexto = useRef(null);
    const [visible, setVisible] = useState(false);
  
    useEffect(() => {
        document.title = 'Tomás- Inicio'
        const observer = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                setVisible(true);
              }
            },
            { threshold: 0.2 } // Se activa cuando el 20% del texto es visible
        );
        if (refTexto.current) {
            observer.observe(refTexto.current);
          }
      
          return () => observer.disconnect(); // Limpieza al desmontar
      
        }, [])

  return (
    <div className="body-inicio">
        <main className="main-inicio">
            <div className="content-inicio">
            <img src="./imgs/programacion.jpg" alt="" className="img-fluid w-100 custom-gradient content-inicio__img"/>
        <h1 className="fs-2 content-inicio__h1">Servicio de creación y mantenimiento de páginas web</h1>
            </div>
            <p ref={refTexto} className={`texto ${visible ? "visible" : ""}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nihil sit obcaecati impedit laborum recusandae dolores consequuntur, fuga quibusdam omnis. Qui ratione accusamus cupiditate unde adipisci ipsum ullam libero repudiandae!</p>
            <div className="carrusel-container">
            <div className="carrusel">
            <Carrusel></Carrusel>
            </div>
            </div>
            <div className="caracteristicas-container">
                <div className="caracteristicas-container__textos">
                    <h1 className="caracteristicas-container__h1">¿Por qué confiar en mis servicios?</h1>
                <p className="caracteristicas-container__p">1</p>

                </div>
                <div className="caracteristicas-container__textos">
                    <h1 className="caracteristicas-container__h1">¿Por qué confiar en mis servicios?</h1>
                <p className="caracteristicas-container__p">1</p>

                </div>
                <div className="caracteristicas-container__textos">
                    <h1 className="caracteristicas-container__h1">¿Por qué confiar en mis servicios?</h1>
                <p className="caracteristicas-container__p">1</p>

                </div>            </div>
        </main>

    </div>
  )
}

export default Inicio