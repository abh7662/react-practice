
import React, { useState, useEffect } from "react"


export default function App() {
    const [val, setVal] = useState(0.2)
    useEffect(() => {
        setInterval(() => {
            setVal(prevVal => prevVal + .1)
        }, 10)

    }, [])

    return (
        <div>
            <p>Disk Usage: <meter value={val} min="0" max="100">20%</meter></p>
            <p>Total Score: <meter value="6" min="0" max="10">6 out of 10</meter></p>
            <p>Pollution Level: <meter low="60" high="80" max="100" value="85">Very High</meter></p>

            <p>Enter your favorite browser name:</p>
            <input type="text" list="browsers" name="favorite_browser" />
            <datalist id="browsers">
                <option value="Firefox" />
                <option value="Chrome" />
                <option value="Internet Explorer" />
                <option value="Opera" />
                <option value="Safari" />
            </datalist>
        </div>
    )
}

