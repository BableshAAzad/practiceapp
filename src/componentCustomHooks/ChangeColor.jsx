import React from 'react'
import useColorChange from './useColorChange'

function ChangeColor() {
    useColorChange("red", "black")
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default ChangeColor
