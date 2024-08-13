import React from 'react';
import { Link } from "react-router-dom";
import Header from "./Header";
import "./styles/about.css";

const About = () => {
 
  return (
    <>
      <Header />
      <div className="parallax-container">
        <div className="parallax slide1">
          <div className="content">
            {/* <div className="box"></div> */}
            <h2>Welcome to Our Project Management Application</h2>
            <p>Our application is designed to help team leaders and employees manage their projects and track performance effectively. Whether you are overseeing multiple projects or focusing on individual tasks, our comprehensive tools and features are here to support you every step of the way..</p>
          </div>
        </div>
        <div className="parallax slide2">
          <div className="content">
            <h1>ABOUT US</h1>
            {/*<p>
            Our application is designed to help team leaders and employees manage their projects and track performance effectively. Whether you are overseeing multiple projects or focusing on individual tasks, our comprehensive tools and features are here to support you every step of the way..
  </p>*/}
            <p>
            Team leaders can benefit greatly from our application by accessing detailed reports on a daily, weekly, or monthly basis. These reports provide in-depth insights into project progress, task completion, and overall performance metrics of their team members. This level of detail helps in making informed decisions, identifying areas for improvement, and ensuring that projects stay on track.
            </p>
            <p>
            Employees, on the other hand, can utilize the self-reporting feature to view their own performance metrics. This transparency allows employees to stay informed about their contributions, understand their strengths, and recognize areas where they can improve. By having access to their own reports, employees are empowered to take ownership of their performance and growth within the organization.
            </p>
            <p>
            Our user-friendly interface ensures that both team leaders and employees can navigate the application with ease. The intuitive design minimizes the learning curve and allows users to focus on their tasks without being bogged down by complex navigation or functionality. Real-time updates keep everyone informed with the most current information, allowing for prompt adjustments and decisions.
            </p>
            {/*<Link to="/profile" className="btn btn-primary">Report Here</Link>*/}
          </div>
        </div>
        {/* <div className="parallax slide3">
          <div className="content">
            <p>Happy to Help</p>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default About;
