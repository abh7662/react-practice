import React from "react"
import useToggler from "./useToggler"

const Favourite = () => {
    const [on, toggle] = useToggler(false)
    return (
        <div>
            <h3>Click heart to favorite</h3>
            <h1><span onClick={toggle}>{on ? "❤️" : "♡"}</span></h1>
        </div>
    )
}

export default Favourite