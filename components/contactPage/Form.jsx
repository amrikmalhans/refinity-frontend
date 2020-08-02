import React from 'react'
import useFormState from '../../hooks/useFormState'

export const ContactForm = () => {
    const [name, updateName] = useFormState("");
    const [email, updateEmail] = useFormState("");
    const [message, updateMessage] = useFormState("");
    return (
        <form className="Form">
            <h4>Contact Us</h4>
            <label htmlFor="name">Full Name:</label>
            <input placeholder="Write your full name here.." type="text" id="name" name="name" value={name} onChange={updateName} /> 
            <label htmlFor="email">Email:</label>
            <input placeholder="Let us know how to contact you back.." type="email" id="email" name="email" value={email} onChange={updateEmail} />  
            <label htmlFor="message">Message:</label>
            <textarea placeholder="Type your questions here...." required value={message} onChange={updateMessage}></textarea>   
            <input type="submit" value="Send Message" />
        </form>
    )
}