import React, { useEffect, useState } from 'react';
import Loader from "./Loader";

function FakeStoreProducts() {
    let [products, setproducts] = useState([]);
    let [isloading, setisloading] = useState(false);
    let [iserror, setiserror] = useState(false);
    let getProducts = async () => {
        try {
            let fakeproducts = await fetch("https://fakestoreapi.com/products");
            fakeproducts = await fakeproducts.json();
            setproducts(fakeproducts);
            setisloading(false)
            setiserror(false);
        } catch (error) {
            console.log(error)
            setiserror(true);
            setisloading(false);
        }
    }
    console.log(products);
    useEffect(()=>{
        setisloading(true);
        getProducts();
    },[])
    return (
        <div>
           {isloading && <Loader/>}
           {iserror && <h1 style={{color:"red"}}>Oppes something wrong!!!!</h1>}
           {!isloading && products.map((product)=>{
            return <img key={product.id} src={product.image} width={200} height={200} alt='No pic'/>
           })}
        </div>
    )
}

export default FakeStoreProducts
