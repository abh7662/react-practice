import React from "react"
import PropTypes from "prop-types"

function Button({swithTheme,theme}) {
    return (
        <button onClick={swithTheme} className={`${theme}-theme`}>Switch Theme</button>
    )
}

Button.propTypes = {
    theme: PropTypes.oneOf(["light","dark"])
}
export default Button