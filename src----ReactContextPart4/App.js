import React from "react"
import Header from "./Header"
import UserContext from "./UserContext"

function App(props) {
    return (
        <div>
            <Header />
            <main>
                <UserContext.Consumer>
                    {username => <p className="main"> No New Notification, {username}</p>}
                </UserContext.Consumer>
            </main>
        </div>
    )
}

export default App