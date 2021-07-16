// import React, { Component } from "react"
// import { ThemeContext } from "./ThemeContext"

// class Button extends Component {
//     render() {
//         return (
//             <ThemeContext.Consumer>{
//                 ({ theme, switchTheme }) => (<button onClick={switchTheme} className={`${theme}-theme`}>Switch Theme</button>)

//             }
//             </ThemeContext.Consumer>
//         )
//     }
// }
// export default Button
import React, { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

function Button() {
    const { theme, switchTheme } = useContext(ThemeContext)
    return (
        <button onClick={switchTheme} className={`${theme}-theme`}>Switch Theme</button>
    )
}
export default Button
