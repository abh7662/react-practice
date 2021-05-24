import React, { useState } from "react"

const ThemeContext = React.createContext()

function ThemeContextProvider(props) {
    const [theme,setTheme] = useState("dark")
    const swithTheme = () => {
        setTheme(theme => theme === "light"?"dark":"light")
    }
    return (
        <ThemeContext.Provider value={{ theme, swithTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export { ThemeContextProvider, ThemeContext }