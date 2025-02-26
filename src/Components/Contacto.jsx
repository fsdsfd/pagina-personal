import React, { useEffect, useRef } from 'react'
import emailjs from "@emailjs/browser";
import "./Contacto.scss"
const Contacto = () => {
    useEffect(() => {
        document.title = 'Tomás- Contacto'
        }, [])
        const form = useRef();

  const enviarCorreo = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_qwfm18q", "template_s8mzz7f", form.current, "_lCYTiEzrBhl9gP6Q")
      .then(
        () => {
          alert("Correo enviado con éxito 📧");
        },
        (error) => {
          console.error("Error al enviar el correo:", error);
        }
      );
  };
  return (
    <div className='contacto'> 
<hr className='contacto__hr'/>
      <form ref={form} onSubmit={enviarCorreo} className='contacto__form'>
        <div className='contacto__inputs-row'>
        <div className='contacto__inputs-container'>
        <label className='contacto__inputs-container__label'>Nombre *</label>
    <input type="text" name="user_name" className='contacto__inputs-container__input' required />
        </div>
        <div className='contacto__inputs-container'>
      <label className='contacto__inputs-container__label'>Asunto *</label>
    <input type="text" name="asunto" className='contacto__inputs-container__input' required />

      </div>
      <div className='contacto__inputs-container'>
      <label className='contacto__inputs-container__label'>Email *</label>
    <input type="email" name="user_email" className='contacto__inputs-container__input' required />

      </div>
        </div>

      <div className='contacto__inputs-container'>
      <label className='contacto__inputs-container__label'>Mensaje *</label>
    <textarea name="message" className='contacto__inputs-container__textarea' cols={30} rows={10} required></textarea>

      </div>
    <div className='contacto__inputs-container__boton-container'>
    <button type="submit" className='contacto__inputs-container__boton-container__boton'>ENVIAR MENSAJE</button>
    </div>
  </form>
  </div>
  )
}

export default Contacto