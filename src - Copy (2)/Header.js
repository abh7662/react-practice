// import React, { Component } from "react"
// import { ThemeContext } from "./ThemeContext"

// class Header extends Component {
//     render() {
//         return (
//             <ThemeContext.Consumer>{
//                 ({ theme }) => {
//                     return (<header className={`${theme}-theme`}>
//                         <h2>{theme} Theme</h2>
//                     </header>)

//                 }
//             }
//             </ThemeContext.Consumer>
//         )
//     }
// }
// export default Header

import React, { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

function Header(props) {
    const { theme } = useContext(ThemeContext)
    return (
        <header className={`${theme}-theme`}>
            <h2>{theme} Theme</h2>
        </header>
    )
}

export default Header