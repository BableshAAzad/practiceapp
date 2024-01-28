import { ADD_TO_CART } from "../constaintsRedux"

export let addToCartR = (data) => {
  return (
    {
      type: ADD_TO_CART,
      data: data
    }
  )
}

export let removeToCartR = (data) => {
  return (
    {
      type: "REMOVE_TO_CART",
      data: data
    }
  )
}