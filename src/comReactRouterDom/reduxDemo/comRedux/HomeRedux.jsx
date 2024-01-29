import React, { useEffect, useState } from 'react'
import "./HomeRedux.css"
import axios from 'axios';
import { useCallback } from 'react';

function HomeRedux(props) {
  let [isApiData, setIsApiData] = useState([])
  let fetchApi = useCallback(async () => {
    try {
      let datas = await axios.get("https://fakestoreapi.com/products");
      setIsApiData(datas.data)
    } catch (error) {
      console.log(error)
    }
  })
  useEffect(() => {
    fetchApi()
    // eslint-disable-next-line
  }, [])
  // console.log(isApiData)
  return (
    <div className='mainProRedux'>
      {isApiData.map(({ id, image, price, title }) => {
        return <div key={id} className='mainProR'>
          <section className='productImgR'>
            <img src={image} alt='mobilePic' />
          </section>
          <section className='poductContainR'>
            <h5>{title.substr(0, 25)}...</h5>
            <h4>Price : ${price}</h4>
            <button className='addBtnRdx' onClick={() => props.addToCartHandler({
              price: { price },
              model: { title }
            })}>Add To Card</button>
            <button className='removeBtnRdx' onClick={() =>
              props.removeToCartHandler()}>Remove To Card</button>
          </section>
        </div>
      })}
    </div>
  )
}

export default HomeRedux
