import React from "react"
import Redux from "redux"
function App() {
    let array = [11, 13, 14, 15]
    let b = 10

    let array1 = []
    if (array.includes(b)) {
        for (let a of array) {
            if (a !== b) {
                array1.push(a)
            }
        }
    } else {
        array1 = [...array]
        array1.push(b)
    }
    console.log(array1)
    return (
        <div>
            hello
        </div>
    )
}



export default App