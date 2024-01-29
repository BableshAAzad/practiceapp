import React, { useState } from 'react'

function AuthProvider(props) {
    let [login, setLogin] = useState(null);
    console.log(setLogin)
    if (login) {
        return (
            <>
                <h3>Auth Provider</h3>
                {props.children}
            </>
        )
    } else {
        return (
            <>
                <h2>User Not Login</h2>
            </>
        )
    }


}

export default AuthProvider
