import React, { useState } from 'react'

function ReadMoreAndLess({ content }) {
    let [toggle, settoggle] = useState(false);
    let updateConent = () => {
        settoggle(!toggle);
    }
    return (
        <>
            <p>{toggle ? content : content.slice(0, 250) + "....."}
                <input type='submit' onClick={updateConent} value={toggle ? "Read Less" : "Read More"} />
            </p>
        </>
    )
}

export default ReadMoreAndLess
