import React from 'react';
import {createStore} from "redux"

const changeCount= (amount = 1) =>{
  return{
    type: 'CHANGE_COUNT',
    payload: amount
  }
}

const addFavouriteThing= (thing) =>{
  return{
    type: 'ADD_FAVOURITE_THING',
    payload: thing
  }
}

const removeFavouriteThing= (thing) =>{
  return{
    type: 'REMOVE_FAVOURITE_THING',
    payload: thing
  }
}

const setYouTubeTitle= (title) =>{
  return{
    type: 'SET_YOUTUBE_TITLE',
    payload: title
  }
}

const upVoteVideo= () =>{
  return{
    type: 'UPVOTE_VIDEO',
  }
}

const downVoteVideo= () =>{
  return{
    type: 'DOWNVOTE_VIDEO',
  }
}

const initialState = {
  count: 0,
  favouriteThings: [],
  youTubeVideo: {
    title: "",
    viewCount: 0,
    votes: {
      up: 0,
      down: 0
    }
  }
}

console.log(initialState)

const reducer = (state = initialState,action) =>{
  switch(action.type){
    case 'CHANGE_COUNT':
      return{
        ...state,
        count: state.count + action.payload
      }
    case 'ADD_FAVOURITE_THING':
      return{
        ...state,
        favouriteThings: [...state.favouriteThings,action.payload]
      }
    case 'REMOVE_FAVOURITE_THING':{
      const updatedThings = state.favouriteThings.filter(thing => thing !== action.payload)
      return{
        ...state,
        favouriteThings: updatedThings
      }}
    case 'SET_YOUTUBE_TITLE':
      return{
        ...state,
        youTubeVideo:{
          ...state.youTubeVideo,
          title: action.payload
        }
      }
    case 'UPVOTE_VIDEO':
      return{
        ...state,
        youTubeVideo:{
          ...state.youTubeVideo,
          votes:{
            ...state.youTubeVideo.votes,
            up: state.youTubeVideo.votes.up + 1
          }
        }
      }
    case 'DOWNVOTE_VIDEO':
      return{
        ...state,
        youTubeVideo:{
          ...state.youTubeVideo,
          votes:{
            ...state.youTubeVideo.votes,
            down: state.youTubeVideo.votes.down + 1
          }
        }
      }
      
    default: 
      return state
  }
}
const store = createStore(reducer)
store.subscribe(()=>{
  console.log(store.getState())
})
store.dispatch(changeCount())
store.dispatch(addFavouriteThing("abc"))
store.dispatch(addFavouriteThing("def"))
store.dispatch(removeFavouriteThing("abc"))
store.dispatch(setYouTubeTitle("abhishek"))
store.dispatch(upVoteVideo())
store.dispatch(downVoteVideo())


function App(){

  return (
  <>
  </>    
  )
}

export default App




