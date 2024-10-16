import React from 'react'
import '/src/assets/profile.jpg'

export default function Main1(){
    return(
        <div className='main'>
            <img className="profile" src="src/assets/profile.jpg" alt="" />
            <h2 className='intro'>Hi! I'm Yashesh Shah 👋</h2>
            <h1 className='designation'>frontend web developer<br/>based in India.</h1>
            <p className='description'>I am a frontend developer from Karnataka, India with multiple <br/>years of experience.</p>
            <button className='contact-me' onClick={() => window.location.href = 'mailto:yasheshshah04@gmail.com'}>Contact Me →</button>

            <button className='my-resume' onClick={() => window.open("https://drive.google.com/file/d/1QNd4VJBujS3ti7FlfsI8_UPpMfWTBg77/view?usp=sharing", "_blank")}>My Resume 📥</button>

        </div>      
    )
}