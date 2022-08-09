import React from 'react'
import CardService from '../components/cardService/CardService'
import "./Service.css"
import {services} from '../data'
const Service = () => {
 
  return (
    <div  className='container-services'>
      {services.map((service, index) => (
        <CardService key={service.title} service={service} index={index} />
      ))}
    </div>
  )
}

export default Service