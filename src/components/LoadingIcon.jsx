import React from 'react'

function LoadingIcon() {
    let temp = require("./../imgFolder/Walk.gif");
    return (
        <div>
            <img src={temp} alt='Loading...' style={{marginTop: "200px", width: "150px", height: "150px"}} />
        </div>
    )
}

export default LoadingIcon
