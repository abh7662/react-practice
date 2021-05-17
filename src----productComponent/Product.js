import React from "react"

function Joke(props){
    return(
        <div className="product">
        <h1>{props.name}</h1>
        <h2>${props.price}</h2>
        <h3>{props.description}</h3>
        </div>
    )
}

export default Joke