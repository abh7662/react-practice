
import React from "react"
import RenderProps from "./renderProps"
function App() {

    return (
        <div>
            <RenderProps render={(val) =>
                <>
                    {`value is ${val}`}
                </>
            } />
        </div>
    )
}

export default App
