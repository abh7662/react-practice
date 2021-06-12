import React from 'react';
import store from './redux';
import { changeCount } from './redux/count';
import { addFavouriteThing, removeFavouriteThing } from './redux/favouriteThing';
import { downVoteVideo, setYouTubeTitle, upVoteVideo } from './redux/youTubeVideo';


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




