import React, { useState } from 'react';
import Main from '../../Main/Main';
import './Configuration.css';
import EmailMask from '../Email/EmailMask';

const Configuration = ({ name }) => {
    const [emailMaskLength, setEmailMaskLength] = useState(4);
    const [matrixColumnsLength, setMatrixColumnsLength] = useState(9);
    const [matrixRowsLength, setMatrixRowsLength] = useState(9);
    const [pacmanAnimationSpeed, setPacmanAnimationSpeed] = useState(2);

    const handleEmailMaskLengthChange = (e) => {
        setEmailMaskLength(parseInt(e.target.value, 10));
    };

    const handleMatrixColumnsLengthChange = (e) => {
        setMatrixColumnsLength(parseInt(e.target.value, 10));
    };

    const handleMatrixRowsLengthChange = (e) => {
        setMatrixRowsLength(parseInt(e.target.value, 10));
    };

    const handlePacmanAnimationSpeedChange = (e) => {
        setPacmanAnimationSpeed(parseInt(e.target.value, 10));
    };

    const isInputEmpty = (value, placeholder) => {
        return value === null || value === undefined || value === '' || placeholder === 'Enter A Number!';
    };

    return (
        <div className='container'>
            <main className='main-section'>
                <Main name={name} />
            </main>
            <form className='form'>
                <div className='input-group'>
                    <h3>Email Mask Length</h3>
                    <input
                        className='input-area'
                        type='number'
                        placeholder='Enter A Number!'
                        value={emailMaskLength}
                        onChange={handleEmailMaskLengthChange}
                        required
                    />
                    {isInputEmpty(emailMaskLength) && (
                        <span className='required-message'> <span></span> Required</span>
                    )}
                </div>
                <div className='input-group'>
                    <h3>Matrix Columns Length</h3>
                    <input
                        className='input-area'
                        type='number'
                        placeholder='Enter A Number!'
                        value={matrixColumnsLength}
                        onChange={handleMatrixColumnsLengthChange}
                        required
                    />
                    {isInputEmpty(matrixColumnsLength) && (
                        <span className='required-message'> <span></span> Required</span>
                    )}
                </div>
                <div className='input-group'>
                    <h3>Matrix Rows Length</h3>
                    <input
                        className='input-area'
                        type='number'
                        placeholder='Enter A Number!'
                        value={matrixRowsLength}
                        onChange={handleMatrixRowsLengthChange}
                        required
                    />
                    {isInputEmpty(matrixRowsLength) && (
                        <span className='required-message'> <span></span> Required</span>
                    )}
                </div>
                <div className='input-group'>
                    <h3>Pacman Animation Speed</h3>
                    <input
                        className='input-area'
                        type='number'
                        placeholder='Enter A Number!'
                        value={pacmanAnimationSpeed}
                        onChange={handlePacmanAnimationSpeedChange}
                        required
                    />
                    {isInputEmpty(pacmanAnimationSpeed) && (
                        <span className='required-message'> <span></span> Required</span>
                    )}
                </div>
            </form>
        </div>
    );
};

export default Configuration;
