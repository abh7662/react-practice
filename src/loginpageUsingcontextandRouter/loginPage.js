
import React, { useContext } from "react"
import { LoginContext } from "./loginContext"
import { Redirect } from "react-router"


export default function Login() {
    const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext)
    return (
        <div>

            {isLoggedIn ? < Redirect to="/about" /> : <button onClick={() => {
                if (!isLoggedIn) {
                    setIsLoggedIn(true)
                }
            }}>Login</button>}


        </div>
    )
}