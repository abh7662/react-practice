import React from "react"
import {withToggler} from "./HOCs/withToggler"

function Favorite(props) {
    console.log(props.on)
    return (
        <div>
            <h3>Click heart to favorite</h3>
            <h1><span onClick={props.toggle}>{props.on?"❤️" : "♡"}</span></h1>
        </div>
    )
}

export default withToggler(Favorite, false)
