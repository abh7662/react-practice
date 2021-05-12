import React from "react"
import "./App.css"
const App = () => {
    const currentTime = new Date()

    return(
        <div>
            <h1>{currentTime.getDate()}</h1>
            <h1>{currentTime.getMinutes()}</h1>
            <h1>{currentTime.getDay()}</h1>
            <h1>{currentTime.getMonth()}</h1>
            <h1> {currentTime.getHours() > 12 && currentTime.getHours() < 24?"Good Night":"Good After Noon"}</h1>
        </div>
    )
}
 
export default App