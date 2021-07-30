
import React from "react"

export default function withExtraProps(component) {
    const C = component
    return function (props) {
        return (
            <C name={"Abhishek"} {...props} />
        )
    }
}

