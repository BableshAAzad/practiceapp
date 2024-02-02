import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./FakeStore.css";
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

function FakeStore() {
  let [fakePro, setFakePro] = useState([]);
  let navigate = useNavigate();
  let fakeApiData = async () => {
    let fdatas = await axios.get("https://fakestoreapi.com/products")
    setFakePro(fdatas.data);
    console.log(fakePro)
  }
  useEffect(() => {
    fakeApiData();
    // eslint-disable-next-line
  }, [])
  let detailsPro =(id)=>{
    navigate(("/practice/demoUseParam/"+id))
  }
  return (
    <div className='mainDivFakeStore'>
      {fakePro.map(({ id, category, price, image }) => {
        return (<div key={id} className='cartDivStore'>
          <img src={image} alt={category} width="80rem" height="80rem" />
          <h4>Category : {category}</h4>
          <h3>Price : {price}</h3>
          <Button variant="outlined" startIcon={<MenuIcon />} onClick={()=>{detailsPro(id)}}>
            See Details
          </Button>
        </div>)
      })}
    </div>
  )
}

export default FakeStore
