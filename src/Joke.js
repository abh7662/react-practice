import React from "react"

function Joke(props){
    return(
        <div>
            <h1 style={{display:props.question?"block":"none", opacity: !props.answer && .1}}>Question: {props.question}</h1>
            <h1 style={{display:props.punchLine?"block":"none"}}>Answer: {props.punchLine}</h1>
        </div>
    )
}

export default Joke