
import React, { useContext } from "react"
import { LoginContext } from "./loginContext"
import { Redirect, useParams } from "react-router"

export default function About() {
    const { isLoggedIn } = useContext(LoginContext)
    console.log(useParams())
    if (!isLoggedIn) {
        console.log("not logged in")
    }
    return (
        <div>
            {isLoggedIn ? `I am About page` : < Redirect to="/login" />}

        </div>
    )
}