import React from 'react'
import { Link } from 'react-router-dom'

function Shoes() {
  return (
    <div>
      <h1>Shoes</h1>
       <Link to="/products/shoes/123">Go To Shoes Details Page</Link>
    </div>
  )
}

export default Shoes
