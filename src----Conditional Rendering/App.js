/*
Challenge:

Given a stateless functional component:
1. Follow the steps necessary to add state to it,
2. Have state keep track of whether the user is logged in or not
3. Add a button that logs the user in/out
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
*/

import React, {Component} from "react"
import "./App.css"

class App extends Component{
    constructor(){
        super()
        this.state = {
            isLoggedIn : false
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(){
        this.setState(prevState => {
            return{
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }
    render(){
        return (
            <div className="login_box">
                <p>You are Logged {this.state.isLoggedIn?"In":"Out"}</p>
                <button onClick={this.handleChange} className="btn">Log {this.state.isLoggedIn?"Out":"In"}</button>
            </div>
        )
    }
    
}

export default App
