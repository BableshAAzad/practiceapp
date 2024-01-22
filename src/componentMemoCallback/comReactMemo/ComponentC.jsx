import React, { memo } from 'react'

function ComponentC() {
  console.log("Component C rendered")
  return (
    <div>
      <h1>Component C</h1>
    </div>
  )
}

export default memo(ComponentC);
