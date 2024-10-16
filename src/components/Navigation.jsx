import React from 'react'
import '/src/assets/dark-mode.svg'


export default function Navigation(){
    return(
        <div className="navigation">
            <h1 className='navigation-logo'>yashesh.</h1>
            <nav>
                <ul>
                    <a href="#"><li>Home</li></a>
                    <a href="#about"><li>About Me</li></a>
                    <a href="#services"><li>Services</li></a>
                    <a href="#my-work"><li>My Work</li></a>
                    <a href="#contact-me-id"><li>Contact Me</li></a>
                </ul>
            </nav>
            {/* <img className='dark-mode' src="src/assets/dark-mode.svg" alt="" /> */}
            <button className='contact-button' onClick={() => window.location.href = 'mailto:yasheshshah04@gmail.com'}>Contact ↗</button>
        </div>
    )
}