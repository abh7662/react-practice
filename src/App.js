
import React from "react"


export default function App() {
    function isPanagram(str) {
        const processedString = str.toLowerCase().split(" ").join("").split("").sort()
        const result = [...new Set(processedString)]
        return result.length === 26
    }

    console.log(isPanagram("The quick Brown fox jumps over the lazy DOG"))
    return (
        <div>
            hello
        </div>
    )
}