import React from 'react'
import { useParams } from 'react-router-dom'

function ShoesDetails() {
    let shoesid =  useParams();
    console.log(shoesid)
  return (
    <div>
      <h1>Shoes Details</h1>
    </div>
  )
}

export default ShoesDetails
