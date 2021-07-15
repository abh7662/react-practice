import React from "react"

class Toggler extends React.Component {
    state = {
        on: this.props.defaultOnValue
    }
    toggle = () => {
        this.setState(prevState => ({
            on: !prevState.on
        }))
    }
    render() {
        const C = this.props.component
        return (
            <C on={this.state.on} toggle={this.toggle} {...this.props} />
        )
    }
}

function withToggler(component, defaultOnValue) {
    return (props) => {
        return (
            <Toggler component={component} defaultOnValue={defaultOnValue} {...props} />
        )
    }
}

export { withToggler }
