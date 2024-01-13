import React, { useState } from 'react'
import SimpleUseEffect from './SimpleUseEffect';

function UseEffectApp() {
    let [toggel, settoggle] = useState(true);
    let updateToggle = () => {
        settoggle(!toggel);
    }
    return (
        <>
            {toggel && <SimpleUseEffect />}
            <button onClick={updateToggle}>{toggel ? "Remove" : "Add"}</button>
        </>
    )
}

export default UseEffectApp
