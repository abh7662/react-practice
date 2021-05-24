import React from "react"
import PropTypes from "prop-types"

function Button({theme}) {
    return (
        <button className={`${theme}-theme`}>Switch Theme</button>
    )
}

Button.propTypes = {
    theme: PropTypes.oneOf(["light","dark"])
}
export default Button