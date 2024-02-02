import React from 'react'
import { NavLink } from 'react-router-dom';
import "./PracticeNavBar.css"

function PracticeNavBar() {
  return (
    <nav className="practicenav">
      <NavLink className="practicenavlink" to="demoUseRef">UseRefDemo</NavLink>
      <NavLink className="practicenavlink" to="loadLagyDemo">LagyLoadDemo</NavLink>
      {/* <NavLink className="practicenavlink" to="demoUseParam">UseParamDemo</NavLink> */}
      <NavLink className="practicenavlink" to="fakeStore">FakeStore</NavLink>
    </nav>
  )
}

export default PracticeNavBar
