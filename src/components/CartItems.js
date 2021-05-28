import React, { useContext, useState } from "react"
import { ImageContext } from "./ImageContext"


function CartItems({items}){
    const {removeImageFromCart} = useContext(ImageContext)
    const [deleteButtonClassName,setDeleteButtonClassName] = useState("ri-delete-bin-line")
    return(
        <div className="cart-item">
            <i 
                onClick = {() => removeImageFromCart(items)}
                onMouseEnter={() => setDeleteButtonClassName("ri-delete-bin-fill")}
                onMouseLeave={() => setDeleteButtonClassName("ri-delete-bin-line")}
                className={deleteButtonClassName}></i>
            <img src={items.url} width="130px" />
            <p>{(5.99).toLocaleString("en-IN", {style:"currency" ,currency:"INR"})}</p>
        </div>
    )
}

export default CartItems