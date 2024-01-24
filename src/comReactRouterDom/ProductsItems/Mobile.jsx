import React, { useEffect, useState } from 'react'
// import { productsList } from "./ProductList";
import "./Mobile.css"
import { Link } from 'react-router-dom';
import axios from 'axios';

function Mobile() {
  let [isApiData, setIsApiData] = useState([])
  let fetchApi = async () => {
    try {
      let datas = await axios.get("https://fakestoreapi.com/products");
      setIsApiData(datas.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchApi()
        // eslint-disable-next-line
  }, [])
  return (
    <section className='parentPro'>
      {isApiData.map(({ id, title, price, image }) => {
        return (
          <Link to={`/products/mobile/${id}`} key={id} className='childprod' title='Click Me'>
            <h3>Title : {title}</h3>
            <img src={image} alt='nopic' width="200px" height="200px" />
            <h4>Price : {price}</h4>
          </Link>
        )
      })}
    </section>
  )
}

export default Mobile
