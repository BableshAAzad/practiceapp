import React from 'react'
import OtherCom from './reactPortalDemo/OtherCom'
import ReactDOM from "react-dom";

function ReactPortal() {
    return ReactDOM.createPortal(
        <div>
            <h1>Outer Portal</h1>
            <OtherCom />
        </div>,
        document.getElementById("otherRoot")
    )
}

export default ReactPortal
