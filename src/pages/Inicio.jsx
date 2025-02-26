import { useEffect, useRef, useState } from "react"
import './Inicio.scss'
import PantallaCarga from "../Components/PantallaCarga";
import { NavBar } from "../Components/NavBar";
import UseVisible from "../hooks/UseVisible";
import Contacto from "../Components/Contacto";
import DesarrolloWeb from "../Components/DesarrolloWeb";
import DisenoGrafico from "../Components/DisenoGrafico";
import Idiomas from "../Components/Idiomas";
import Servicios from "../Components/Servicios";
import Educacion from "../Components/Educacion";

const Inicio = () => {
    const isVisible = UseVisible(); 
    {isVisible && <PantallaCarga />}
    <NavBar isVisible={isVisible} />
    const refTexto = useRef(null);
    const [visible, setVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("DesarrolloWeb");

  // Mapeo de categorías a componentes
  const categoryComponents = {
    DesarrolloWeb: {name: "Desarrollo Web",component: <DesarrolloWeb />},
    DisenoGrafico: {name: "Diseño Gráfico",component: <DisenoGrafico />},
    Idiomas: {name: "Idiomas", component: <Idiomas />},
  };
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
                <NavBar></NavBar>
        <main className="main-inicio">
            <div className="content-inicio">
            <img src="./imgs/programacion.jpg" alt="" className="img-fluid w-100 custom-gradient content-inicio__img"/>
        <h1 className="fs-2 content-inicio__h1" id="inicio">Servicio de creación y mantenimiento de páginas web</h1>
            </div>
            <p ref={refTexto} className={`texto ${visible ? "visible" : ""}`}>Me dedico a la programación Web, experta en tecnologías Web tales como HTML, XHTML, CSS, JavaScript, Ajax, PHP y MySQL.

Mi campo de acción comprende aplicaciones desde sitios Web dinámicos auto-administrables como e-commerce, sitios personales con páginas institucionales dinámicas, hasta sistemas de gestión, intranets, etc.</p>

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
            <hr className="hr-especial"/>
            <div className="dos-partes-texto"  id="resume">
                <div className="dos-partes-texto__principal">
                  <div  className="dos-partes-texto__principal__img__container">
                  <img src="/imgs/svg-icons/libro.svg" alt="" className="dos-partes-texto__principal__img"/>

                  </div>
                <h1 className="dos-partes-texto__principal__h1">RESUME</h1>
                </div>
                <div className="dos-partes-texto__p__container">
                <p className="dos-partes-texto__p__res">Me dedico a la programación Web desde 2005, experta en tecnologías Web tales como HTML, XHTML, CSS, JavaScript, Ajax, PHP y MySQL.</p>
                <p className="dos-partes-texto__p__res">Mi campo de acción comprende aplicaciones desde sitios Web dinámicos auto-administrables como e-commerce, sitios personales con páginas institucionales dinámicas, hasta sistemas de gestión, intranets, etc.</p>
                <p className="dos-partes-texto__p__res">Accesibilidad, posicionamiento natural para buscadores y campañas de márketing para Google, Manejo de redes sociales, gestión de contenidos y campañas.</p>
                </div>
              </div>
              <div className="educacion-hr">
                <img src="/imgs/svg-icons/school.svg" alt="" className="educacion-hr__img"/>
                <h1 className="educacion-hr__h1">Educación</h1>
                <div className="educacion-hr__hr"></div>
              </div>
              <Educacion></Educacion>
              <div>

              </div>
            <div>
              <div className="dos-partes-texto" id="habilidades">
                <div className="dos-partes-texto__principal">
                  <div  className="dos-partes-texto__principal__img__container">
                  <img src="/imgs/svg-icons/stonks.svg" alt="" className="dos-partes-texto__principal__img"/>

                  </div>
                <h1 className="dos-partes-texto__principal__h1" >HABILIDADES</h1>
                </div>
                <p className="dos-partes-texto__p">Aptitudes y validaciones destacadas</p>

              </div>
                <div className="p-6">
      {/* Navbar */}
      <div className="p-6">
      {/* Navbar */}
      <nav className="flex gap-1 mb-6 border-b pb-2 nav-container">
        {Object.entries(categoryComponents).map(([key, { name }]) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(key)}
            className={`px4 py-2 rounded-lg nav-boton ${
              selectedCategory === key ? "bg-blue-500 text-white selected" : ""
            }`}
          >
            {name}
          </button>
        ))}
      </nav>

      {/* Sección de skills */}
      <div className="pad-4 border container-habilidades rounded-lg shadow-md bg-white">
        {categoryComponents[selectedCategory].component}
      </div>
    </div>
        </div>
            </div>
            <div>
            <div className="dos-partes-texto" id="servicios">
                <div className="dos-partes-texto__principal">
                  <div  className="dos-partes-texto__principal__img__container">
                  <img src="/imgs/svg-icons/settings.svg" alt="" className="dos-partes-texto__principal__img"/>

                  </div>
                <h1 className="dos-partes-texto__principal__h1" >SERVICIOS</h1>
                </div>
                <p className="dos-partes-texto__p">Programador web experto en creación de páginas web bajo MySQL, xHTML, CSS, Javascript. Accesibilidad, posicionamiento natural para buscadores y campañas de márketing para Google.</p>

              </div>
            </div>
            <div>
              <Servicios></Servicios>
            </div>
            <img src="/imgs/proceso.png" alt="" className="imagen-proceso hidden-cel"/>
            <div>
            <div className="dos-partes-texto">
                <div className="dos-partes-texto__principal">
                  <div  className="dos-partes-texto__principal__img__container">
                  <img src="/imgs/svg-icons/mail.svg" alt="" className="dos-partes-texto__principal__img"/>

                  </div>
                <h1 className="dos-partes-texto__principal__h1" id="contacto">CONTACTO</h1>
                </div>
                <p className="dos-partes-texto__p">Presupuestos, preguntas, información? No dude en ponerse en contacto conmigo. Completa el formulario o conectate conmigo a través de whatsapp o redes sociales.</p>

              </div>
            <Contacto></Contacto>
            </div>
        </main>

    </div>
  )
}

export default Inicio