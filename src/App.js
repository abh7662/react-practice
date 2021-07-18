import React from "react"
import { Redux } from "redux"
function App() {
    const initialState = {
        count: 0
    }
    const reducer = (state = initialState, action) => {
        switch (action.type) {
            case "INCREMENT":
                return {
                    count: state.count + 1
                }
			case "DECREMENT":
                return {
                    count: state.count - 1
                }
        }
    }

    const store = Redux.createStore(reducer)

    store.subscribe(() => {
        console.log(store.getState())
    })

    store.dispatch({ type: "INCREMENT" })
    return (
        <div>
            hello
        </div>
    )
}



export default App