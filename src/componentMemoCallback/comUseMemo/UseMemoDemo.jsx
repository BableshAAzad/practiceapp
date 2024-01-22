import React, { useMemo, useState } from 'react'

function UseMemoDemo() {
    let [count1, setCount1] = useState(0);
    let [count2, setCount2] = useState(0);
    let updateCount1 = () => {
        setCount1(count1 + 1);
        console.log("Count 1 is rendered");
    }
    let updateCount2 = () => {
        setCount2(count2 + 1);
        console.log("Count 2 is rendered");
    }
    let calculator = useMemo(() => {
        // for(let i=0; i<=9000000000; i++){}
        console.log("Calculator is executed")
        return count1 % 2 === 0;
    }, [count1])
    // console.log("Parent is rendered")
    return (
        <div>
            <h1>count 1 : {count1} <span style={{ color: "blue" }}>{calculator ? "Even" : "Odd"}</span></h1>
            <button onClick={updateCount1}>Update1</button>
            <hr />
            <h1>count 2 : {count2}</h1>
            <button onClick={updateCount2}>Update2</button>
        </div>
    )
}

export default UseMemoDemo
