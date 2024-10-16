import React from "react";

export default function Main3(){
    return (
        <div className="services" id="services">
          <h1 className="heading">Servi<span className="ces">ces</span></h1>
          <p className="para">
            As a skilled web developer, I offer a range of services to help bring your ideas to life and enhance your online presence:
          </p>
          <ul className="services-list">
            <li>Custom Website Development</li>
            <li>Responsive Web Design</li>
            <li>UI/UX Design</li>
            <li>Website Maintenance & Support</li>
            <li>SEO Optimization</li>
            <li>E-commerce Solutions</li>
          </ul>
          <p className="para">
            Each service is tailored to meet the unique needs of my clients, ensuring a high-quality experience and results that align with your goals. 
            <br />
            Feel free to <a href="mailto:yasheshshah04@gmail.com" className="contact-link">contact me</a> for more information or to discuss your project!
          </p>
        </div>
      );
}