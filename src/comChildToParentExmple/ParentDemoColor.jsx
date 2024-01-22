import React, { useState } from 'react'
import ChildDemoColor from './ChildDemoColor';
import "./ParentDemoColorCSS.css"

// ^ How to pass data from child to parent in reactjs :-
function ParentDemoColor() {
    let [uiColor, setUiColor] = useState(null);
    // *Callback function
    let getColor =(clr)=>{
        setUiColor(clr);
    }
  return (
    <div>
      <div id='mainDiv' style={{backgroundColor:`${uiColor}`}}>
      </div>
        <ChildDemoColor getColor={getColor} />
    </div>
  )
}

export default ParentDemoColor
