import React, {Component} from "react"
import UserContext from "./UserContext"

class Header extends Component {
    static contextType = UserContext
    render() {
        const username = this.context
        
        return (
            <header>
                <p>Welcome, {username}</p>
            </header>
        )    
    }
}


export default Header
