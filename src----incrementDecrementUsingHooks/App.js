import React from "react"
import "./App.css"

const App = () => {
    const [count,setCount] = React.useState(0)
    const increment = () =>{
        setCount(prevCount => prevCount + 1)
    }
    const decrement = () =>{
        setCount(prevCount => prevCount -1)
    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default App