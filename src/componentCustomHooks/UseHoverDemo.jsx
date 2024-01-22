import React from 'react'
import useHover from "./useHover"
function UseHoverDemo() {
    let [hoverRef, isHovered] = useHover();
  return (
    <div>
      <div ref={hoverRef}>Component content</div>
    </div>
  )
}

export default UseHoverDemo
