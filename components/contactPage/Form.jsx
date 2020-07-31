import React from 'react'
import styles from '../../styles/contactPage/form.module.css'

export const ContactForm = () => {
    return (
        <form className={styles.Form}>
            <h4>Contact Us</h4>
            <label htmlFor="name">Full Name:</label>
            <input placeholder="Write your full name here.." type="text" id="name" name="name" /> 
            <label htmlFor="email">Email:</label>
            <input placeholder="Let us know how to contact you back.." type="email" id="email" name="email" />  
            <label htmlFor="message">Message:</label>
            <textarea placeholder="Type your questions here...." required></textarea>   
            <input type="submit" value="Send Message" />
        </form>
    )
}