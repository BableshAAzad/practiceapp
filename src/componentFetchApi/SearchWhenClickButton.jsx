import React, { useEffect, useState } from 'react'

function SearchWhenClickButton() {
    let [product, setproduct] = useState({});
    let [pid, setpid] = useState("");
    let [sid, setsid] = useState("");
    let getSid = () => {
        setsid(pid)
        console.log(pid)
    }
    let getProduct = async () => {
        try {
            let fakeproduct = await fetch(`https://fakestoreapi.com/products/${sid}`);
            fakeproduct = await fakeproduct.json();
            setproduct(fakeproduct);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getProduct()
    }, [sid])
    return (
        <div>
            <input type="search" onChange={({ target: { value } }) => { setpid(value) }} />
            <button onClick={getSid}>Search</button><br /><br />
            {<img src={product.image} alt="No Imagess" height={200} width={200}/>}
        </div>
    )
}

export default SearchWhenClickButton
