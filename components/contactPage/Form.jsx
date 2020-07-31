import React from 'react'
import styles from '../../styles/contactPage/form.module.css'

export const ContactForm = () => {
    return (
        <form className={styles.Form}>
            <input placeholder="full name" type="text" id="name" name="name" /> 
            <input placeholder="email" type="email" id="email" name="email" />  
            <textarea placeholder="Type your questions here...." required></textarea>   
            <input type="submit" value="Submit" />
        </form>
    )
}