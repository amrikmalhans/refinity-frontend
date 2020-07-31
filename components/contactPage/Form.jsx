import React from 'react'
import styles from '../../styles/contactPage/form.module.css'

export const ContactForm = () => {
    return (
        <form className={styles.Form}>
            <label for="name">Full name:</label><br />
            <input placeholder="full name" type="text" id="name" name="name" /><br />
            <label for="email">Email:</label><br />
            <input placeholder="email" type="email" id="email" name="email" /><br />
            <label for="message">Your Question:</label><br />
            <textarea placeholder="Type your questions here...." required></textarea> <br />
            <input type="submit" value="Submit" />
        </form>
    )
}