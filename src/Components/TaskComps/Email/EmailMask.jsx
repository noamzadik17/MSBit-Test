import React, { useState } from 'react';
import Main from '../../Main/Main';
import './EmailMask.css';

const EmailMask = ({ name, handleEmailMaskButtonClick }) => {
    const [email, setEmail] = useState('');

    const isInputEmpty = (value) => {
        return value === null || value === undefined || value === '';
    };

    const handleSubmitForm = (e) => {
        e.preventDefault(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
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
                        className='input-area'
                        type='text'
                        placeholder='Enter Your Mail!'
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                    {isInputEmpty(email) && (
                        <span className='required-message'> <span></span> Required</span>
                    )}
                </div>
                <button onClick={() => handleEmailMaskButtonClick(email)}>
                    Use Email Mask
                </button>
            </form>
        </div>
    );
};

export default EmailMask;
