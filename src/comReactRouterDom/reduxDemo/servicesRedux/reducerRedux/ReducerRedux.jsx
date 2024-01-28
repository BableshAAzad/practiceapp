import { ADD_TO_CART } from "../constaintsRedux"

let initialStateR = {
  cardData: []
}

export default function cardItemsR(state = initialStateR, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cardData: action.data
      }
    case "REMOVE_TO_CART":
    default: return state;
  }
}
