import React from 'react'

function Child(props) {
    let fullName = { fname: "Bablesh", lname: "AAzad" };
    return (
        <div>
            <h2>Hello Child</h2>
            <input type="submit" onClick={() => props.alertName(fullName)} />
        </div>
    )
}

export default Child
