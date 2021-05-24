import React from "react"
import useGameLogic from "./useGameLogic"

function App(props){
    const [text,gameRunning,wordCount,timeReamining,startGame,handleChange,textAreaRef] = useGameLogic()
    return(
        <div>
            <h1>How fast do you Type?</h1>
            <textarea 
                disabled={!gameRunning}
                value={text}
                onChange={handleChange}
                ref={textAreaRef}
            />
            <h4>Time remaining: {timeReamining}</h4>
            <button disabled={gameRunning} onClick={startGame}>Start</button>
            <h1>Word Count: {wordCount}</h1>
        </div>
    )
}

export default App