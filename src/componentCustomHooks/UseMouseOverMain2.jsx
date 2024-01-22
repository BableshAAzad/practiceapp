import React from 'react'
import useMouseOver2 from './useMouseOver2';

function UseMouseOverMain2() {
    let [isMouseOver, targetRef] = useMouseOver2();
    return (
        <div>
            <div ref={targetRef} style={{ backgroundColor: "lightgreen", width: "100%", height: "300px" }}>
                <h1 style={{ backgroundColor: "lightblue" }}>{isMouseOver ? 'Mouse is over!' : 'Mouse is not over.'}</h1>
                {/* Your other component content */}
            </div>
        </div>
    );
}

export default UseMouseOverMain2
