import React from "react"
import useCounter from "./useCounter"

function App(props) {
    const [count, increment] = useCounter()
    return (
        <div>
            <h1>The count is {count}</h1>
            <button onClick={increment}>Add 1</button>
        </div>
    )
}

export default App