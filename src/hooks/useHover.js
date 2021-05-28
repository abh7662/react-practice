import {useState, useEffect, useRef} from "react"

function useHover() {
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)
    
    function enter() {
        setHovered(true)
    }
    
    function leave() {
        setHovered(false)
    }
    
    useEffect(() => {
        const myDomObj =ref.current
        myDomObj.addEventListener("mouseenter", enter)
        myDomObj.addEventListener("mouseleave", leave)
        
        return () => {    
            myDomObj.removeEventListener("mouseenter", enter)
            myDomObj.removeEventListener("mouseleave", leave)
        }
    }, [])
    
    return [hovered, ref]
}

export default useHover