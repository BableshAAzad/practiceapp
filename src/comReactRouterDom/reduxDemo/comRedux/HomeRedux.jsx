import React from 'react'
import "./HomeRedux.css"

function HomeRedux() {
  return (
    <div>
      <div className='addToCartR'>
      <i class="fa-solid fa-cart-plus"></i>
      </div>
      <h1>Home Redux</h1>
      <div className='mainProR'>
        <section className='productImgR'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTipwiN7NI4oNqa_oDek_s7AbAXQByGSyaTyJgDvR8X4JypRZyLKUygm58YmvJaGwJMUSg&usqp=CAU' alt='mobilePic' />
        </section>
        <section className='poductContainR'>
          <h2>Iphone-z</h2>
          <h3>Price : $1000</h3>
          <button>Add To Card</button>
        </section>
      </div>
    </div>
  )
}

export default HomeRedux
