import React, { useContext,useState } from "react"
import CartItems from "../components/CartItems"
import { ImageContext } from "../components/ImageContext"


function Cart() {
    const [buttonText,setButtonText] = useState("Place Order")
    const {cartItems,emptyCart} = useContext(ImageContext)
    const totalCost = cartItems.length * 5.99
    const dispalyTotalCost = totalCost.toLocaleString("en-IN", {style: "currency", currency: "INR"})
    const cartItemElements = cartItems.map(cartItem => 
        <CartItems key={cartItem.id} items={cartItem} />
        )
    const placeOrder = (e) => {
        setButtonText("Ordering...")
        setTimeout(() => {
            emptyCart()
            setButtonText("Place Order")
        }, 3000);
    }
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {dispalyTotalCost}</p>
            {cartItems.length > 0 && <div className="order-button" onClick={placeOrder}><button>{buttonText}</button></div>}
        </main>
    )
}

export default Cart