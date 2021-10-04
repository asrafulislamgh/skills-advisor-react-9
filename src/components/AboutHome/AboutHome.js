import React from "react";
import "./AboutHome.css";
import about_us from "../../img/about-us.jpg";
import Button from "@restart/ui/esm/Button";
import { Link } from "react-router-dom";

const AboutHome = () => {
  return (
    <div className="container">
      <div className="text-center about-heading">
        <h2>
          Welcome to <span>Skill Advisor</span>
        </h2>
        <p>The most effective learning platform in the world!</p>
      </div>
      <div className="about-container">
        <img src={about_us} alt="" />
        <div className="about-text">
          <h3>We will try to make you explore yourself</h3>
          <p>
            We understand that each of our students is a uniquely talented
            individual. Within our supportive community, students are
            facilitated to develop positive relationships and grab the
            opportunity to realize their individual potential to the full.
          </p>
          <Link to="/about">
            <Button className="common-btn">Learn More</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;