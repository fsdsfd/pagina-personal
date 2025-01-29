import React, { useEffect } from 'react'

const NotFound = () => {
    useEffect(() => {
        document.title = 'Tomás- No Encontrada'
        }, [])
  return (
    <div>No se encontró la página que buscabas</div>
  )
}

export default NotFound