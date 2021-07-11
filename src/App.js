import React from "react"
import { withFavoriteNumber } from "./withFavouriteNo"

function App(props) {
    console.log(props)
    return (
        <div>Hello world!</div>
    )
}

export default withFavoriteNumber(App)