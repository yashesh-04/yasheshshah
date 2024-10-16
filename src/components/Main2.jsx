import React, { useEffect } from 'react';

export default function Main2() {

  useEffect(() => {
    const aboutSection = document.getElementById('about');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.body.classList.add('transition-active');
        } else {
          document.body.classList.remove('transition-active');
        }
      });
    });

    observer.observe(aboutSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="about" id='about'>
      <h1 className='heading'>About <span className='me'>Me</span></h1>
      <p className='para'>
        Hi, I'm Yashesh Shah, a passionate frontend web developer from Karnataka, India. With multiple years of experience in crafting engaging and interactive web experiences, I've honed my skills in creating responsive, user-friendly, and visually appealing interfaces.
        I am currently a part of <span className='TCS'>TATA CONSULTANCY SERVICES </span> as an <span className='ignite'>IGNITE TRAINEE</span>.
        <br />
        As a seasoned frontend developer, I've had the privilege of working on diverse projects, collaborating with talented individuals, and continuously learning from the ever-evolving web development landscape. My expertise spans HTML, CSS, JavaScript, and various frameworks and libraries, allowing me to bring ideas to life on the web.

        What Drives Me
        I'm driven by a passion for creating seamless user experiences, a keen eye for detail, and a relentless pursuit of innovation. I thrive in environments where creativity meets technical expertise, and I'm always eager to take on new challenges that push the boundaries of what's possible on the web.

        <br />
        Let's connect!
        <br />
        <div className="A">
          <a href="https://www.linkedin.com/in/yashesh-shah-1200bb260/" target="_blank">My LinkedIn</a>
          <a href="mailto:yasheshshah04@gmail.com" target="_blank">My E-mail</a>
          <a href="https://www.instagram.com/yashesh04/" target="_blank">My Instagram</a>
          <a href="https://x.com/yashesh_04" target="_blank">My Twitter</a>
        </div>
      </p>
    </div>
  );
}
