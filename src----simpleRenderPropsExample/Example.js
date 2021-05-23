import React from "react"

function Example(props){
    return(
        <div>
            {props.render({name: "Abhishek", age:"25", rollno: 1406008})}
        </div>
    )
}

export default Example