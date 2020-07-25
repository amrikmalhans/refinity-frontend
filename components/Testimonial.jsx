import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import styles from '../styles/testimonial.module.css'

 const Testimonial = () => {

    return (
        <>
          <Carousel className={styles.Testimonial}>
            <Carousel.Item>
            <div className={styles.TestBox}>
                    <div className={styles.Content}>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. and scrambled it to make a type specimen book.</p>
                    <div className={styles.Person}>
                        <img src="/dummy.jpg" alt="testimonial" />
                        <h4>Ronald Richard</h4>
                    </div>
                  </div>
                  </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className={styles.TestBox}>
                    <div className={styles.Content}>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. and scrambled it to make a type specimen book.</p>
                    <div className={styles.Person}>
                        <img src="/dummy.jpg" alt="testimonial" />
                        <h4>Ronald Richard</h4>
                    </div>
                  </div>
                  </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className={styles.TestBox}>
                    <div className={styles.Content}>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. and scrambled it to make a type specimen book.</p>
                    <div className={styles.Person}>
                        <img src="/dummy.jpg" alt="testimonial" />
                        <h4>Ronald Richard</h4>
                    </div>
                  </div>
                  </div>
            </Carousel.Item>
          </Carousel>
        </>
    )
}

export default Testimonial