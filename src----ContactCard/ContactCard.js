import React from "react"

function ContactCard(props){
    props = props.contact
    return(
        <div className="contact-card">
                <img src={props.img_src} />
                <h3>{props.name}</h3>
                <p>{props.Phone}</p>
                <p>{props.Email}</p>
        </div>
    )
}

export default ContactCard