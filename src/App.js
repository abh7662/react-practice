
import React, { useEffect, useState } from "react"


export default function App() {
    const value = [{ id: 1, name: "A" }, { id: 2, name: "B" }]
    const myHtm = value.map(myValue => `
        <li key=>${myValue.name}</li>
    `)
    const [text, setText] = useState("")
    const [pageNotFount, setpageNotFount] = useState(false)

    this.state = {
        pageNotFount: false
    }
    useEffect(() => {
        fetch("url").
    }, [])

    componentDidMount(){

    }
    const handleChange = (event) => {
        setText(event.target.value)
        this.SetState({

        })
            () => {

    }
}
return (
    <div>
        <Link to="/" />
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
        {pageNotFount ? <Redirect to="/pageNotFound">:}
            <textarea onChange={handleChange} value={text} />
            <p style={{ backgroundColor: 'red' }}>{text}</p>
        </div>
        styledComponent.div=`

        `
        )
}

        const Abc=({name})=><p>{name}</p>

        Abc.defaultProp = {
            name: "abc"
}