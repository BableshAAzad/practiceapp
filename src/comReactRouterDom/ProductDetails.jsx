import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { productsList } from "./ProductsItems/ProductList";
import "./ProductDetails.css"
import axios from 'axios';

function ProductDetails() {
    let { pid } = useParams();
    // let { id, price, title, description, image, rating: { rate } } = productsList.find(({ id }) => {
    //     return (
    //         parseInt(pid) === id
    //     )
    // })
    // console.log(id)
    let [isApiData, setIsApiData] = useState([])
    let fetchApi = async () => {
        try {
            let datas = await axios.get(`https://fakestoreapi.com/products/${pid}`);
            setIsApiData(datas.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchApi()
        // eslint-disable-next-line
    }, [])
    // console.log(isApiData)
    let { id, price, title, description, image } = { ...isApiData }
    // console.log(rating.rate);
    return (
        <div className='mainProDetail'>
            <h2>Product id : {id}</h2>
            <h2>Title : {title}</h2>
            <img src={image} alt="nopicture" />
            {/* <h3>Rating : {rating.rate}</h3> */}
            <h3>Price : {price}</h3>
            <h4>Description : {description}</h4>
        </div>
    )
}

export default ProductDetails
