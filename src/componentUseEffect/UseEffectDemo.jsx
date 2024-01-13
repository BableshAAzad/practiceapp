import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function UseEffectDemo() {
    let [count, setCount] = useState(0);
     let updateCounter = ()=>{
        setCount(count+1);
     }
     console.log("Start")
     useEffect(()=>{
        console.log("")
     })
    return (
        <div>

        </div>
    )
}

export default UseEffectDemo
