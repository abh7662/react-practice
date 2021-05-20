import React from "react"


function TodoItem(props) {
    const style = {
        color: "#cdcdcd",
        fontStyle: "italic",
        textDecoration: "line-through"
    }
    return (
        <div className="todo-item">
            <input type="checkbox"
                checked = {props.completed} 
                onChange={(e) => props.handleChange(props.id)}
            />
            <p style={props.completed?style:null}>{props.text}</p>
        </div>
    )
}

export default TodoItem