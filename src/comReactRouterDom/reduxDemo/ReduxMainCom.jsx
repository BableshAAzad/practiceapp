import React from 'react'
import HomeContainerRedux from "../reduxDemo/containersRedux/HomeContainerRedux"
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from "./servicesRedux/reducerRedux/IndexRedux"
import HeaderContainerRedux from './containersRedux/HeaderContainerRedux'

let store = createStore(rootReducer);

function ReduxMainCom() {
    return (
        <Provider store={store}>
            <HeaderContainerRedux/>
            <HomeContainerRedux />
        </Provider>
    )
}

export default ReduxMainCom
