import React, { useState } from 'react'

function Watches() {
  let [isTrue, setIsTrue] = useState(false)
  let hideShow = () => {
    isTrue === false ? setIsTrue(true) : setIsTrue(false)
  }
  return (
    <div>
      <h1>Whatches</h1>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dolorem rem velit error, odit magni cumque aspernatur quia possimus
        dolor...
      </h3>
      {isTrue && <h3>exercitationem veniam minima deserunt corporis totam tenetur
        quisquam eligendi sunt laborum nobis beatae nesciunt sapiente. Omnis
        laudantium doloremque recusandae,
        dolor distinctio ab, eos iure expedita molestiae sequi consectetur
        quisquam eaque minima.</h3>}
      <br />
      <button onClick={hideShow}
        style={{ padding: "8px" }}>
        {isTrue ? "Read Less" : "Read More"}
      </button>
    </div>
  )
}

export default Watches
