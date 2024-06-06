import React from 'react'
import { useParams } from 'react-router-dom'
const ServiceDetails = () => {
    const { slug } = useParams();

  console.log('Slug from URL:', slug); // Log the slug parameter
  console.log("hello")
    const service = ServiceDetails[slug]
    if (!service) {
        return <div>Service not found</div>;
      }
    console.log("srvice is ", service)
    
  return (
    <div> <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
    <h2 className="text-3xl font-bold mb-8">{service.title}</h2>
    <p className="text-base">{service.info}</p>
  </div></div>
  )
}

export default ServiceDetails