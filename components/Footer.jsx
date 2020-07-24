import React from 'react'
import Link from 'next/link'
import styles from '../styles/footer.module.css'

export const Footer = () => {
    return (
            <footer className={styles.Footer}>
                <h2>Ready to join us</h2>
                <div className={styles.EnrollDiv}>
                    <button>Enroll</button>
                    <p>Or learn more:</p>
                </div>
                <nav className={styles.FooterNav}>
                    <Link href="/about"><a>About Us</a></Link>
                    <Link href="/programs"><a>Programs</a></Link>
                    <Link href="/donate"><a>Donate</a></Link>
                    <Link href="/contact"><a>Contact Us</a></Link> 
                </nav>
            </footer>
    )
}