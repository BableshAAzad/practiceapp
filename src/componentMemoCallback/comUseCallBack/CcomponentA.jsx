import React, { memo } from 'react'

function CcomponentA() {
    console.log('Component A rendered');
  return (
    <div>
      <h1>Component A</h1>
    </div>
  )
}

export default memo(CcomponentA);
