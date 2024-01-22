import React from 'react'
import { Link } from 'react-router-dom';
import "./NavbarCSS.css"

function Navbar() {
  return (
    <div id='navItems'>
      <Link to="/">Home</Link>
      <Link to="/homeWorkTasks">HomeWorkTasks</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/loginForm">Login</Link>
    </div>
  )
}

export default Navbar
