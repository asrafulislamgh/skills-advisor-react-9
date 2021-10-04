import React from "react";
import AboutHome from "../AboutHome/AboutHome";
import CarouselSlider from "../CarouselSlider/CarouselSlider";
import CoursesHome from "../CoursesHome/CoursesHome";
import InstructorHome from "../InstructorHome/InstructorHome";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <CarouselSlider></CarouselSlider>
      <div className="progress-container">
        <div className="progress-items container">
          <div>
            <i className="progress-icon fas fa-trophy"></i>
            <h3 className="icon-heading">93%</h3>
            <p>Passing To job Market</p>
          </div>
          <div>
            <i className="progress-icon fas fa-user-graduate"></i>
            <h3 className="icon-heading">53k</h3>
            <p>Enrolled Students</p>
          </div>
          <div>
            <i className="progress-icon far fa-smile"></i>
            <h3 className="icon-heading">49k</h3>
            <p>High Satisfation</p>
          </div>
          <div>
            <i className="progress-icon fas fa-chalkboard-teacher"></i>
            <h3 className="icon-heading">1230</h3>
            <p>Instructors</p>
          </div>
        </div>
      </div>
      <AboutHome></AboutHome>
      <CoursesHome></CoursesHome>
      <InstructorHome></InstructorHome>
    </div>
  );
};

export default Home;
