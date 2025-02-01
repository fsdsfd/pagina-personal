import { useEffect, useRef, useState } from "react"
import './Inicio.scss'
import PantallaCarga from "../Components/PantallaCarga";
import { NavBar } from "../Components/NavBar";
import UseVisible from "../hooks/UseVisible";
import Contacto from "../Components/Contacto";

const Inicio = () => {
    const isVisible = UseVisible(); 
    {isVisible && <PantallaCarga />}
    <NavBar isVisible={isVisible} />
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
                <PantallaCarga></PantallaCarga>
        <main className="main-inicio">
            <div className="content-inicio">
            <img src="./imgs/programacion.jpg" alt="" className="img-fluid w-100 custom-gradient content-inicio__img"/>
        <h1 className="fs-2 content-inicio__h1">Servicio de creación y mantenimiento de páginas web</h1>
            </div>
            <p ref={refTexto} className={`texto ${visible ? "visible" : ""}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nihil sit obcaecati impedit laborum recusandae dolores consequuntur, fuga quibusdam omnis. Qui ratione accusamus cupiditate unde adipisci ipsum ullam libero repudiandae!</p>

            <h2 className="h2-caracteristicas">Trabajo en capas</h2>
            <div className="caracteristicas-container">
                <div className="caracteristicas-container__textos">
                    <h1 className="caracteristicas-container__h1">HTML</h1>
                    <img src="./imgs/svg-icons/html5.png" alt="html logo" className="caracteristicas-container__imagenes"/>
                <p className="caracteristicas-container__p">El HTML es la capa de documentos de la Web, que proporciona estructura y semántica a las páginas.</p>

                </div>
                <div className="caracteristicas-container__textos">
                    <h1 className="caracteristicas-container__h1">CSS</h1>
                    <img src="./imgs/svg-icons/css.png" alt="html logo" className="caracteristicas-container__imagenes"/>

                <p className="caracteristicas-container__p">El CSS es la capa de presentación de la Web y te permite que tus páginas web se vean como quieras.</p>

                </div>
                <div className="caracteristicas-container__textos">
                    <h1 className="caracteristicas-container__h1">Javascript</h1>
                    <img src="./imgs/svg-icons/js.png" alt="html logo" className="caracteristicas-container__imagenes"/>

                <p className="caracteristicas-container__p">JavaScript proporciona una interactividad enriquecida a las páginas web, lo que permite a los desarrolladores crear sitios web interactivos que ayuden a los usuarios a realizar tareas y alcanzar objetivos.</p>

                </div>        
            </div>
            <div className="descripcion-container">
                <img src="./imgs/foto-curriculum.jpg" alt="" className="descripcion-container__imagen" />
                <div className="descripcion-container__textos">
                <p className="descripcion-container__textos__p" >Cuento con años de experiencia continua en el campo de la programación web, desarrollo de aplicaciones y servicios web en diferentes tecnologías</p>
                <p className="descripcion-container__textos__p" >Mi experiencia en desarrollo de aplicaciones web incluye además la administración de base de datos en MySQL y SQL Server.</p>
                <p className="descripcion-container__textos__p" >He trabajado de manera freelancer, acompañándo a mis clientes en sus primeros pasos en la red y progresando junto a ellos.</p>
                <p className="descripcion-container__textos__p" >Ofrezco todo tipo de soluciones relacionadas con el diseño, desarrollo de aplicaciones, implementación, soporte, mantenimiento de sitios web y marketing en redes sociales.</p>
   
                </div>

            </div>
            <hr />
            <div className="contacto-pre">
            <div className="contacto-pre__1">
            <h1 className="contacto-pre__1__h1"> CONTACTO</h1>
            <p className="contacto-pre__1__p">Ponete en contacto conmigo</p>

            </div>
            </div>

            <div>
            <Contacto></Contacto>

            </div>
        </main>

    </div>
  )
}

export default Inicio