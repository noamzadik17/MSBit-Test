import React from 'react'
import './Main.css'

const Main = ({ name }) => {
    return (
        <div className='container'>
            <h1 className='main-title'>
                {name}
            </h1>
            <p className='main-paragraph'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis repellendus obcaecati molestiae nostrum, voluptate reiciendis odit facere quibusdam, omnis totam sit at. Labore voluptatum tempore tenetur consequuntur voluptatibus soluta asperiores, fugiat consectetur illo, aperiam aut debitis, quasi ipsa et facilis optio! Sit earum dolorum, deserunt rem laborum tempore reiciendis officiis?
            </p>
        </div>
    )
}

export default Main