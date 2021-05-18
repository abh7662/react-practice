/*
Let's practice props and mapping components on our todo list app!

I've created a js file with some todos data in it, which I'm imported into this file. (Normally this data would come
     from an API call, not a local file). 

Challenge: Using the array map method, render a child component for each todo item in the todosData array and pass
 the relevant data to it.
*/

/*
In the previous iteration of this todo list app, we pulled in todos data from a JSON file and mapped over it to display the todo items.

Eventually we'll want to be able to modify the data, which will only happen if we've "loaded" the data in to the 
component's state

Challenge: Change the <App /> component into a stateful class component and load the imported `todosData` into state.
*/

import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./toDosData"
import "./App.css"
class App extends React.Component {
    constructor(){
        super()
        this.state = {
            todosData: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(id){
        // console.log(id)
        this.setState(prevState =>{
            const updatedTodo = prevState.todosData.map(todo =>{
                if(todo.id === id){
                    todo.completed = !todo.completed
                }
                return todo
            })
            return{
                todosData: updatedTodo
            }
        })
    }
    render(){
        const toDosComponent = this.state.todosData.map(todoitem => 
            <TodoItem 
                    key= {todoitem.id}
                    id= {todoitem.id}
                    text= {todoitem.text}
                    completed = {todoitem.completed}
                    handleChange = {this.handleChange}
            />)
        return (
            <div className="todo-list">
                {toDosComponent}
            </div>
        )
    }
}

export default App