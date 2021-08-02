
import React, { useEffect, useState } from "react"
// ------------------------rendring flow in function based components--------------------

// export default function App(props) {
//     console.log("before effect")
//     const [counter, setCounter] = useState(0)
//     useEffect(() => {
//         console.log("effect with counter")
//     }, [counter])
//     useEffect(() => {
//         console.log("effect")
//     }, [])

//     return (
//         <>
//             {console.log("render")}
//             <button onClick={() => setCounter(counter + 1)}>increment</button>
//         </>
//     )
// }
// ------------------------rendring flow in class based components--------------------
// export default class App extends React.Component {
//     constructor() {
//         super()
//         console.log("inside constructor")
//         this.state = {
//             counter: 0,
//             shouldUpdate: false
//         }
//     }
//     componentDidMount() {
//         console.log("component did mount")
//     }
//     componentDidUpdate() {
//         console.log("component did updat")
//         console.log(this.state.counter)
//     }
//     shouldComponentUpdate(a, b) {
//         console.log(a)
//         console.log(b)
//         console.log("should component update")
//         return this.state.shouldUpdate
//     }
//     render() {
//         console.log("render() first console")
//         return (
//             <>
//                 {console.log("dom render")}
//                 <button onClick={() => this.setState(prevCount => ({ counter: prevCount.counter + 1 }))}>increment</button>
//                 <button onClick={() => this.setState(prevCount => ({ shouldUpdate: true }))}>change</button>
//             </>
//         )
//     }

// }

// ------------------------rendring flow in function based components with clild--------------------

export default function App() {
    return (
        <>
            <ParentComponent></ParentComponent>
        </>
    )
}

function ParentComponent(props) {
    console.log("ParentComponent1")
    useEffect(() => {
        console.log("use effect in parent coponent")

    }, [])
    return (
        <>
            <h1>parent</h1>

            {console.log("ParentComponent2")}
            <ChildComponent />
        </>
    )
}

function ChildComponent(props) {
    console.log("ChildComponent1")
    useEffect(() => {
        console.log("use effect in child coponent")

    }, [])
    return (
        <>
            {console.log("ChildComponent2")}
            <h1>child</h1>
        </>
    )
}




// class App1 extends React.Component {
//     constructor() {
//         super()
//         console.log("hello")
//     }
//     componentDidMount() {
//         console.log("mount")
//     }
//     render() {
//         console.log("render")
//         return (
//             <div>

//             </div>
//         )

//     }
// }

// export default function App() {



//     // 'use-strict';
//     // console.log(a);
//     // var a = 10;
//     // console.log(a);
//     'use-strict';
//     console.log(a);
//     a = 10;
//     console.log(a);

//     const a = [1, 2, 3, {
//         c: {
//             d: 4
//         }
//     }];
//     let b = […a];
//     a[3].c.d = 6;

//     console.log(a);
//     console.log(b);



//     const [value, setValue] = useState(0);
//     useEffect(() => {
//         // setValue(1);
//         // setValue(2);
//         // setValue(3);
//         // setValue(4);
//         // let printValue = ""


//         // setInterval(() => {
//         //     setValue(prevValue => {
//         //         return prevValue + 1
//         //     })

//         //     console.log(value)
//         // }, 1000)
//         // setValue(printValue)
//         console.log('I am child');
//     }, []);
//     return (<div>
//         {/* {value} */}
//     </div>)
// }



// return (
//     <div>
//         {/* <ParentComponent></ParentComponent> */}
//     </div>
// )
// }


// function ParentComponent() {

//     const [counter, setCounter] = useState(0)
//     useEffect(() => {
//         console.log('I am parent');
//     }, []);
//     const handleChange = () => {
//         setCounter(counter + 1)
//     }
//     return (
//         <>

//             <button onClick={handleChange}>increment</button>
//             {counter % 2 === 0 ? <ChildComponent counter={counter}></ChildComponent> : ""}
//         </>

//     )
// }

// function ChildComponent(props) {
//     useEffect(() => {
//         console.log('I am child');
//     }, []);
//     return (<div>{props.counter}</div>)
// }

// class ChildComponent extends React.Component {
//     constructor() {
//         super()

//     }
//     shouldComponentUpdate(state, props) {
//         console.log(state)
//         console.log(props)
//     }
//     render() {
//         return (
//             <div>
//                 {this.props.counter}
//             </div>
//         )
//     }
// }

// mount --  render()  

// update -- componentdidupdate unmonunr
