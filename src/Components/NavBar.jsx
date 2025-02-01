import React from 'react'
import NavItem from './NavItem.jsx'
import { Link } from 'react-router'
import menuItems from '../constants/menuItems.js'
import "./NavBar.scss"
import UseVisible from '../hooks/UseVisible.jsx'
export const NavBar = ({ isVisible }) => {
  return (
    <nav className={`navbar nav-h navbar-expand-lg bg-info-subtle  ${
        isVisible ? "opacity-0" : "opacity-100"
      }`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        Tomás
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">

          {
            menuItems.map( (item, idx) => (
              <NavItem objItem={item} key={idx + item.nombre} />
            ))
          }           
         
        </ul>
      </div>
    </div>
  </nav>
  )
}
