import React, { useContext } from "react"
import Image from "../components/Image"
import { ImageContext } from "../components/ImageContext"
import {getClass} from "../utils"

function Photos() {
    const {imageArray} = useContext(ImageContext)
    const ImageHTML = imageArray.map((image,i) => <Image
            key={image.id} 
            img={image}
            className={getClass(i)}
        />)
    return (
        <main className="photos">
            {/* <h1>Images go here</h1> */}
            {ImageHTML}
        </main>
    )
}

export default Photos

// {
//     "url": "https://github.com/bobziroll/scrimba-react-bootcamp-images/blob/master/pic1.jpg?raw=true",
//     "id": "1",
//     "isFavorite": false
// },