import React from 'react';
import ReactDOM from 'react-dom';
import "./styles.css"

const Badge = ({color,children,...props}) => {
  return <span className={`${color} badge`} {...props}>{children}</span>
}

const App = () => {
  return (
    <section>
      <h1>Check out these badges!</h1>
      <Badge color="green">Success</Badge> This is operational. <br />
      <Badge color="red">Removed</Badge> This is critical. <br />
      <Badge color="yellow">Warning</Badge> This is a warning. <br />
      <Badge color="blue" onClick={() => console.log("hello")}>Beta</Badge> This is in progress. <br />
    </section>
  )
}

const domElement = document.getElementById('root')
ReactDOM.render(<App />, domElement)
