import React from "react"

function App(props){
    const [text,setText] = React.useState("")
    const [countdownTimer, setCountdownTimer] = React.useState(5)
    const [checkRunning, setcheckRunning] = React.useState(false)
    const [wordCount, setWordCount] = React.useState(0)
    const [buttonValue, setButtonValue] = React.useState("Start")
    const textareaRef = React.useRef(null)

    React.useEffect(() => {
        if(checkRunning){
            setTimeout(() => {setCountdownTimer(prevCount => prevCount > 1 ?prevCount - 1 : 0)}, 1000)
        }
        if(checkRunning && countdownTimer === 0){
            setWordCount(countWords(text))
            setcheckRunning(false)
            setButtonValue("Play Again")
        }
    },[countdownTimer,checkRunning])
    const handleChange = (e) =>{
        const {value} = e.target
        setText(value)
    }
    const countWords = (text) => {
        const wordArr = text.split(' ')
        return wordArr.filter(word => word !== "").length
    }
    return(
        <div>
            <h1>How fast do you type?</h1>
            <textarea
                name="text"
                value={text}
                onChange={handleChange}
                disabled={!checkRunning}
                ref={textareaRef}
            />
            <h4>Time remaining: {countdownTimer}</h4>
            <button 
            disabled={checkRunning}
            onClick={() => {    
                    if(buttonValue === "Play Again"){
                        setButtonValue("Start")
                        setCountdownTimer(5)
                        setText("")
                    }else if(buttonValue === "Start"){
                        setcheckRunning(true)
                        console.log(textareaRef)
                        textareaRef.current.disabled = false
                        textareaRef.current.focus()
                    }
                    }}>{buttonValue}</button>
            <h1>Word Count: {wordCount}</h1>
        </div>
    )
}

export default App