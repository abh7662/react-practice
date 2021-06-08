import React from 'react'
import ReactDOM from 'react-dom';
import App from "./App"
import "./styles.css"
import {DateFieldsContextProvider} from "./DateFieldsContext"

ReactDOM.render(
<DateFieldsContextProvider>
    <App />
</DateFieldsContextProvider>
, document.getElementById('root'));