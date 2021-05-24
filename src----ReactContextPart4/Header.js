import React, { Component } from "react"
import UserContext from "./UserContext"

function Header(props) {
    return (
        <header>
            <UserContext.Consumer>
                {username => <p>Welcome, {username}</p>}
            </UserContext.Consumer>
            
        </header>
    )
}

export default Header
