import React from "react"
import servicesData from "./servicesData"
import {Link} from "react-router-dom"


function ServicesList() {
    const Services = servicesData.map(service => (
        <h3 key={service._id}>
            <Link to={`services/${service._id}`}>{service.name}</Link> -- {service.price}
        </h3>
    ))
    return (
        <div>
            <h1>Services List Page</h1>
            {Services}
        </div>
    )
}

export default ServicesList