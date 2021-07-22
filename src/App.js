
import React from "react"


export default function App() {
    const transposeMatrix = (array) => {
        return array[0].map((_, i) => array.map(v => v[i]))
    }


    console.log(transposeMatrix([
        [1, 2, 3],
        [1, 2, 3],
        [1, 2, 3],
    ]))
    // [[1,1,1],[2,2,2],[3,3,3]]
    return (
        <div>
            hello
        </div>
    )
}