import React, { useEffect } from 'react';

export default function Main4() {
  useEffect(() => {
    const myWorkSection = document.getElementById('my-work');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.body.classList.add('transition-active');
        } else {
          document.body.classList.remove('transition-active');
        }
      });
    });

    observer.observe(myWorkSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  const projects = [
    {
      title: 'Student Management System',
      description: 'Streamline student records, attendance, and grades in a user-friendly management system.',
      link: '#', // Replace with your project link
    },
    {
      title: 'Portfolio Website',
      description: 'Explore my portfolio to see my latest projects and skills in web development and design.',
      link: '', // Replace with your project link
    },
    {
      title: 'Weather App',
      description: 'Get real-time weather updates with our user-friendly app, powered by a reliable API for accurate forecasts worldwide.',
      link: 'https://weatherapp-yashesh.netlify.app', // Replace with your project link
    },
    {
      title: 'To Do List App',
      description: 'Stay organized and boost productivity with our intuitive To-Do List App, designed to help you manage tasks effortlessly and track your progress.',
      link: 'https://todolist-yashesh.netlify.app', // Replace with your project link
    },
    {
      title: 'A Quiz Game',
      description: 'Test your knowledge and challenge your friends with our engaging Simple Quiz Game, featuring fun questions across various categories.',
      link: 'https://quizapp-yashesh.netlify.app', // Replace with your project link
    },
  ];

  return (
    <div className="my-work" id="my-work">
      <h1 className="heading">My <span className='ces'>Work</span></h1>
      <div className="projects">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2 className="project-title  ">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
          </div>         

        ))}

        
      </div>
    </div>
  );
}
