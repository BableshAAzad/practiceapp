import React, { useState } from 'react'

function CheckBox() {
    let [fdata, setdata] = useState({ skills: [] });
    let updateFormData = (e) => {
        setdata((val) => ({ ...val, skills: [...val.skills, e.target.value] }));
    }
    let setFormData = (e) => {
        console.log(fdata);
        e.preventDefault();
    }
    return (
        <div>
            <form action="" onSubmit={setFormData}>
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

export default CheckBox
