import React, { useState } from 'react'
import styles from '../../styles/enrollPage/enrollHero.module.css'
import { EnrollForm } from '../enrollPage/enrollForm'

export const EnrollHero = () => {
    const [shown, setShown] = useState(false)
    const show = () => {
        setShown(true)
    }

    const setShow = () => {
        setShown(false)
    }

    return (
        <div className={styles.Enroll}>
        <header className={styles.Header}>
            <h1>Ready to Enroll</h1>
            <div>
                <button onClick={show}>General Enrollment</button>
                <button onClick={setShow}>Tutor Applications</button>
            </div>
        </header>
        {shown === false ? 'mao' : <EnrollForm />}
        </div>
    )
}