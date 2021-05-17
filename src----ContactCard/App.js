/*
Time to have fun styling! But first things first: 

1. Change the input/p combo below to be a new component called <TodoItem />. <TodoItem /> (for now) will just have the same displayed data below (every todo item is the same) hardcoded inside of it. (We'll learn soon how to make the TodoItem more flexible)
    
2. Style up the page however you want! You're welcome to use regular CSS (in the CSS file) or inline styles, or both!
*/

import React from "react"
import "./App.css"
import ContactCard from "./ContactCard"
function App() {
    return (
        <div className="contacts">
            <ContactCard
                contact={{
                    img_src: "http://placekitten.com/300/200",
                    name: "Mr. Whiskerson",
                    Phone: "(212) 555-1234",
                    Email:"mr.whiskaz@catnap.meow"
                }}
            />
            <ContactCard
                contact={{
                    img_src: "http://placekitten.com/300/200",
                    name: "Mr. Whiskerson",
                    Phone: "(212) 555-1234",
                    Email:"mr.whiskaz@catnap.meow"
                }}
            />
            <ContactCard
                contact={{
                    img_src: "http://placekitten.com/300/200",
                    name: "Mr. Whiskerson",
                    Phone: "(212) 555-1234",
                    Email:"mr.whiskaz@catnap.meow"
                }}
            />
            <ContactCard
                contact={{
                    img_src: "http://placekitten.com/300/200",
                    name: "Mr. Whiskerson",
                    Phone: "(212) 555-1234",
                    Email:"mr.whiskaz@catnap.meow"
                }}
            />
            {/* <ContactCard />
            <ContactCard />
            <ContactCard /> */}
            <div className="contact-card">
                <img src="http://placekitten.com/400/200"/>
                <h3>Fluffykins</h3>
                <p>Phone: (212) 555-2345</p>
                <p>Email: fluff@me.com</p>
            </div>
            
            <div className="contact-card">
                <img src="http://placekitten.com/400/300"/>
                <h3>Destroyer</h3>
                <p>Phone: (212) 555-3456</p>
                <p>Email: ofworlds@yahoo.com</p>
            </div>
            
            <div className="contact-card">
                <img src="http://placekitten.com/200/100"/>
                <h3>Felix</h3>
                <p>Phone: (212) 555-4567</p>
                <p>Email: thecat@hotmail.com</p>
            </div>
        </div>
    )
}

export default App