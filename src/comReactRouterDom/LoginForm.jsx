// import { useTransition } from "react";

function LoginForm() {
  // let [trnas, setTrans] = useTransition();
  // let items = [];
  // setTrans(()=>{

  // })
  // for(let i =0; i<10000; i++){
  //    items.push(<p key={i}>Post #{i}</p>)
  // }
  function math(temp) {
    let a = temp * 2;
    let b = temp + 2;

    return [a, b];
  }
  let [a, b] = math(3);
  console.log(a, b)
  return (
    <div>
      <h1>Login form</h1>
      {/* {items} */}
    </div>
  )
}

export default LoginForm
