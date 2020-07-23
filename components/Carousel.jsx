import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import styles from "../styles/carousel.module.css";
import { IoIosArrowForward } from 'react-icons/io'
import { IoIosArrowBack } from 'react-icons/io'

 const Car = () => {

    return (
        <>
          <h2>What we've been up to</h2>
          <CarouselProvider
          naturalSlideWidth={150}
          naturalSlideHeight={80}
          totalSlides={3}
          className="Carousel"
          isPlaying={true}
          >
             <ButtonBack className="CarouselButton"> <IoIosArrowBack /></ButtonBack>
            <Slider className="Slider">
              <Slide index={0}><img width="100%" height="auto" src="/dummy.jpg" alt="carousel item" /></Slide>
              <Slide index={1}><img width="100%" height="auto" src="/dummy.jpg" alt="carousel item" /></Slide>
              <Slide index={2}><img width="100%" height="auto" src="/dummy.jpg" alt="carousel item" /></Slide>
            </Slider>
           
        <ButtonNext className="CarouselButton"><IoIosArrowForward /></ButtonNext>
          </CarouselProvider>
        </>
    )
}

export default Car