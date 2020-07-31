import React from 'react'
import styles from '../../styles/contactPage/footer.module.css'
import { FaInstagram } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'
import { FcReddit } from 'react-icons/fc'

export const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <p>Welcome to Refinity! Here are all the platforms you can support us through or reach out to us on -</p>
            <div className={styles.items}>
                <div className={styles.SocialIcons}>
                    <FaInstagram />
                    <FiTwitter />
                    <FcReddit />
                </div>
                <div className={styles.Emails}>
                    <div>
                        <span>Academics - </span>
                        <a href="">academics@refinityedu.org</a>
                    </div>
                    <div>
                        <span>Public Relations - </span>
                        <a href="">relations@refinityedu.org</a>
                    </div>
                    <div>
                        <span>Tutoring - </span>
                        <a href="">tutoring@refinityedu.org</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}