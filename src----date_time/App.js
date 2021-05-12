import React from "react"
import "./App.css"
const App = () => {
    const currentTime = new Date("02-02-2020 13:40:20")
    let timeOfDay, mycolor

    if(currentTime.getHours() < 12){
        timeOfDay = "Good Morning"
        mycolor = "green"
    }else if(currentTime.getHours() > 12 && currentTime.getHours() < 17){
        timeOfDay = "Good AfterNoon"
        mycolor = "red"

    }else{
        timeOfDay = "Good Night"
        mycolor = "blue"

    }

    return(
        <div>
            {/* <h1>{currentTime.getHours()}</h1> */}
            {/* <h1>{currentTime.getDate()}</h1>
            <h1>{currentTime.getMinutes()}</h1>
            <h1>{currentTime.getDay()}</h1>
            <h1>{currentTime.getMonth()}</h1> */}
            <h1 style={{color: mycolor}}>{timeOfDay}</h1>
        </div>
    )
}
 
export default App