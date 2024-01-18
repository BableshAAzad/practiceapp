import React from 'react'

function PopUp({ col, msg }) {
    return (
        <div style={{ backgroundColor: col, color: "white" }}>
            {msg}
        </div>
    )
}

export default PopUp
