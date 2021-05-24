import React, {useContext} from "react"
import Header from "./Header"
import Button from "./Button"
import {ThemeContext} from "./ThemeContext"

function App() {
    const {theme,swithTheme} = useContext(ThemeContext)
    return (
        <div>
            <Header />
                <Button swithTheme={swithTheme} theme={theme} />
        </div>
    )
}

export default App