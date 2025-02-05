import React, { useEffect, useRef, useState } from 'react'
import "./Habilidades.scss"

const DisenoGrafico = () => {
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
    <div className={`habilidades ${isVisible ? "visible" : ""}`}ref={textRef}>
    <div className='habilidad'>
    <h1 className='habilidad__titulo'>Adobe Photoshop</h1>
    <div className='habilidad__meter'>
    <img src="./imgs/meter.png" alt="" />
    <img src="./imgs/meter.png" alt="" />
    <img src="./imgs/meter.png" alt="" />
    <img src="./imgs/meter.png" alt="" />
    <img src="./imgs/meter-empty.png" alt="" />
    </div>

    </div>
    <div className='habilidad'>
    <h1 className='habilidad__titulo'>Adobe Premiere</h1>
    <div className='habilidad__meter'>
    <img src="./imgs/meter.png" alt="" />
    <img src="./imgs/meter.png" alt="" />
    <img src="./imgs/meter.png" alt="" />
    <img src="./imgs/meter-empty.png" alt="" />
    <img src="./imgs/meter-empty.png" alt="" />
    </div>

    </div>
    <div className='habilidad'>
    <h1 className='habilidad__titulo'>After Effects</h1>
    <div className='habilidad__meter'>
    <img src="./imgs/meter.png" alt="" />
    <img src="./imgs/meter.png" alt="" />
    <img src="./imgs/meter-empty.png" alt="" />
    <img src="./imgs/meter-empty.png" alt="" />
    <img src="./imgs/meter-empty.png" alt="" />
    </div>

    </div>
    <div className='habilidad'>
    <h1 className='habilidad__titulo'>Adobe Indesign</h1>
    <div className='habilidad__meter'>
    <img src="./imgs/meter.png" alt="" />
    <img src="./imgs/meter.png" alt="" />
    <img src="./imgs/meter-empty.png" alt="" />
    <img src="./imgs/meter-empty.png" alt="" />
    <img src="./imgs/meter-empty.png" alt="" />
    </div>
    </div>

</div>
  )
}

export default DisenoGrafico