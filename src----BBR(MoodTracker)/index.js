import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "./styles.css"

const CharacterCounterInput = ({ text, defaults }) => {
  const maxLength = 280
  const [myText,setMyText] =useState("")
  const myLength = myText.length
  const myClassName = myLength > 280 ? "counterInput tooLong":"counterInput"
//   const [myLength,setMyLength] = useState(0)
    const handleClick = (b) => {
        if(b === "Great"){
            setMyText("I am Gret")
        }else if(b === "Okay"){
            setMyText("I am Okay")

        }else if(b === "Bad"){
            setMyText("I am Bad")

        }
    }
  return <div className={myClassName}>
    <div>
      {defaults.map((b) => {
        return <button key={b} onClick={() => {handleClick(b)}}>{b}</button>
      })}
    </div>
    <textarea
        className={"tooLong"}
        value={myText}
        onChange={(e) => {setMyText(e.target.value)}}
      placeholder={text}
    />
    <div>{myLength}/{maxLength}</div>
  </div>
}

const App = () => {
  let defaultMoods = ["Great", "Okay", "Bad"]
  
  return (
    <section>
      <h2>Mood Tracker</h2>
      <CharacterCounterInput text={"How was your day?"} defaults={defaultMoods}/>
      {/* <CharacterCounterInput text={"How was your day?"} defaults={defaultMoods}/> */}
    </section>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));