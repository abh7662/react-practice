
import React from "react"

export default function App() {
    function count1() {
        let i = 0
        i = i + 1
        return function () {
            return i
        }
    }
    const count = count1()
    count()
    console.log(count());
    console.log(count());
    console.log(count());
    return (
        <div>
            hello
        </div>
    )
}