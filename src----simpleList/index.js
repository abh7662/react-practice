import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App"

function MyInfo(){
  return(
    <App />
  )
}
ReactDOM.render(<MyInfo />,  document.getElementById('root')
);
