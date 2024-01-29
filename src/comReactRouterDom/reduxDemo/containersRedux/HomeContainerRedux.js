import HomeRedux from "../comRedux/HomeRedux";
import {addToCartR, removeToCartR} from "../servicesRedux/actionsRedux/ActionsRedux"
import { connect } from "react-redux";

let mapStateToProps = (state)=>({
   cardData : state.cardItemsR
})
let mapDispatchToProps =(dispatch)=>({
    addToCartHandler : data=> dispatch(addToCartR(data)),
    removeToCartHandler : data=> dispatch(removeToCartR(data))
})

// export default HomeRedux;
export default connect(mapStateToProps, mapDispatchToProps)(HomeRedux)
