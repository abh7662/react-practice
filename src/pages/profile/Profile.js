import React from "react"
import {Link} from "react-router-dom"
import {Switch,Route} from "react-router-dom"
import Settings from "./Settings"
import Info from "./Info"
import {useRouteMatch} from "react-router-dom"

function Profile() {
    const {url,path} = useRouteMatch()
    return (
        <div>
            <h1>Profile Page</h1>
            <ul>
                <li><Link to={`${url}/info`}>Profile Info</Link></li>
                <li><Link to={`${url}/settings`}>Profile Settings</Link></li>
                <Switch>
                    <Route path={`${path}/info`}>
                        <Info />
                    </Route>
                    <Route path={`${path}/settings`}>
                        <Settings />
                    </Route>
            </Switch>
            </ul>
        </div>
    )
}

export default Profile