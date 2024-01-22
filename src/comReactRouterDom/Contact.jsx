import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Contact() {
  let [fdata, setFdata] = useState({ fullname: "", email: "", mobile: "", password: "" })
  let navigate = useNavigate();
  let updateForm = ({ target: { value, name } }) => {
    setFdata({ ...fdata, [name]: value })
  }
  let sendFormData = (e) => {
    e.preventDefault();
    console.log(fdata)
    navigate("/loginForm")
  }
  return (
    <div>
      <h1>Contact Page</h1>
      <form onSubmit={sendFormData}>
        <input type='text' name='fullname' onChange={updateForm} placeholder='Full Name' /><br /><br />
        <input type='email' name='email' onChange={updateForm} placeholder='Email' /><br /><br />
        <input type='tel' name='mobile' onChange={updateForm} placeholder='Mobile Number' /><br /><br />
        <input type='password' name='password' onChange={updateForm} placeholder='Password' /><br /><br />
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Contact
