import React from 'react'
import { NavLink } from 'react-router-dom';
import "./NavbarCSS.css"

function Navbar() {
  return (
    <div id='navItems'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/homeWorkTasks">HomeWorkTasks</NavLink>
      <NavLink to="/reactPortal">ReactPortal</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/loginForm">Login</NavLink>
    </div>
  )
}

export default Navbar
