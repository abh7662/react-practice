
import React, { useState } from "react"

const LoginContext = React.createContext()

function LoginContextProvider(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {props.children}
        </LoginContext.Provider>
    )
}

export { LoginContextProvider, LoginContext }