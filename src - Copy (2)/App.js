import React from "react"
import Header from "./Header"
import Button from "./Button"
import { Switch, Link, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"

function App() {
    return (
        <div>
            {/* <Header />
            <Button /> */}
            <Link to="/">
                Home
            </Link>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
            </Switch>
        </div>
    )
}

export default App