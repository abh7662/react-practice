
import React from "react"


export default function App() {
    function isPanagram(str) {
        const allAlphabets = 'abcdefghijklmnopqrstuvwxyz'.split('')
        str = str.toLowerCase()
        return allAlphabets.every(x => str.includes(x))
    }

    console.log(isPanagram("abcdefghijklmnopqrstuvwxyz"))
    return (
        <div>
            hello
        </div>
    )
}