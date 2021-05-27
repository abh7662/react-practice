import React from "react"
import productsData from "./productsData"
import {useParams,useHistory} from "react-router-dom"

function ProductDetail(props){
    const {productId} = useParams()
    const history = useHistory()
    const product = productsData.find(myproduct => myproduct.id == productId)
    return(
        <div>
            <h1>Product Details Page</h1>
            <h3>{product.name}</h3>
            <h4>Price: ₹{product.price}</h4>
            <p>{product.description}</p>
            <button onClick={() => history.push("/products")}>Back</button>
        </div>
    )
}

export default ProductDetail
