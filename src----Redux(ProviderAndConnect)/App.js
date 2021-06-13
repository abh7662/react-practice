import React from 'react'
import {connect} from 'react-redux'
import { decrement, increment } from './redux'

function App(props){

  return (
  <>
    <h1>{props.count}</h1>
    <button onClick={props.decrement}>-</button>
    <button onClick={props.increment}>+</button>
  </>    
  )
}

// const mapStateToProps = (globalState) => ({count: globalState})

// const mapDispatchToPros = {
//   increment: increment,
//   decrement: decrement
// }

// export default connect(mapStateToProps,mapDispatchToPros)(App)

export default connect((state) => ({count:state}),{increment,decrement})(App)




