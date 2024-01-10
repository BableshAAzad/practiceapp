import React from 'react'

function Child2({ gettingChildData }) {
    let student = { fname: "Durgesh", sname: "AAzad" }
    return (
        <div>
            <h2>Child 2 Component </h2>
            <button onClick={()=>gettingChildData(student)}>Click Me!!!</button>
        </div>
    )
}

export default Child2
