import React, { useEffect, useState } from "react"

const ImageContext = React.createContext()

function ImageContextProvider(props){
    const [imageArray,setImageArray] = useState([])
    const [cartItems,setCartItems] = useState([])
    const toggleIsFavorited = (id) =>{
        setImageArray(img => img.map(myImg => {
            if(myImg.id === id){
                // console.log(id)
                // console.log(myImg.isFavorite)
                return {
                    ...myImg,
                    isFavorite: !myImg.isFavorite
                } 
            }
            return myImg
        }))
    }
    const addImageToCart = (img) =>{
        setCartItems(prevItems => [...prevItems,img])
    }
    const removeImageFromCart = (img) =>{
        setCartItems(prevItems => {
            const updatedItems = prevItems.filter(item => item.id !== img.id)
            return updatedItems
        })
    }
    const emptyCart = () =>{
        setCartItems([])
    }
    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then(res => res.json())
            .then(data => setImageArray(data))
    },[])
    // console.log(cartItems)

    return(
        <ImageContext.Provider value={{imageArray,toggleIsFavorited,cartItems,addImageToCart,removeImageFromCart,emptyCart}}>
            {props.children}
        </ImageContext.Provider>
    )
}

export {ImageContextProvider,ImageContext}