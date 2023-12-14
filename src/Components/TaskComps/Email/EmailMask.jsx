import React, { useState } from 'react';
import Main from '../../Main/Main';
import './EmailMask.css';

const EmailMask = ({ name, handleEmailMaskButtonClick }) => {
    const [email, setEmail] = useState('');
    const [maskedEmail, setMaskedEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);

    const isInputEmpty = (value) => {
        return value === null || value === undefined || value === '';
    };

    const isEmailValid = (value) => {
        // Add your email validation logic here
        // For simplicity, this example checks for a valid email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        setIsValidEmail(isEmailValid(email));

        if (isEmailValid(email)) {
            // Perform any additional processing or masking logic here
            // For simplicity, this example just sets the maskedEmail to a basic mask
            const masked = email.replace(/(.{2})(.*)(?=@)/, (_, a, b) => a + '*'.repeat(b.length));
            setMaskedEmail(masked);
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setIsValidEmail(true); // Reset validation status when the email changes
    };

    return (
        <div className='container'>
            <main className='main-section'>
                <Main name={name} />
            </main>
            <form className='form' onSubmit={handleSubmitForm}>
                <div className='input-group'>
                    <h3>Email Address</h3>
                    <input
                        className={`input-area ${!isValidEmail ? 'invalid' : ''}`}
                        type='text'
                        placeholder='Enter Your Mail!'
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                    {isInputEmpty(email) && (
                        <span className='required-message'> <span></span> Required</span>
                    )}
                    {!isValidEmail && (
                        <span className='invalid-email-message'>Invalid email format</span>
                    )}
                </div>
                <button type="submit" disabled={!isValidEmail}>
                    Use Email Mask
                </button>
            </form>
            {maskedEmail && (
                <div className='masked-email-result'>
                    <p>Masked Email: {maskedEmail}</p>
                </div>
            )}
        </div>
    );
};

export default EmailMask;
