import React from 'react'
import CalculatorUseReducer from '../comUseReducer/CalculatorUseReducer'
import TodoUseReducerHook from '../comUseReducer/TodoUseReducerHook'

function HomeWorkTasks() {
    return (
        <>
            <h1>Calculator using use reducer</h1>
            <CalculatorUseReducer />
            <br />
            <TodoUseReducerHook/>
        </>
    )
}

export default HomeWorkTasks
