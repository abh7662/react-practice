import React from "react"
import Header from "./Header"
import Button from "./Button"
import {ThemeContextConsumer} from "./ThemeContext"

function App() {
    return (
        <div>
            <Header />
            <ThemeContextConsumer>
                {({theme,swithTheme}) => <Button swithTheme={swithTheme} theme={theme} />}
            </ThemeContextConsumer>
        </div>
    )
}

export default App