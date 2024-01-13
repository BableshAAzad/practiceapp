import React from 'react';
import DateObject from "react-date-object";


function AgeC() {
    function fun() {
        let da = document.getElementById("da").value;
        let year = da.slice(0, 4)
        let month = da.slice(5, 7);
        let day = da.slice(8, 11)
        document.getElementById("ppp").innerHTML = "Day : " + day + " Month : " + month + " Year : " + year
        let date = new DateObject();
        console.log(date)
        console.log(date.format(`${day} ${month} ${year}`));
    }
    return (
        <div>
            {/* <form > */}
                <input type="date" id='da' placeholder='Day' /><br />
                {/* <input type="number" id='ma' placeholder='Month' /><br />
                <input type="number" id='ya' placeholder='Year' /><br /> */}
                <input type="submit" onClick={() => { fun() }} />
            {/* </form> */}
                <p id='ppp'></p>
        </div>
    )
}

export default AgeC
