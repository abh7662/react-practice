import React, { useReducer, useState } from 'react';
import ReactDOM from 'react-dom';
import "./styles.css"

// let array = [1,2,3,4,5]
// let add = (x,y) => x+y

// let sum = array.reduce(add)

// function reducer(state,action){
//   switch(action.type){
//     case 'ADD':
//       return {...state, count:state.count + action.by}
//     case 'MINUS':
//       return {...state, count:state.count - action.by}
//     case 'EATCAKE':
//       return {...state, cake: false}
//     default:
//       return state
//   }
// }

// let initialState = { count: 0, cake: true}
// let actions = [
//   {type: 'ADD', by: 12},
//   {type: 'MINUS', by: 4},
//   {type: 'ADD', by: 10},
//   {type: 'EATCAKE' },
// ]
// console.log(actions.reduce(reducer,initialState))



// const initialState = {count: 0, cake: true}
// let actions = [
//   {type: 'ADD', by: 2},
//   {type: 'MINUS', by: 4},
//   {type: 'ADD', by: 12},
//   {type: 'EATCAKE'}
// ]

// console.log(actions.reduce(reducer,initialState))

const App = () => {
  // const [count, setCount] = useState(0)
  // console.log(count)
  const reducer = (state,action) =>{
    switch(action.type){
      case 'INC':
        return {...state, count: state.count + 1 }
      case 'DEC':
        return {...state, count: state.count - 1}
      case 'CHG':
        return {...state, count: action.val}
      default:
        return state
    }
  }
  let initialState = { count: 0, cake: true}
  const [state,dispatch] = useReducer(reducer,initialState)
  const {count} = state
  return (
    <section>
      <h2>Counter: The Most Novel Example I Could Come Up With</h2>
      <div className="counter">
        <button onClick={() => {
          // setCount(prevCount => prevCount - 1)
          // dispatch({type: 'MINUS', by: 2})
          dispatch({type: 'DEC'})
          }}>-</button>
        <input
            type="text"
            aria-label="count"
            // defaultValue={count}
            value={count}
            onChange={(event) => {
              // setCount(event.target.value?parseInt(event.target.value):0)
              // dispatch({type: 'MINUS', by: 1})
              // state = { count: event.target.value }
              dispatch({type: 'CHG', val: parseInt(event.target.value)})
            }}
        />
        <button onClick={() => {
              // dispatch({type: 'ADD', by: 2})
          dispatch({type: 'INC'})
          // setCount(prevCount => prevCount + 1)
          }}>+</button>
      </div>
    </section>
  )
}
ReactDOM.render(<App />, document.getElementById('root'));