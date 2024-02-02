import React, { Suspense } from 'react'
import PracticeNavBar from './PracticeNavBar/PracticeNavBar'
import { Outlet } from 'react-router-dom'

function Practice() {
    return (
        <div>
            <PracticeNavBar />
            <div>
                <Suspense fallback={<h1>Loading....Practice Navbar items!!!</h1>}>
                    <Outlet />
                </Suspense>
            </div>
        </div>
    )
}

export default Practice
