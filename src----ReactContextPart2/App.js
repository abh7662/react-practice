import React from "react"
import Header from "./Header"
import UserContext from "./UserContext"

class App extends React.Component {
    static contextType = UserContext
    render(){
        const username = this.context
        return (
        <div>
            <Header />
            <main>
                <p className="main"> No New Notification, {username}</p>
            </main>
        </div>
    )
    }
    
}

export default App