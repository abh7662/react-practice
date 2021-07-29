
import React, { useContext, useEffect } from "react"
import { LoginContext } from "./loginContext"
import { Redirect } from "react-router"

export default function Logout() {
    const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext)
    useEffect(() => {
        setIsLoggedIn(false)
        return () => {

        }
    }, [])
    return (
        <div>
            < Redirect to="/login" />
        </div>
    )
}