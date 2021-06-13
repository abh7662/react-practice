import React from 'react'
import {connect, useDispatch} from 'react-redux'
import { decrement, increment } from './redux'
import {useSelector} from 'react-redux'

function App(props){
  const count = useSelector(state => state)
  const dispatch = useDispatch()
  return (
  <>
    <h1>{count}</h1>
    {/* <button onClick={props.decrement}>-</button> */}
    {/* <button onClick={props.increment}>+</button> */}
    <button onClick={() => dispatch(decrement())}>-</button>
    <button onClick={() => dispatch(increment())}>+</button>

  </>    
  )
}

// const mapStateToProps = (globalState) => ({count: globalState})

// const mapDispatchToPros = {
//   increment: increment,
//   decrement: decrement
// }

// export default connect(mapStateToProps,mapDispatchToPros)(App)

// export default connect((state) => ({count:state}),{increment,decrement})(App)

export default App




