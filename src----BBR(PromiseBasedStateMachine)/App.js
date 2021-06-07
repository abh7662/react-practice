import React, { useEffect, useReducer, useState } from 'react';

const App = () => {
//   let [user, setUser] = useState(null);
    const [state,dispatch] = useReducer((state,action)=>{
        switch(action.type){
            case 'LOADING': 
                return {...state, loading: true}
            case 'RESPONSE':
                return {...state, response: action.response, loading: false}
            case 'ERROR':
                return {...state, error:action.error}
        }
    },{
        loading: false,
        response: null,
        error: null
    })
    const {loading,response,error} = state
    useEffect(() => {
        dispatch({type:'LOADING'})
        fetch('https://jsonplaceholder.typicode.com')
        .then(response => response.json())
        .then(json => dispatch({type:'RESPONSE',response:json}))
        .catch(error => dispatch({type:'ERROR', error}))
    },[])
    return (
        <section>
        <h2>Get User Data</h2>
        <div className="user">
            {loading && <div>loading...</div>}
            {error && <div>Error</div>}
            {response && <>
            User ID: {response.id} <br />
            User Title: {response.title}
            </>}
        </div>
        </section>
    )
}
export default App