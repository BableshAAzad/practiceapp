import React from 'react'
import Child from './Child'

function Parent() {
    function parentAlert(myName) {
        alert(myName.fname+" "+myName.lname);
    }
    return (
        <div>
            <h1>Hello Parent</h1>
            <Child alertName={parentAlert}></Child>
        </div>
    )
}

export default Parent
