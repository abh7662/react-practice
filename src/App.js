
import React, { useEffect, useState } from "react"

class App1 extends React.Component {
    constructor() {
        super()
        console.log("hello")
    }
    componentDidMount() {
        console.log("mount")
    }
    render() {
        console.log("render")
        return (
            <div>

            </div>
        )

    }
}

export default function App() {



    // 'use-strict';
    // console.log(a);
    // var a = 10;
    // console.log(a);
    'use-strict';
    console.log(a);
    a = 10;
    console.log(a);

    const a = [1, 2, 3, {
        c: {
            d: 4
        }
    }];
    let b = […a];
    a[3].c.d = 6;

    console.log(a);
    console.log(b);



    const [value, setValue] = useState(0);
    useEffect(() => {
        // setValue(1);
        // setValue(2);
        // setValue(3);
        // setValue(4);
        // let printValue = ""


        // setInterval(() => {
        //     setValue(prevValue => {
        //         return prevValue + 1
        //     })

        //     console.log(value)
        // }, 1000)
        // setValue(printValue)
        console.log('I am child');
    }, []);
    return (<div>
        {/* {value} */}
    </div>)
}



// return (
//     <div>
//         {/* <ParentComponent></ParentComponent> */}
//     </div>
// )
// }


function ParentComponent() {

    const [counter, setCounter] = useState(0)
    useEffect(() => {
        console.log('I am parent');
    }, []);
    const handleChange = () => {
        setCounter(counter + 1)
    }
    return (
        <>

            <button onClick={handleChange}>increment</button>
            {counter % 2 === 0 ? <ChildComponent counter={counter}></ChildComponent> : ""}
        </>

    )
}

// function ChildComponent(props) {
//     useEffect(() => {
//         console.log('I am child');
//     }, []);
//     return (<div>{props.counter}</div>)
// }

class ChildComponent extends React.Component {
    constructor() {
        super()

    }
    shouldComponentUpdate(state, props) {
        console.log(state)
        console.log(props)
    }
    render() {
        return (
            <div>
                {this.props.counter}
            </div>
        )
    }
}

// mount --  render()  

// update -- componentdidupdate unmonunr
