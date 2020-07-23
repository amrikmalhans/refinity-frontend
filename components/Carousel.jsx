import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import styles from "../styles/carousel.module.css";


 const Car = () => {

    return (
        <>
          <CarouselProvider
          naturalSlideWidth={150}
          naturalSlideHeight={60}
          totalSlides={3}
          className={styles.Carousel}
          >
             <ButtonBack>Back</ButtonBack>
            <Slider>
              <Slide index={0}><img width="100%" height="auto" src="/dummy.jpg" alt="carousel item" /></Slide>
              <Slide index={1}><img width="100%" height="auto" src="/dummy.jpg" alt="carousel item" /></Slide>
              <Slide index={2}><img width="100%" height="auto" src="/dummy.jpg" alt="carousel item" /></Slide>
            </Slider>
           
        <ButtonNext>Next</ButtonNext>
          </CarouselProvider>
        </>
    )
}

export default Car