import React from 'react'
import NavItem from './NavItem.jsx'
import { Link } from 'react-router'
import menuItems from '../constants/menuItems.js'

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-info-subtle">
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
