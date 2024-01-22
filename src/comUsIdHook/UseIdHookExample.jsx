import React, { useId } from 'react'

function UseIdHookExample({ titleHeading }) {
    let id1 = useId();
    let id2 = useId();
    return (
        <>
            <section>
                <h2>{titleHeading}</h2>
                <label htmlFor={`${id1}fname`}>First Name : </label>
                <input type='text' id={`${id1}fname`} placeholder='First Name' />
                <br /><br />
                <label htmlFor={id2 + "lname"}>Lirst Name : </label>
                <input type='text' id={id2 + "lname"} placeholder='Last Name' />
            </section>
        </>
    )
}

export default UseIdHookExample
