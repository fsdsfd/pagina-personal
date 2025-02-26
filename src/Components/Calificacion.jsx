import React, { useEffect, useRef, useState } from 'react'
import "./Calificacion.scss"
const Calificacion = ({children}) => {
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
    <div ref={textRef} className={`calificacion-general ${isVisible ? 'visible' : ''} hidden-cel`}>
    <div className= 'calificacion'>
        <div className='calificacion__container'   >
            <h1 className='calificacion__container__h1'>A+</h1>
            <p className='calificacion__container__p'>{children}</p>
        </div>
    </div>
    </div>

  )
}

export default Calificacion