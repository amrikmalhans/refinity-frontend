import React from 'react'
import styles from '../styles/navbar.module.css'
import Link from 'next/link'

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <img className={styles.logo} src="/LOGO.png" alt="refinity-logo" />
            
            <ul className={styles.navlinks}>
                <li><Link href="/about"><a>About Us</a></Link></li>
                <li><Link href="/programs"><a>Programs</a></Link></li>
                <li><Link href="/volunteer"><a>Volunteer</a></Link></li>
                <li><Link href="/contact"><a>Contact us</a></Link></li>
                <li><Link href="/donate"><a>donate</a></Link></li>
                <li><Link href="/enroll"><button>Enroll</button></Link></li>
            </ul>
        </nav>
    )
}

