import React from "react"

class Toggler extends React.Component{
    state = {
        on: this.props.myOnValue
    }
    toggle = () =>{
        this.setState(prevState => ({on: !prevState.on}))
    }
    render(){
        const Component = this.props.component
        return(
            <Component on={this.state.on} toggle={this.toggle} {...this.props} />
        )
    }
}

export function withToggler(component, myOnValue){
    return function (props){
        return(
            <Toggler component={component} myOnValue={myOnValue} { ...props} />
        )
    }
}