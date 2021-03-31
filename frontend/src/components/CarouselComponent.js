import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import "../App.css"


function CarouselComponent() {
    return (
        <div >
          <Carousel>
  
  <Carousel.Item interval={1000} >
    <div className="image-container">
    <img
     className="d-block w-100 img-fluid"
      src="images/1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h2>First slide label</h2>
      <p className="p-size">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption >

    </div>


  </Carousel.Item >
  <Carousel.Item interval={1000} >
    <div className="image-container">
    <img
     className="d-block w-100 img-fluid"
      src="images/2.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p className="p-size">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption >

    </div>


  </Carousel.Item >
  <Carousel.Item interval={1000} >
    <div className="image-container">
    <img
     className="d-block w-100 img-fluid"
      src="images/3.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p className="p-size">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption >

    </div>


  </Carousel.Item >


</Carousel>
            
          </div>
    )
}

export default CarouselComponent
