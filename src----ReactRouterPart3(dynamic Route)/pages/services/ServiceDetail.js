import React from "react"
import { useParams } from "react-router-dom"
import servicesData from "./servicesData"

function ServiceDetail(props) {
    const {serviceId} = useParams()
    const service = servicesData.find(service => service._id === serviceId)
    return (
        <div>
            <h1>Service Detail Page</h1>
            <h3>{service.name} -- {service.price}</h3>
            <p>{service.description}</p>
        </div>
    )
}

export default ServiceDetail