import React from 'react'
import './Pacman.css'
import Main from '../../Main/Main'

const Pacman = ({ name }) => {
    return (
        <div className='container'>
            <Main name={name} />

            <div className='pacman'>
                <div className="pacman-eye"></div>
                <div className="pacman-mouth"></div>
                <button className='ready-btn'>
                    Ready
                </button>
            </div>
        </div>
    )
}

export default Pacman