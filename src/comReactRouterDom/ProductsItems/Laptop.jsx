import { useRef } from "react"


function Laptop() {
  let refCom = useRef();
  let refFun = () => {
     console.log(refCom.current.innerText)
     refCom.current.innerText = parseInt(refCom.current.innerText)+1
  }
  console.log("Render Laptop")
  return (
    <div>
      <h1 ref={refCom} onClick={refFun}>1</h1>
    </div>
  )
}

export default Laptop
