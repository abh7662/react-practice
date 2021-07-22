
import React from "react"


export default function App() {
    const removeDuplicateValues = (array) => {
        return array.reduce((accumulator, value) => {
            if (!accumulator.includes(value)) {
                accumulator.push(value)
            }
            return accumulator
        }, [])
    }
    console.log(
        removeDuplicateValues(["one", "two", "one", "three", "three", "two"])
    ); // ['one','two','three']


    return (
        <div>
            hello
        </div>
    )
}