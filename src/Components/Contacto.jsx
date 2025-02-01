import React, { useEffect, useRef } from 'react'
import emailjs from "@emailjs/browser";

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
    <div> 
      <form ref={form} onSubmit={enviarCorreo}>
    <label>Nombre:</label>
    <input type="text" name="user_name" required />

    <label>Email:</label>
    <input type="email" name="user_email" required />

    <label>Mensaje:</label>
    <textarea name="message" required></textarea>

    <button type="submit">Enviar</button>
  </form>
  </div>
  )
}

export default Contacto