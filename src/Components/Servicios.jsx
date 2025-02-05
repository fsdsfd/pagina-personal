import React from 'react'
import ColumnaIzq from './ColumnaIzq'
import ColumnaDer from './ColumnaDer'
import "./Servicios.scss"
const Servicios = () => {

  return (
    <div className='servicios'>
        <ColumnaIzq>
        <div className='servicios__col-container'>
          <div className='servicios__col'>
          <h1 className='servicios__col__h1'>Diseño Web</h1>
        <p className='servicios__col__p'>Trabajo en conjunto con diseñadores.</p>
          </div>
        <img src="./imgs/svg-icons/brush.svg" alt="" className='servicios__img__1'/>
        </div>
        <div className='servicios__col-container'>
          <div className='servicios__col'>
          <h1 className='servicios__col__h1'>Social Media Marketing</h1>
        <p className='servicios__col__p'>Creación y gestión de tus perfiles sociales y de construir y mantener toda tu comunidad online.</p>
          </div>
        <img src="./imgs/svg-icons/star.svg" alt="" className='servicios__img__2'/>
        </div>        
      </ColumnaIzq>

    <ColumnaDer>
    <div className='servicios__col-2-container'>
    <img src="./imgs/svg-icons/code.svg" alt="" className='servicios__col-2__img__1'/>

          <div className='servicios__col-2'>
          <h1 className='servicios__col-2__h1'>Desarrollo Web</h1>
        <p className='servicios__col-2__p'>Realizamos desarrollo web a medida, altamente optimizado. Web estructuradas y webs autoadministrables.</p>
          </div>
        </div>

        <div className='servicios__col-2-container'>
        <img src="./imgs/svg-icons/mundo.svg" alt="" className='servicios__col-2__img__2'/>
          <div className='servicios__col-2'>
          <h1 className='servicios__col-2__h1'>Marketing / SEO</h1>
        <p className='servicios__col-2__p'>Landing Pages. Creación de contenido estratégico. Facebook Ads. Google Adwords. Posicionamiento web. SEO.</p>
          </div>
        </div>  
      </ColumnaDer>
    </div>
  )
}

export default Servicios