import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            checkdiet: {
                mango: false, 
                papaya: false, 
                rice: false
            },
            location: "bangalore"

        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        const {name, value, type, checked} = event.target
        type === "checkbox"?this.setState(prevState => {
            return{
                checkdiet: {
                    ...prevState.checkdiet,
                    [name]:checked
                }
                
            }
        }):
        this.setState({
            [name]: value
        })

    }
    render() {
        return (
            <main>
                <form>
                    <input name="firstName" value={this.state.firstName} onChange={this.handleChange} placeholder="First Name" /><br />
                    <input name="lastName" value={this.state.lastName} onChange={this.handleChange} placeholder="Last Name" /><br />
                    <input name="age" value={this.state.age} onChange={this.handleChange} placeholder="Age" /><br />
                    
                    {/* Create radio buttons for gender here */}
                    <input 
                        type="radio"
                        name="gender"
                        checked={this.state.gender === "male"}
                        value="male"
                        onChange = {this.handleChange}
                    />Male
                    <br />
                    <input 
                        type="radio"
                        name="gender"
                        checked={this.state.gender === "female"}
                        value="female"
                        onChange = {this.handleChange}
                    />Female
                    <br />
                    <select
                        value={this.state.location}
                        onChange={this.handleChange}
                        name="location"
                    >
                        <option value="banalore">Bangalore</option>
                        <option value="chennai">Chennai</option>
                        <option value="delhi">Delhi</option>
                        <option value="kolkata">Kolkata</option>
                    </select>
                    {/* Create select box for location here */}
                    <br />
                    
                    {/* Create check boxes for dietary restrictions here */}
                    <input 
                        type="checkbox"
                        name="mango"
                        checked={this.state.checkdiet.mango}
                        onChange={this.handleChange}
                    />Mango
                    <br />
                    <input 
                        type="checkbox"
                        name="papaya"
                        checked={this.state.checkdiet.papaya}
                        onChange={this.handleChange}
                    />Papaya
                    <br />
                    <input 
                        type="checkbox"
                        name="rice"
                        checked={this.state.checkdiet.rice}
                        onChange={this.handleChange}
                    />Rice
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {`${this.state.firstName} ${this.state.lastName}`}{/* First and last name here */}</p>
                <p>Your age: {this.state.age}{/* Age here */}</p>
                <p>Your gender: {this.state.gender}{/* Gender here */}</p>
                <p>Your destination: {this.state.location}{/* Destination here */}</p>
                <p>
                    Your dietary restrictions: {this.state.checkdiet.mango?"Mango":null}
                    {/* Dietary restrictions here, comma separated */}
                </p>
            </main>
        )
    }
}

export default App
