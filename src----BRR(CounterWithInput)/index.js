import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "./styles.css"

const App = () => {
  const [count, setCount] = useState(0)
  console.log(count)
  return (
    <section>
      <h2>Counter: The Most Novel Example I Could Come Up With</h2>
      <div className="counter">
        <button onClick={() => {setCount(prevCount => prevCount - 1)}}>-</button>
        <input
            type="text"
            aria-label="count"
            // defaultValue={count}
            value={count}
            onChange={(event) => {setCount(event.target.value?parseInt(event.target.value):0)}}
        />
        <button onClick={() => {setCount(prevCount => prevCount + 1)}}>+</button>
      </div>
    </section>
  )
}
ReactDOM.render(<App />, document.getElementById('root'));