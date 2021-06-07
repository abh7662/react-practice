import React from "react"
import useAbhi from "./hooks/useAbhi"

function App() {
    const [dispatch,handleBackgroundSelect,darkMode,name,background,error,randomName,randomBackground,backgrounds] = useAbhi()

    return (
        <>
            <div className={`App ${darkMode ? 'darkmode' : ''}`}>
                <button onClick={() => { dispatch({type:'setDarkMode', value: !darkMode })}}>Dark Mode {darkMode ? 'ON' : 'OFF'}
                </button>{' '}<br />
                <input
                    type="text"
                    placeholder="Type your name"
                    value={name}
                    onChange={(event) => {
                        dispatch({type:'setName',value:event.target.value})
                        // setName(event.target.value)
                        if (event.target.value.length > 15) {
                            // setError('Name is WAY too long, bucko.')
                            dispatch({type:'setError',value:'Name is WAY too long, bucko.'})
                        }
                    }}
                />
                <select value={background} onChange={handleBackgroundSelect}>
                    {backgrounds.map((b) => {
                        return <option key={`bg-${b}`}>{b}</option>
                    })}
                </select>
                {error && (
                    <div className="error">
                        {error}
                        <button onClick={() => {
                            // setError(null)
                            dispatch({type:'setError',value:null})
                            }}>Dismiss</button>
                    </div>
                )}
                <div className="sheet">
                    <h3>Name: {name}</h3>
                    <h3>Background: {background}</h3>
                </div>
                <button onClick={() => {
                        // setName(randomName())
                        dispatch({type:'setName',value:randomName()})
                        dispatch({type:'setBackground',value:randomBackground()})
                        // setBackground(randomBackground())
                    }}>Do it all for me instead</button>
            </div>
        </>
    )
}

export default App