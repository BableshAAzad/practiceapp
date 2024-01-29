import React from 'react'
import "./HomeRedux.css"

function HeaderRedux(props) {
  console.log("Header", props.cardData)
    return (
        <>
            <div className='addToCartR'>
                <span>{props.cardData.length}</span>
                <i className="fa-solid fa-cart-plus"></i>
            </div>
        </>
    )
}

export default HeaderRedux
