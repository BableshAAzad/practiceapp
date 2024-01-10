import React from 'react'
import Child2 from './Child2'

function Parent2() {
    let getChildData = (cdata) => {
        console.log(cdata);
    }
    return (
        <div>
            <h1>Parent2 component</h1>
            <h3>Name : </h3>
            <Child2 gettingChildData={getChildData}></Child2>
        </div>
    )
}

export default Parent2
