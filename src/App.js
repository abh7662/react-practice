
import React from "react"
import withExtraProps from "./withExtraProps"

function App() {

    return (
        <div>
            <h1>My name is {props.name}</h1>
        </div>
    )
}

export default withExtraProps(App)
