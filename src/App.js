
import React from "react"


export default function App() {
    function sayHello() {
        return "Hello " + this.name;
    }

    var obj = { name: "Sandy" };

    console.log(sayHello.call(obj))

    // Returns "Hello Sandy"

    return (
        <div>
            hello
        </div>
    )
}