
import React from "react"


export default function App() {
    // isogram function
    const isIsogram = (string) => {
        const result = [...new Set(string.toLowerCase())]
        // console.log(result.join(''))
        return result.join('') === string.toLowerCase()
    }

    console.log(isIsogram('ambidExtrously')) // true
    console.log(isIsogram('patteRN')) // false
    return (
        <div>
            hello
        </div>
    )
}