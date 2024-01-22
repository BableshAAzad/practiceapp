import React, { useState } from 'react'
import ComponentA from "./ComponentA"
import ComponentB from "./ComponentB"
import ComponentC from "./ComponentC"
function Parent() {
    let [count, setCount] = useState(0);
    let updateCount = () => { setCount(count + 1) };
    console.log("Parent is rendered")
    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={updateCount}>Update</button>
            <hr />
            <ComponentA />
            <hr />
            <ComponentB count={count} />
            <hr />
            <ComponentC />
        </div>
    )
}

export default Parent
