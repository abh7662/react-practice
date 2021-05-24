import React, {useState, useRef, useEffect} from "react"

function App(props){
    const [text,setText] = useState("")
    const [timeReamining, setTimeReamining] = useState(5)
    const [wordCount, setWordCount] = useState(0)
    const [gameRunning, setGameRunning] = useState(false)

    const handleChange = (e) => {
        const {value} = e.target
        setText(value)
    }

    const countWords = (text) =>{
        const wordArr = text.split(' ')
        return wordArr.filter(word => word !== "").length
    }

    const startGame = (e) =>{
        setGameRunning(true)
        setTimeReamining(5)
        setText("")
        setWordCount(0)
        textAreaRef.current.disabled = false
        textAreaRef.current.focus()
    }

    useEffect(() => {
        if(gameRunning && timeReamining > 0){
                setTimeout(() => {setTimeReamining(time => time -1)}, 1000)
            }
        else if(timeReamining === 0){
            setWordCount(countWords(text))
            setGameRunning(false)
        }
        }, [timeReamining,gameRunning]
    )

    const textAreaRef = useRef(null)
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