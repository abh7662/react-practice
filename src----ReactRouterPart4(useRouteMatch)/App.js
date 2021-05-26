import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Profile from "./pages/profile/Profile"
import Settings from "./pages/profile/Settings"
import Info from "./pages/profile/Info"

import {Switch, Route} from "react-router-dom"

function App() {    
    return (
        <div>
            <Header />
            
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/usr">
                    <Profile/>
                </Route>
                {/* <Route path="/profile/info">
                    <Info />
                </Route>
                <Route path="/profile/settings">
                    <Settings />
                </Route> */}
            </Switch>
            
            <Footer />
        </div>
    )
}

export default App
