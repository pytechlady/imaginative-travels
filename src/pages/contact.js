import React from 'react'
import Bg from '../component/bg/Bg'
import Form from '../component/form/Form'
import Map from '../component/map/Map'



const contact = () => {
  return (
    <div className='pb-5 h-100'>
      <Bg title="Contact Us" paragraph="We would love to hear from you..."/>
      <div className="container">
  <div className="row">
    <div className="col-sm-12 col-md-12 col-lg-6 mt-3">
    <Map />
    </div>
    <div className="col-sm-12 col-md-12 col-lg-6 mt-3">
    <Form />
    </div>
  </div>
  </div>
      
    </div>
  )
}

export default contact