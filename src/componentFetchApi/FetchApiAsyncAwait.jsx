import React, { useEffect, useState } from 'react'

function FetchApiAsyncAwait() {
    let [details, setdetails] = useState({});
    let [idtake, setidtake] = useState(0);
    let [trueee, settrueee] = useState(false);
    let getDetails = async () => {
        try {
            let url = "https://fakestoreapi.com/products/" + idtake;
            let fakedetails = await fetch(url);
            console.log(fakedetails);
            // fakedetails = await fakedetails;
            setdetails(fakedetails);
            console.log(fakedetails.json())
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getDetails();
    }, [idtake]);
  
    function viewData() {
        settrueee(true);
    }
    
    let updateId = (e) => {
        setidtake(e.target.value);
        console.log(idtake)
    }
    return (
        <div>
            <input type="number" placeholder='Enter id' onChange={updateId}/>
            {/* <input type='submit' value="Enter " onSubmit={()=>{viewData()}} /> */}
            {/* {details
                .map(({detail}) => {
                    return <p key={detail.id}>Id : {detail.id}</p>
             })} */}
             {<p id='iddd'>{details.image}</p>}
        </div>
    )
}

export default FetchApiAsyncAwait
