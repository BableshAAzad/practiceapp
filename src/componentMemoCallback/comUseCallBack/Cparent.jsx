import React, { useCallback, useState } from 'react'
import CcomponentA from "./CcomponentA";
import CcomponentB from "./CcomponentB";
import CcomponentC from "./CcomponentC";
function Cparent() {
    let [count1, setCount1] = useState(0);
    let [count2, setCount2] = useState(0);
    let updateCount1 = useCallback(() => {
        setCount1(count1 + 1);
    }, [count1])
    let updateCount2 = useCallback(() => {
        setCount2(count2 + 1);
    }, [count2])
    console.log("Parent is rendered")
    return (
        <div>
            <CcomponentA />
            <hr />
            <CcomponentB count1={count1} updateCount1={updateCount1} />
            <hr />
            <CcomponentC count2={count2} updateCount2={updateCount2} />
        </div>
    )
}

export default Cparent
