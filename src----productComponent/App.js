/* 
Given a list of products (as an array of objects, as seen in productsData.js)
render a <Product /> component (which you'll also need to create) for each
product in the list.

Make sure to use the array's `.map()` method to create these components, and 
don't forget to pass a `key` prop to it to avoid the warning.
*/
import React from "react"
import Product from "./Product"
import "./App.css"
import products from "./vschoolProducts.js"
function App(){
    const ProductComponent = products.map(product => <Product 
        key={product.id} 
        name={product.name} 
        price={product.price} 
        description = {product.description}
        />)
    return(
    <div>
        {ProductComponent}
        
    </div>
        
    )
}

export default App