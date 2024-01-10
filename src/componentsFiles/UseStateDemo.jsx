import React, { useState } from 'react'
import "./UseStateDemo.module.css"

function UseStateDemo() {
    let [count, setCount] = useState(0);
    function updataCount() {
        // setCount(++count);
        for (let i = 1; i <= 5; i++) {
            setCount(++count);
            console.log(count);
        }
    }
    // console.log(setCount);
    // setCount(++count);
    // function hide() { setCount(false) };
    // function show() { setCount(true) };

    return (
        <div>
            <h1>Count : {count}</h1>
            <input type='submit' onClick={updataCount} />
            {/* {count && <h1>Hello reactjs</h1>}
            {count && <input type="submit" onClick={hide} value="Hide" />}
            {count || <input type="submit" onClick={show} value="Show"/>} */}

        </div>
    )
}

export default UseStateDemo
