import React, { useState } from "react"


import {Switch, Route, Link, Redirect} from "react-router-dom"


// https://reacttraining.com/react-router/web/example/auth-workflow

function App() {    
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/admin">Admin</Link>
            <Switch>
                <Route exact path="/">
                    <h1>Home Page</h1>
                </Route>
                <Route path="/admin">
                    {isLoggedIn?
                        <h1>Admin Page</h1>:
                        <Redirect to="/login" />
                    }
                    <button onClick={() => setIsLoggedIn(false)}>Logout</button>
                </Route>
                <Route path="/login">
                    <button onClick={() => {setIsLoggedIn(true)}}>Login</button>
                </Route>
                
            </Switch>
        </div>
    )
}

export default App
