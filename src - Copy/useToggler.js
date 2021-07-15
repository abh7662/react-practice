import { useState } from "react"

function useToggler(defaultOnValue) {
    const [on, setOn] = useState(defaultOnValue)
    const toggler = () => {
        setOn(!on)
    }
    return [on, toggler]
}

export default useToggler