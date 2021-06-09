import React, { useState } from 'react';
import {Switch} from "react-router-dom"


function App() {
  let [count,setCount] = useState(0)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => {
        console.log(count)
        count = count + 1
        console.log(count)

        setCount(count+1)
        console.log(count)
        
        }}>increment</button>
    </div>
  )
}

export default App

// <<Switch>
//       <Route path='/' />
//       <PrivateRoute path='/admin' />
//       <PrivateRoute path='/admin/details' />
//       </Switch>


