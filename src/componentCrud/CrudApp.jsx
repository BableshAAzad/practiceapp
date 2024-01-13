import React, { useState } from 'react';
import "./CrudAppCss.css"

function CrudApp() {
    let [username, setusername] = useState("");
    let [adddata, setadddata] = useState(["Bablesh", "Durgesh", "Kajol"]);
    let [editd, seteditd] = useState(false);
    let updataName = ({ target: { value } }) => {
        setusername(value)
    }
    let updataUseName = () => {
        setadddata([...adddata, username]);
        console.log(adddata);
    }
    let deleteData = (id) => {
        let usersAll = adddata.filter((ust, ind) => {
            return id !== ind;
        })
        setadddata(usersAll);
    }
    var temp ="";
    let editData = (id)=>{
        let findUser = adddata.filter((ust, ind) => {
            return id === ind;
        })
        seteditd(true);
        temp = findUser.pop();
    }
    return (
        <>
            <div>
                <input type='text' name='name' placeholder='Enter Your Name' onChange={updataName} value={temp} id='inputName' />
                <input type='submit' value="Add User" onClick={updataUseName} id='submit' />
            </div>
            <div>
                <ol>
                    {adddata.map((e, i) => {
                        return <li key={i}>{e}
                            <button type='submit' onClick={() => { deleteData(i) }} className="delete">Delete</button>
                            <button className='edit' onClick={()=>{editData(i)}}>Edit</button>
                        </li>
                    })}
                </ol>
            </div>
        </>
    )
}

export default CrudApp
