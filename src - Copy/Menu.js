import React from "react"
import useToggler from "./useToggler"

function Menu(props) {
    const [on, toggle] = useToggler(true)
    return (
        <div>
            <button onClick={toggle}>{on ? "Hide" : "Show"} Menu </button>
            <nav style={{ display: on ? "block" : "none" }}>
                <h6>Signed in as Coder123</h6>
                <a>Your Profile</a>
                <a>Your Repositories</a>
                <a>Your Stars</a>
                <a>Your Gists</a>
            </nav>
        </div>
    )
}

export default Menu

// import React from "react"
// import { withToggler } from "./withToggler"

// function Menu(props) {
//     return (
//         <div>
//             <button onClick={props.toggle}>{props.on ? "Hide" : "Show"} Menu </button>
//             <nav style={{ display: props.on ? "block" : "none" }}>
//                 <h6>Signed in as Coder123</h6>
//                 <a>Your Profile</a>
//                 <a>Your Repositories</a>
//                 <a>Your Stars</a>
//                 <a>Your Gists</a>
//             </nav>
//         </div>
//     )
// }

// // export default withToggler(Menu, true)
// export default Menu