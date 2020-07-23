import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

 const Car = () => {

    return (
        <>
            <Carousel>
            <Carousel.Item>
              <img
                width="100%"
                height="auto"
                className="d-block w-100"
                src="/dummy.jpg"
                alt="First slide"
              />
  
            </Carousel.Item>
            <Carousel.Item>
              <img
                width="100%"
                height="auto"
                className="d-block w-100"
                src="/dummy.jpg"
                alt="Third slide"
              />

            </Carousel.Item>
            <Carousel.Item>
              <img
                width="100%"
                height="auto"
                className="d-block w-100"
                src="/dummy.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </>
    )
}

export default Car