import React from 'react'
import { Link } from 'react-router-dom';
import productCSS from "./ProductsNavbar.module.css"

function ProductsNavbar() {
  return (
    <nav className={productCSS.navbar}>
      <Link to="mobile">Mobiles</Link>
      <Link to="laptop">Laptop</Link>
      <Link to="pendrive">Pendrives</Link>
      <Link to="shoes">Shoes</Link>
      <Link to="watches">Watches</Link>
    </nav>
  )
}

export default ProductsNavbar
