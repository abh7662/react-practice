import React from "react"
import {UserContextConsumer} from "./UserContext"

function Header() {
    return (
        <header>
            <UserContextConsumer>
                {({myusername}) => (
                    <p>Welcome, {myusername}!</p>
                )}
            </UserContextConsumer>
        </header>
    )
}

export default Header
