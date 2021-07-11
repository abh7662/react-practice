import React from "react"

class Toggler extends React.Component {
    state = {
        on: this.props.defaultOnValue
    }
    toggle = () => {
        this.setState(prevState => {
            return {
                on: !prevState.on
            }
        })
    }
    render() {
        const C = this.props.componet
        return (
            <C on={this.state.on} toggle={this.toggle} {...this.props} />
        )

    }
}
function withToggler(componet, defaultOnValue) {
    const C = componet
    return (props) => {
        return (
            <Toggler componet={componet} defaultOnValue={defaultOnValue} {...props} />
        )
    }
}

export { withToggler }