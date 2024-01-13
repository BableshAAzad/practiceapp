import React, { useEffect } from 'react'

function SimpleUseEffect() {
    useEffect(() => {
        console.log("simple use effect rendered")
        document.body.style.background = "green";
        return () => {
            document.body.style.background = "red";
            console.log("cleanup rendered")
        }
    },[])
    return (
        <div style={{ border: "2px solid blue", padding: "20px" }}>
            <h1>Simple useEffect component</h1>
        </div>
    )
}

export default SimpleUseEffect
