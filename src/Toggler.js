import React from "react"

class Toggler extends React.Component{
    state = {
        on: this.props.myOnvalue
    }
    toggle = () => {
        this.setState(prevState => ({on:!prevState.on}))
    }
    render(){
        return(
            <div>
                {this.props.render(this.state.on, this.toggle)}
            </div>
        )
    }
}
export default Toggler