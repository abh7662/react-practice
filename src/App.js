import React, { useContext } from 'react';
import Redux from "redux"
function App(){
  const increment = () =>{
    return{
      type: 'INCREMENT'
    }
  }
  const reducer = (state = {count:0},action) =>{
    switch(action.type){
      case 'INCREMENT':
        return {
          count: state.count + 1
        }
      default: 
        return state
    }
  }
  const store = Redux.createStore(reducer)
  store.dispatch(increment())
  console.log(count)
  return (
  <>
  </>    
  )
}

export default App




