import React from 'react'
import useKeyPress from "./useKeyPress"

function UseKeyPressDemo() {
    const isKeyPressed = useKeyPress('Enter')
  return (
    <div>
      {"Key Pressed or not : "+ isKeyPressed + " hello"}
    </div>
  )
}

export default UseKeyPressDemo
