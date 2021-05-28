import React, { useContext } from "react"
import {Link} from "react-router-dom"
import {ImageContext} from "./ImageContext"

function Header() {
    const {cartItems} = useContext(ImageContext)
    return (
        <header>
            <h2><Link to="/">Pic Some</Link></h2>
            <Link to="/cart">
                <i className={
                    cartItems.length > 0?"ri-shopping-cart-fill ri-fw ri-2x":"ri-shopping-cart-line ri-fw ri-2x"
                }>
                </i></Link>
        </header>
    )
}

export default Header
