import React, { useState, useRef } from 'react';
import classes from './ContactUs.module.css';

function ContactUs(props) {
    const fullNameRef = useRef('');
    const contactNumRef = useRef('');
    const emailRef = useRef('');

    const [error, setError] = useState(null);

    async function submitHandler(event) {
        event.preventDefault();

        const fullName = fullNameRef.current.value.trim();
        const contact = contactNumRef.current.value.trim();
        const email = emailRef.current.value.trim();

        if (!fullName || !contact || !email) {
            setError('Fill up the boxes with relevant details');
            setTimeout(() => {
                setError(null);
            }, 3000);
            return;
        }

        const customerDetails = {
            fullName,
            contact,
            email,
        };

        try {
            const response = await fetch('https://shopkart-contactus-default-rtdb.firebaseio.com/contacts.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(customerDetails),
            });

            if (!response.ok) {
                throw new Error('Failed to store data in Firebase');
            }

            props.onAddDetails(customerDetails);

        } catch (error) {
            console.error('Error storing data in database', error);
        }
        fullNameRef.current.value = '';
        contactNumRef.current.value = '';
        emailRef.current.value = '';
    }

    return (
        <div className={classes.center}>
            <h3 className={classes.heading}>Contact Us</h3>
            <p className={classes.details}>Fill up the Details to get a call back from our team</p>
            <form onSubmit={submitHandler}>
                <div className={`${classes.control} ${error ? classes.error : ''}`}>
                    <label htmlFor='fullName'>Full Name</label>
                    <input type='text' id='fullName' ref={fullNameRef} />
                </div>
                <div className={`${classes.control} ${error ? classes.error : ''}`}>
                    <label htmlFor='contactNum'>Contact</label>
                    <input type='number' id='contactNum' ref={contactNumRef} />
                </div>
                <div className={`${classes.control} ${error ? classes.error : ''}`}>
                    <label htmlFor='email'>Email ID</label>
                    <input type='text' id='email' ref={emailRef} />
                </div>
                {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}
                <button className={classes.button3} type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ContactUs;
