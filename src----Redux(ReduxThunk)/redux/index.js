import redux, {createStore,applyMiddleware} from "redux"
import thunk from 'redux-thunk'

// export const increment = () =>{
//     return{
//         type: 'INCREMENT'
//     }
// }
//using Redux thunk
export const increment = () =>{
    return (dispatch,getState) => {
        const currentState = getState()
        currentState % 2 === 0?
        dispatch({type: 'INCREMENT'})
        :
        setTimeout(() => {
            dispatch({type: 'INCREMENT'})
        },1500)
    }
}

export const decrement = () =>{
    return{
        type: 'DECREMENT'
    }
}

const handleCounterReducer = (state = 0, action) =>{
    switch(action.type){
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1;
        default:
            return state
    }
}

const store = createStore(handleCounterReducer,applyMiddleware(thunk))

store.subscribe(()=>{
    console.log(store.getState())
})

export default store