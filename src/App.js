
import React from "react"


export default function App() {
    // filter the users with letter k in their name and return only name and emai of the user

    const getUsers = () => {
        const api = 'https://jsonplaceholder.typicode.com/users'
        fetch(api, { method: "GET" })
            .then(res => res.json())
            .then(data => {
                const filteredData = data.filter(singleData => singleData.name.toLowerCase().includes("k"))
                // const result = filteredData.map(singleFilterData => ({ name: singleFilterData.name, email: singleFilterData.email }))
                const result = filteredData.map(({ name, email }) => ({ name, email }))
                console.log(result)
            })

    }

    getUsers()
    return (
        <div>
            hello
        </div>
    )
}