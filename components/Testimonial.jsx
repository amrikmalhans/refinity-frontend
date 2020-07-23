import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { IoIosArrowForward } from 'react-icons/io'
import { IoIosArrowBack } from 'react-icons/io'
import styles from "../styles/testimonial.module.css";

 const Testimonial = () => {

    return (
        <>
          <h2>What they say about us</h2>
          <CarouselProvider
          naturalSlideWidth={150}
          naturalSlideHeight={55}
          totalSlides={3}
          className="Carousel"
          isPlaying={true}
          >
             <ButtonBack className="CarouselButton"> <IoIosArrowBack /></ButtonBack>
            <Slider className="Slider">
              <Slide index={0}>
                  <div className={styles.TestBox}>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className={styles.Person}>
                        <img src="/dummy.jpg" alt="testimonial" />
                        <h4>Ronald Richard</h4>
                    </div>
                  </div>
              </Slide>
              <Slide index={1}>
                  <div className={styles.TestBox}>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className={styles.Person}>
                        <img src="/dummy.jpg" alt="testimonial" />
                        <h4>Ronald Richard</h4>
                    </div>
                  </div>
              </Slide>
              <Slide index={2}>
                  <div className={styles.TestBox}>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className={styles.Person}>
                        <img src="/dummy.jpg" alt="testimonial" />
                        <h4>Ronald Richard</h4>
                    </div>
                  </div>
              </Slide>
            </Slider>
           
        <ButtonNext className="CarouselButton"><IoIosArrowForward /></ButtonNext>
          </CarouselProvider>
        </>
    )
}

export default Testimonial