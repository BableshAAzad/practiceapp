import { ADD_TO_CART,REMOVE_TO_CART } from "../constaintsRedux"

export let addToCartR = (data) => {
  // console.log("action", data)
  return (
    {
      type: ADD_TO_CART,
      data: data
    }
  )
}

export let removeToCartR = () => {
  // console.log("action")
  return (
    {
      type: REMOVE_TO_CART,
    }
  )
}