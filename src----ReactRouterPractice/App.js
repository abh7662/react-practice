import React from "react"
import { Link , Switch, Route } from "react-router-dom"
import Home from "./Home"
import Products from "./Products"
import ProductDetail from "./productDetail"

function App() {    
    return (
        <div>
            <header>
                <Link to= "/">Home</Link>
                <Link to = "/products">Products</Link>
            </header>
            <Switch>
                <Route exact path = "/">
                    <Home />
                </Route>
                <Route exact path = "/products">
                    <Products />
                </Route>
                <Route path = "/products/:productId">
                    <ProductDetail />
                </Route>
            </Switch>
        </div>
    )
}

export default App