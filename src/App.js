
import React from "react"


export default function App() {
    function sayHello(a, b) {
        return `hello ${a} ${b} ${this.name}`
    }

    const myObj = { name: "monu" }
    const myObj1 = { name: "minu" }

    console.log(sayHello.call(myObj, "shfbshdfbsdj", "abc"))
    console.log(sayHello.apply(myObj1, ["a", "b"]))

    const myFun = sayHello.bind(myObj, "ram", "shyam")
    console.log(myFun())
    return (
        <div>
        </div>
    )
}