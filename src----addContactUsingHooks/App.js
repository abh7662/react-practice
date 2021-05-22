import React from "react"
import "./App.css"

const App = () => {
    const [inputDta,setinputData] = React.useState({firstName: "", lastName: ""})
    const [contactsData, setContactsData] = React.useState([])
    const handleChange = (e) =>{
        const {name, value} = e.target
        setinputData(prevInput => {
            return{
                ...prevInput,
                [name] : value
            }
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        setContactsData(prevContactsData =>{
            return [...prevContactsData, inputDta]
        })
        console.log(contactsData)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder = "firstName"
                    name="firstName"
                    value={inputDta.firstName}
                    onChange={handleChange}
                />
                <br />
                <input
                    placeholder = "lastName"
                    name="lastName"
                    value={inputDta.lastName}
                    onChange={handleChange}
                />
                <br />
                <button>Add Contact</button>
            </form>
        </div>
    )
}

export default App