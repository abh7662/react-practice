import React, { useState } from "react"

const ThemeContext = React.createContext()

function ThemeContextProvider(props) {
    const [theme, setTheme] = useState("light")
    const switchTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <ThemeContext.Provider value={{ theme, switchTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export { ThemeContextProvider as Provider, ThemeContext }

// import React from "react"

// const ThemeContext = React.createContext()

// class ThemeContextProvider extends React.Component {
//     state = {
//         theme: "light"
//     }
//     switchTheme = () => {
//         this.setState(preVState => ({
//             theme: preVState.theme === "light" ? "dark" : "light"
//         }))


//     }
//     render() {
//         return (
//             <ThemeContext.Provider value={{ theme: this.state.theme, switchTheme: this.switchTheme }}>
//                 {this.props.children}
//             </ThemeContext.Provider>
//         )
//     }
// }

// export { ThemeContextProvider as Provider, ThemeContext }