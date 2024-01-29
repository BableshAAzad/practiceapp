import HeaderRedux from "../comRedux/HeaderRedux";
// import {addToCartR} from "../servicesRedux/actionsRedux/ActionsRedux"
import { connect } from "react-redux";

let mapStateToProps = (state)=>({
   cardData : state.cardItemsR
})
let mapDispatchToProps =(dispatch)=>({
    // addToCartHandler : data=> dispatch(addToCartR(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(HeaderRedux)
