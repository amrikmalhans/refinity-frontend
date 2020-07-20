import React from 'react'
import { Navbar } from './navbar'
import styles from '../styles/header.module.css'

export const Header = () => {
    return (
        <header className={styles.header}>
            <Navbar />
            <div className={styles.hero}>
                <div className={styles.heroBox}>
                    <h1>Mission Statement</h1>
                </div>
            </div>
        </header>
    )
}