import React, { Suspense } from 'react'
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
            {/* style={{ border: "2px solid red", width: "300px", height:"300px", marginRight: "auto", marginLeft: "auto" }} */}
            <section >
                <Suspense fallback={<h1>Loading....!!!</h1>}>
                    <Outlet />
                </Suspense>
            </section>
        </div>
    )
}

export default Products
