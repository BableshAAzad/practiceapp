import React from 'react'
import useMouseOver from './useMouseOver';

function UseMouseOverMain() {
    let isMouseOver = useMouseOver();
  return (
    <div>
      <h1 style={{backgroundColor : "lightgreen"}}>{isMouseOver ? 'Mouse is over!' : 'Mouse is not over.'}</h1>
      {/* Your other component content */}
    </div>
  )
}

export default UseMouseOverMain
