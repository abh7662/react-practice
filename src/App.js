import React, { useState } from 'react';
import {Switch} from "react-router-dom"


function App() {
  // const buyFlightTicket = () =>{
  //   return new Promise((resolve,reject)=>{
  //     setTimeout(()=> {
  //       const error = true
  //       error?reject("reject"):resolve("reslove")
  //     },2000)
  //   })
    
  // }
  // buyFlightTicket().then(val => console.log(val)).catch(err => console.log(err))
  // let arr = [{val: "app2", index: 2},
  // {val: "aPP1", index: 1},
  // {val: "app3", index: 3},
  // {val: "aPP5", index: 5},
  // {val: "app4", index: 3}]
  // const compare = (a,b) => {
  //   const val1 = a.val.toUpperCase()
  //   const val2 = b.val.toUpperCase()
  //   if(val1>val2){
  //     return 1
  //   }else if(val2>val1){
  //     return -1
  //   }
  //   return 0
  // }

  // arr.sort(compare)
  // // arr.reverse()
  // console.log(arr)

  // let arr = [2,3,4,1,6,7,10,20,22]
  // const reducer = (a,b) => a-b
  // arr.sort(reducer)
  // arr.reverse()
  // console.log(arr)
  return (
    <div className="btn">
      <header>header</header>
      <main>main1</main>
      <section>main2</section>

      <footer>footer</footer>
      {/* <button className="header">click</button>
      <button className="main">click main</button>
      <button className="main">click</button>
      <button className="main">click main</button>
      <button className="footer">click</button> */}
      {/* <button>click</button> */}
    </div>
  )
}

export default App

// <h1>{count}</h1>
//       <button onClick={() => {
        
//         const newCount = Math.random() * 10
//         console.log(newCount)
//         setCount(Math.floor(newCount))
        
        
//         }}>Random Values</button>

// <<Switch>
//       <Route path='/' />
//       <PrivateRoute path='/admin' />
//       <PrivateRoute path='/admin/details' />
//       </Switch>


