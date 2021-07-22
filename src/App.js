
import React from "react"


export default function App() {
    const map = (array, callback) => {
        // return array.reduce((acc, curr) => {
        //     acc.push(callback(curr))
        //     return acc
        // }, [])
        return array.reduce((acc, curr) => [...acc, callback(curr)], [])
    }


    console.log(map([1, 2, 3], (v) => v + 1)); // [2,3,4]
    return (
        <div>
            hello
        </div>
    )
}