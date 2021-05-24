import { useState } from "react"

function useToggler(props){
    const [on, setOn] = useState(props)
    const toggle = () =>{
        setOn(prevOn => !prevOn)
    }
    return [on,toggle]
}

export default useToggler