import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./styles.css"
import { BrowserRouter as Router } from "react-router-dom"
import { LoginContextProvider } from "./loginContext"

ReactDOM.render(
    <Router>
        <LoginContextProvider>
            <App />
        </LoginContextProvider>
    </Router>

    , document.getElementById("root"))
