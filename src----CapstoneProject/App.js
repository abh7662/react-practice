import React from "react"
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import {Switch, Route} from "react-router-dom"

function App() {    
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Photos />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
            </Switch>
        </div>
    )
}

export default App

// # Challenge

// Set up React Router for our app. We should be able to do the following:

// 1. Click on the words "Pic Some" in the header to go to the "/" route, which should display the 
// Photos component (found in the pages folder)

// 2. Click on the shopping cart icon in the header to go to the "/cart" route, which should display 
// the Cart component (found in the pages folder)

