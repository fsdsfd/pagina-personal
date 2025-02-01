import React from 'react'
import { useRoutes } from 'react-router';
import NotFound from '../pages/NotFound';
import Contacto from '../Components/Contacto';
import Descripcion from '../pages/Descripcion';
import Inicio from '../pages/Inicio';

const Rutas = () => {
    const routes = useRoutes([
        {
          path: "/",
          element: <Inicio />,
        },
        {
          path: "/descripcion",
          element: <Descripcion />,
        },
        {
          path: "/contacto",
          element: <Contacto />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ]);
      return routes;
}

export default Rutas