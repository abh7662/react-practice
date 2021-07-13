import React from "react"
import Menu from "./Menu"
import Favorite from "./Favorite"
import Toggler from "./Toggler"

function App() {
    return (
        <div>
            <Toggler defaultOnValue={true} render={
                (on, toggle) => {
                    return (
                        <Menu on={on} toggle={toggle} />
                    )
                }
            } />

            <hr />
            <Toggler defaultOnValue={false} render={
                (on, toggle) => {
                    return (
                        <Favorite on={on} toggle={toggle} />
                    )
                }
            } />

        </div>
    )
}

export default App