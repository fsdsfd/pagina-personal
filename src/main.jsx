import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import { NavBar } from './Components/NavBar.jsx'

import Rutas from './routes/Rutas.jsx'
import Footer from './Components/Footer.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <NavBar></NavBar>
  <Rutas></Rutas>
  <Footer></Footer>
    </BrowserRouter>
)
