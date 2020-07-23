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
                  <ul>
                      <li><Link href="/about">About Us</Link></li>
                      <li><Link href="/programs">Programs</Link></li>
                      <li><Link href="/donate">Donate</Link></li>
                      <li><Link href="/contact">Contact Us</Link></li>
                  </ul>  
                </nav>
            </footer>
    )
}