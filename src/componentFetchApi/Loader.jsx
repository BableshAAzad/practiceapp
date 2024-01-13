import React from 'react'

function Loader() {
  return (
    <div style={{fontSize:"100px", color:"blue", marginTop:"10%"}}>
        <i className="fa-solid fa-spinner fa-spin"></i>
        {/* <i className="fa-solid fa-rotate-right fa-spin"></i> */}
    </div>
  )
}

export default Loader
