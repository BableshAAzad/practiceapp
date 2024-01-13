import React, { useEffect, useState } from 'react'

function SearchBox() {
    let [product, setproduct] = useState({});
    let [pid, setpid] = useState("");

    let updatepid = ({ target: { value } }) => {
        setpid(value);
    }
    useEffect(() => {
        let getProducts = async () => {
            try {
                let fakeProduct = await fetch(`https://fakestoreapi.com/products/${pid}`);
                fakeProduct = await fakeProduct.json();
                console.log(fakeProduct);
                setproduct(fakeProduct);
            } catch (error) {
                console.log(error)
            }
        }
        getProducts();
    }, [pid])
    return (
        <div>
            <input type="number" onChange={updatepid} placeholder='Enter Product id' /><br /><br />
            <img src={product.image} alt="No Phot" width={200} height={200} />
        </div>
    )
}

export default SearchBox;
