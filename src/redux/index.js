import {createStore,combineReducers} from "redux"
import count from "./count"
import favouriteThings from "./favouriteThing"
import youTubeVideo from "./youTubeVideo"

const rootReducer = combineReducers({
    count,
    favouriteThings,
    youTubeVideo
})

const store = createStore(rootReducer)

store.subscribe(()=>{
    console.log(store.getState())
})

export default store