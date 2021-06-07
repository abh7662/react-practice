import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import "./styles.css"

const useState = (initialState) =>{
  const [state,dispatch] = useReducer((state,action) => {
    // console.log("state- "+state)
    // console.log("action- "+action)
    return action
  },initialState)
  // console.log("state- "+state)
  // console.log("dis- "+dispatch)
  return [state,dispatch]
}
const App = () => {
  const [count, setCount] = useState(0)
  console.log(setCount)
  return (
    <section>
      <h2>Counter: The Most Novel Example I Could Come Up With</h2>
      <div className="counter">
        <button onClick={() => {
          setCount(count-1)}}>-</button>
        <input
            type="text"
            aria-label="count"
            value={count}
            onChange={(event) => {setCount(event.target.value?parseInt(event.target.value):0)}}
        />
        <button onClick={() => {setCount(count+1)}}>+</button>
      </div>
    </section>
  )
}
ReactDOM.render(<App />, document.getElementById('root'));