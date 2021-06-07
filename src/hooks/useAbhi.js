import { useReducer } from "react"
import friendlyWords from 'friendly-words'

function useAbhi(){
    let backgrounds = ['Noble','Urchin','Folk Hero','Acolyte','Criminal','Hermit','Guild Artisan','Sage']
    const randomBackground = () => backgrounds[Math.floor(Math.random() * backgrounds.length)]
    const randomName = () => {
        let array = friendlyWords.predicates
        let string = array[Math.floor(Math.random() * array.length)]
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    // let [darkMode, setDarkMode] = useState(false)
    // let [name, setName] = useState('')
    // let [background, setBackground] = useState('')
    // let [error, setError] = useState(null)
    const [state,dispatch] = useReducer((state,action) => {
        switch(action.type){
            case 'setDarkMode': 
                return {...state, darkMode:action.value}
            case 'setName': 
                return {...state, name:action.value}
            case 'setBackground': 
                return {...state, background:action.value}
            case 'setError': 
                return {...state, error:action.value}
            default:
                return state
        }
    },{
        darkMode: false,
        name: '',
        background: '',
        error: null
    })
    const {darkMode,name,background,error} = state
    const handleBackgroundSelect = (event) => {
        let value = event.target.value
        // setBackground(value)
        dispatch({type:'setBackground',value:value})
        if (!backgrounds.includes(value)) {
            dispatch({type:'setError',value:'This background does NOT exist.'})
            // setError('This background does NOT exist.')
        } else {
            // setError(null)
            dispatch({type:'setError',value:null})
        }
    }
    return [dispatch,handleBackgroundSelect,darkMode,name,background,error,randomName,randomBackground,backgrounds]
}
export default useAbhi
