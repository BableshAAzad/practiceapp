import React, { useEffect, useState } from 'react'
// import { productsList } from "./ProductList";
import "./Mobile.css"
import { Link } from 'react-router-dom';
import axios from 'axios';

function Mobile() {
  let [isApiData, setIsApiData] = useState([])
  let [add, setAdd] = useState([2, 5]);
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
  let addItemInCard = (e) => {
    setAdd([7])
    console.log(add)
  }
  return (
    <>
      <Link className="cardTotal">
        <i className="fa-solid fa-cart-shopping"></i>
        <div className='totalProduct'>
          {add.length}
        </div>
      </Link>

      <section className='parentPro'>
        {isApiData.map(({ id, title, price, image }) => {
          return (
              <Link to={`/products/mobile/${id}`} key={id} className='childprod' title='Click Me'>
                <h3>Title : {title}</h3>
                <img src={image} alt='nopic' width="150px" height="150px" />
                <h4>Price : {price}</h4>
                <button onClick={addItemInCard} className='addBtnInCard'>Add</button>
              </Link>
          )
        })}
      </section>
    </>
  )
}

export default Mobile
