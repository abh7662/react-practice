
import React, { useState } from "react"
import { Link, Route, Switch } from "react-router-dom"
import Home from "./home"
import Login from "./loginPage"
import Logout from "./logout"
import About from "./about"

export default function App() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/logout">Logout</Link>
            <Link to="/about">About</Link>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/logout">
                    <Logout />
                </Route>
                <Route path="/about/:id">
                    <About />
                </Route>
            </Switch>
        </div>
    )
}