import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./styles.css"
import { Provider } from "./ThemeContext"
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
    <BrowserRouter>
        <Provider>
            <App />
        </Provider>
    </BrowserRouter>
    , document.getElementById("root"))
