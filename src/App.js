
import React from "react"


export default function App() {
    const makeFlat = (array) => {
        return array.reduce((acc, curr) => {
            return Array.isArray(curr) ? [...acc, ...makeFlat(curr)] : [...acc, curr]
        }, [])
    }


    console.log(makeFlat(["one", ["two", "three"], ["four", ["five"]]])); // ['one','two','three','four','five']
    return (
        <div>
            hello
        </div>
    )
}