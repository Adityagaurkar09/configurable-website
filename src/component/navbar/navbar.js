import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

function navbar() {
  return (
    <div className="Navbar">
        <span className="brand-name">DAIRY</span> 

        <div className="navbar-links">
          <Link to="/" className="navbar-link">
          Home
          </Link>
          <Link to="/about" className="navbar-link">
          About
          </Link>
          <Link to="/contact" className="navbar-link">
          Contact
          </Link>
        </div>
    </div>
  )
}

export default navbar