import React, { useContext, useState } from "react"
import { ImageContext } from "./ImageContext"
import PropTypes from "prop-types"

function Image({img,className}){
    const [hovered,setHovered] = useState(false)
    const {cartItems,toggleIsFavorited,addImageToCart,removeImageFromCart} = useContext(ImageContext)
    const checkInCart = cartItems.some(image => image.id === img.id)
    return(
        <div className={`${className} image-container`}
            onMouseEnter={(e) => setHovered(true)}
            onMouseLeave={(e) => setHovered(false)}
            >
            <i 
                onClick={() => toggleIsFavorited(img.id)}
                style={{display:hovered || img.isFavorite?"block":"none"}} 
                className={img.isFavorite?"ri-heart-fill favorite":"ri-heart-line favorite"}></i>
            <i 
                onClick={() => {
                    checkInCart?
                    removeImageFromCart(img)
                    :
                    addImageToCart(img)
                }}
                style={{display:hovered || checkInCart?"block":"none"}} 
                className={checkInCart?"ri-shopping-cart-fill cart":"ri-add-circle-line cart"}></i>

            <img  
                src={img.url} 
                className="image-grid" />
        </div>
    )
}

ImageContext.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}
export default Image