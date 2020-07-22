import React, { useState, useEffect  } from 'react'
import styles from '../styles/navbar.module.css'
import Link from 'next/link'
import { GrMenu } from 'react-icons/gr'
import { CSSTransition } from 'react-transition-group'

export const Navbar = () => {

    const [isNavVisible, setIsNavVisible] = useState(true)
    const [isSmallScreen, setisSmallScreen] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 800px)")
        mediaQuery.addListener(handleMediaQueryChange)
        handleMediaQueryChange(mediaQuery)

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange)
        }
    }, [])

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible)
    }

    const handleMediaQueryChange = mediaQuery => {
        if(mediaQuery.matches) {
            setisSmallScreen(true)
        } else {
            setisSmallScreen(false)
        }
    }

    return (
        <header className={styles.Header}>
            <img className={styles.Logo} src="/LOGO.png" alt="refinity-logo" />
            <CSSTransition
                in={!isSmallScreen || isNavVisible}
                timeout={350}
                classNames="NavAnimation"
                unmountOnExit
            >
                <nav className={styles.Nav}>
                    <Link href="/about"><a>About Us</a></Link>
                    <Link href="/programs"><a>Programs</a></Link>
                    <Link href="/volunteer"><a>Volunteer</a></Link>
                    <Link href="/contact"><a>Contact us</a></Link>
                    <Link href="/donate"><a>donate</a></Link>
                    <Link href="/enroll"><button>Enroll</button></Link>
                </nav>
            </CSSTransition>
            
            <a onClick={toggleNav} className={styles.Burger}><GrMenu /></a>
        </header>
    )
}

