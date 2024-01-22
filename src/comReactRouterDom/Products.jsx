import React from 'react'
import ProductsNavbar from './ProductsItems/ProductsNavbar'
import { Outlet } from 'react-router-dom'

function Products() {
    return (
        <div>
            <h1>Products</h1>
            <ProductsNavbar />
            <br />
            <hr />
            <br />
            <section style={{ border: "2px solid red", width: "300px", height:"300px", marginRight: "auto", marginLeft: "auto" }}>
                <Outlet />
            </section>
        </div>
    )
}

export default Products
