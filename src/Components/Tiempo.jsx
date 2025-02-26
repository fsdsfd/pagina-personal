import React, { useEffect, useRef, useState } from 'react'
import "./Tiempo.scss"
const Tiempo = ({children}) => {
        const [isVisible, setIsVisible] = useState(false);
          const textRef = useRef(null);
        
          useEffect(() => {
            const observer = new IntersectionObserver(
              ([entry]) => {
                if (entry.isIntersecting) {
                  setIsVisible(true);
                }
              },
              { threshold: 0.5 } // Se activa cuando el 50% del texto es visible
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
    <div className='tiempo-body hidden-cel'>
        <div className= {`tiempo ${isVisible ? 'visible' : ''}`} ref={textRef}>
        <div className='tiempo-container'       >
            <img src="/imgs/svg-icons/clock.svg" alt="" className='tiempo-container__img'/>
            <h1 className='tiempo-container__h1'>{children}</h1>        
        </div>

        </div>
        <div className='tiempo-body__container'>
        <div>
          <img src="/imgs/svg-icons/circle.svg" alt="" className='tiempo-body__container__circle'/>
        </div>
        </div>
   
        </div>
  )
}

export default Tiempo