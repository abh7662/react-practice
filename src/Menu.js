import React from "react"
import Toggler from "./Toggler"

const Menu = () => {
    return(
        <div>
            <Toggler myOnvalue = {true}  render={(on,toggle) => <div>
                <button onClick={toggle}>{on?"Hide":"Show"}Menu </button>
                <nav style={{display:on?"block":"none"}}>
                    <h6>Signed in as Coder123</h6>
                    <a>Your Profile</a>
                    <a>Your Repositories</a>
                    <a>Your Stars</a>
                    <a>Your Gists</a>
                </nav>
            </div>} />
            
        </div>
    )
}

export default Menu