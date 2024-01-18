import React, { useState } from 'react';
import "./StateWithInputs.css";

function StateWithInputs() {
  let [fdata, setdata] = useState({ fn: "", ln: "", email: "", gender: "", state: "", skills: [] });
  let updateFormData = (e) => {
    if (e.target.type === "checkbox") {
      setdata((val) => ({ ...val, skills: [...val.skills, e.target.value] }));
    } else {
      setdata({ ...fdata, [e.target.name]: e.target.value })
    }
  }
  let setFormData = (e) => {
    console.log(fdata);
    e.preventDefault();
  }
  return (
    <div id='stateForm'>
      <form onSubmit={setFormData} >
        <label htmlFor="fname">First Name</label>
        <input type="text" name='fn' placeholder='First Name' id='fname' onChange={updateFormData} autoComplete='on'/><br /><br />
        <label htmlFor="lname">Last Name</label>
        <input type="text" name='ln' placeholder='Last Name' id='lname' onChange={updateFormData} autoComplete='on'/><br /><br />
        <label htmlFor="email">Emali ID</label>
        <input type='email' name='email' placeholder='Email Address' id='email' onChange={updateFormData} autoComplete='on'/><br />
        <br />
        <label htmlFor="">Gender</label>
        <input type="radio" name="gender" value="male" id="gen_male" onChange={updateFormData} /><label htmlFor="gen_male">Male</label>
        <input type="radio" name="gender" value="female" id="gen_female" onChange={updateFormData} /><label htmlFor="gen_female">Female</label>
        <input type="radio" name="gender" value="other" id="gen_others" onChange={updateFormData} /><label htmlFor="gen_others">Others</label>
        <br /><br />
        <label htmlFor="state">State</label>
        <select name="state" id="state" onChange={updateFormData}>
          <option value="">--Option--</option>
          <option value="karnatak" >Karnataka</option>
          <option value="tamil Nadu" >Tamil Nadu</option>
          <option value="goa" >Goa</option>
          <option value="chhattisgarh">Chhattisgarh</option>
        </select>
        <br /><br />
        <label htmlFor="skills">Skills</label>
        <input type="checkbox" name="skills" id="java" value="java" onChange={updateFormData} /><label htmlFor="java">Java</label>
        <input type="checkbox" name="skills" id="sql" value="sql" onChange={updateFormData} /><label htmlFor="sql">Sql</label>
        <input type="checkbox" name="skills" id="web" value="web" onChange={updateFormData} /><label htmlFor="web">Web</label>
        <br /><br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default StateWithInputs
