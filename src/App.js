// import React from "react"
// import { createStore } from "redux"
// function App() {
//     const initialState = {
//         count: 0
//     }
//     const reducer = (state = initialState, action) => {
//         switch (action.type) {
//             case "INCREMENT":
//                 return {
//                     count: state.count + 1
//                 }
//             case "DECREMENT":
//                 return {
//                     count: state.count - 1
//                 }
//             case "DOUBLE":
//                 return {
//                     count: state.count * 2
//                 }
//         }
//     }

//     const store = createStore(reducer)

//     store.subscribe(() => {
//         console.log(store.getState())
//     })

//     store.dispatch({ type: "INCREMENT" })
//     store.dispatch({ type: "INCREMENT" })
//     store.dispatch({ type: "DOUBLE" })
//     store.dispatch({ type: "DECREMENT" })
//     return (
//         <div>
//             hello
//         </div>
//     )
// }



// export default App


import React from "react"
import { createStore } from "redux"

export default function App() {
    const initialState = {
        count: 0
    }

    const reducer = (state = initialState, action) => {
        switch (action.type) {
            case "INC":
                return {
                    count: state.count + 1
                }
            case "DEC":
                return {
                    count: state.count - 1
                }
            case "DOU":
                return {
                    count: state.count * 2
                }
            default: {
                return state
            }
        }
    }
    const store = createStore(reducer)

    store.subscribe(() => {
        console.log(store.getState())
    })

    store.dispatch({ type: "INC" })
    store.dispatch({ type: "DEC" })
    store.dispatch({ type: "INC" })
    store.dispatch({ type: "DOU" })

    return (
        <div>

        </div>
    )
}