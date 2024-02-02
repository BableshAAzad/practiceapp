import { BackHand } from '@mui/icons-material';
import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function UseParamDemo() {
    let [fakePro, setFakePro] = useState({});
    let { sid } = useParams();
    let navigate = useNavigate();

    let fakeApiData = async () => {
        let fdatas = await axios.get(`https://fakestoreapi.com/products/${sid}`)
        setFakePro(fdatas.data);
        // console.log(fdatas.data)
    }
    useEffect(() => {
        fakeApiData();
        // eslint-disable-next-line
    }, [])
    let backPage = () => {
        navigate("/practice/fakeStore")
    }
    return (
        <div>
            <h1>Title : {fakePro.title}</h1>
            <img src={fakePro.image} alt={fakePro.title} width="200rem" height="200rem" />
            <h1>Price : {fakePro.price}</h1>
            <h3>Description : {fakePro.description}</h3>
            <Button variant="outlined" startIcon={<BackHand />} onClick={backPage}>
                BackPage
            </Button>
        </div>
    )
}

export default UseParamDemo
