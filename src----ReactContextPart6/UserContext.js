import React from "react"

const {Provider,Consumer} = React.createContext()

class UserContextProvider extends React.Component{
    state = {
        myusername : "abc"
    }
    changeUserName = (usernamefromApp) =>{
        this.setState({myusername: usernamefromApp})
    }
    render(){
        return(
            <Provider value={{myusername: this.state.myusername, changeUserName:this.changeUserName}}>
                {this.props.children}
            </Provider>
        )
    }
}
export {UserContextProvider, Consumer as UserContextConsumer}