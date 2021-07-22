
import React from "react"


export default function App() {
    function isPanagram(str) {
        const allAlphabets = 'abcdefghijklmnopqrstuvwxyz'.split('')
        let count = 0
        for (let i = 0; i < 26; i++) {
            if (str.toLowerCase().includes(allAlphabets[i])) {
                count++
            }
        }
        if (count === 26) {
            return true
        }
        return false
    }

    console.log(isPanagram("The quick Brown fox jumps Over the lazy dog"))
    return (
        <div>
            hello
        </div>
    )
}