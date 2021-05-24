import React, {Component} from "react"
import ThemeContext from "./ThemeContext"

class Button extends Component {
    
    render() {
        console.log(this.context)
        return (
            <button className={`${this.context}-theme`}>Switch Theme</button>
        )    
    }
}

Button.contextType = ThemeContext

export default Button