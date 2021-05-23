import React from "react"
import Example from "./Example"

function App() {
    return (
        <div>
            <Example render={(data) => <div>
                <h1>My name {data.name}</h1>
                <h1>My age {data.age}</h1>
                <h1>My rollno {data.rollno}</h1>
            </div>}/>
        </div>
    )
}

export default App