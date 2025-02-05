import React, { useEffect, useRef, useState } from 'react'
import './Servicios.scss'
const ColumnaIzq = ({children}) => {
    const [isVisible, setIsVisible] = useState(false);
    const textRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.3 } // Se activa cuando el 50% del texto es visible
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
    <div
      ref={textRef}
      className={`columna-izq ${isVisible ? 'visible' : ''}`}
    >{children}</div>
  )
}

export default ColumnaIzq