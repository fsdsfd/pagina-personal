import React from 'react'
import NavItem from './NavItem.jsx'
import { Link } from 'react-router'
import menuItems from '../constants/menuItems.js'
import "./NavBar.scss"
import UseVisible from '../hooks/UseVisible.jsx'
export const NavBar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-position ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#inicio">Tomás</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#resume">Resume</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#habilidades">Habilidades</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#servicios">Servicios</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contacto">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
