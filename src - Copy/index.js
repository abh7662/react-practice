import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./styles.css"
import ThemeContext from "./UserContext"

ReactDOM.render(
    <ThemeContext.Provider value={"ak7662"}>
        <App />
    </ThemeContext.Provider>, document.getElementById("root"))
