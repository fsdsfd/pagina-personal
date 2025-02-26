import React, { useEffect, useRef, useState } from 'react'
import Tiempo from './Tiempo'
import "./Educacion.scss"
import Calificacion from './Calificacion'
const Educacion = () => {
          const [isVisible, setIsVisible] = useState(false);
          const textRef = useRef(null);
        
          useEffect(() => {
            const observer = new IntersectionObserver(
              ([entry]) => {
                if (entry.isIntersecting) {
                  setIsVisible(true);
                }
              },
              { threshold: 0.3 } 
            );
        
            if (textRef.current) {
              observer.observe(textRef.current);
            }
        
            return () => {
              if (textRef.current) {
                observer.unobserve(textRef.current);
              }
            };
          }, []);
  return (
    <div className='educacion'>
    <div>
        <Tiempo>2010 - 2022</Tiempo>
        <Tiempo>2024 - 2024</Tiempo>
        <Tiempo>2023 - NOW</Tiempo>
    </div>
    <div className='educacion__line'>
    </div>
    <div className='calificacion-container'>
    <Calificacion>SECUNDARIA</Calificacion>
    <Calificacion>BOOTCAMP</Calificacion>
    <Calificacion>UNIVERSIDAD</Calificacion>
    </div>
    <div ref={textRef} className={`descripcion-educacion ${isVisible ? 'visible' : ''}`}>
      <div className='descripcion-educacion-container'>
        <h1 className='descripcion-educacion-container__h1'>Instituto San José</h1>
        <p className='descripcion-educacion-container__p1'>Secundario • Martinez, Buenos Aires</p>
        <p className='descripcion-educacion-container__p2'>Bachiller de ciencias naturales. Secundario completo</p>
      </div>
      <div className='descripcion-educacion-container'>
        <h1 className='descripcion-educacion-container__h1'>Educacion IT</h1>
        <p className='descripcion-educacion-container__p1'>Educacion IT • Virtual</p>
        <p className='descripcion-educacion-container__p2'>FullStack Developer. Completo.</p>
      </div>
      <div className='descripcion-educacion-container'>
        <h1 className='descripcion-educacion-container__h1'>Universidad Nacional de San Martin</h1>
        <p className='descripcion-educacion-container__p1'> Universidad Nacional de San Martin • San Martín, Buenos Aires</p>
        <p className='descripcion-educacion-container__p2'>Tecnicatura en Programación Informatica. En curso</p>
      </div>

    </div>
    </div>

  )
}

export default Educacion