import React from 'react'
import './Footer.scss'
const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer__contenedor">
        <h2 className="footer__contenedor__h2">Buscame en mis redes</h2>
        <a href="https://www.linkedin.com/in/tom%C3%A1s-marcos-1a7107257/">
        <img src="/imgs/svg-icons/linkedin.svg" alt="Linkedin icono"
                className="footer__iconos footer__iconos__3" /></a>
                        <a href="https://wa.me/5491122883355?text=¡Hola!%20Estoy%20interesado%20en%20tus%20servicios.">
        <img src="/imgs/svg-icons/whatsapp.png" alt="whatsapp icono"
                className="footer__iconos footer__iconos__3" /></a>
    </div>
</footer>
  )
}

export default Footer