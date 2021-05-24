import React from "react"

const {Provider,Consumer} = React.createContext()

class ThemeContextProvider extends React.Component{
    state = {
        theme: "dark"
    }
    swithTheme = () => {
        this.setState(prevState => ({theme: prevState.theme === "dark"?"light":"dark"}))
    }
    render(){
        return(
            <Provider value={{theme: this.state.theme, swithTheme: this.swithTheme }}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ThemeContextProvider, Consumer as ThemeContextConsumer}