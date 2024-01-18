import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
let initialState = { products: [], isLoading: true, isError: false };
let dispatcherFun = (cproduct, action) => {
    // console.log(cproduct)
    switch (action.type) {
        case "FetchApi": return { ...cproduct, products: action.products, isLoading: false }
        case "Error": return { ...cproduct, isError: true, isLoading: false }
        default: return cproduct;
    }
}
function FetchApiUsingUseReducer() {
    let [prodValue, dispatcher] = useReducer(dispatcherFun, initialState);
    let getApiData = async () => {
        try {
            let pdata = await axios.get("https://api.github.com/users");
            // console.log(pdata.data);
            dispatcher({ type: "FetchApi", products: pdata.data });
        } catch (error) {
            dispatcher({ type: "Error" });
        }
    }
    useEffect(() => {
        getApiData();
    }, []);
    // console.log(prodValue)
    return (
        <div style={{margin: "20px", border : "1px solid blue"}}>
            <h3>Fetch Api using useReducer, Axios, loading & Error</h3>
            {prodValue.isLoading && <h1>Loding....</h1>}
            {prodValue.isError && <h1 style={{ color: "red" }}>Error....</h1>}
            {prodValue.products.map((product) => {
                return <img key={product.id} src={product.avatar_url} width={100} height={100} alt='myPic' />
            })}
        </div>
    )
}

export default FetchApiUsingUseReducer
