import React from "react";
import "./Footer.css";
import logo_footer from "../../img/logo-whtie.png";
import { FormControl, InputGroup } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div>
          <img className="logo-footer" src={logo_footer} alt="" />
          <h3 className="my-4">Do you need help with anything?</h3>
        </div>
        {/* subscriber */}
        <InputGroup className="mb-3 w-75 mx-auto">
          <FormControl
            placeholder="Email Address"
            aria-label="Email Address"
            aria-describedby="basic-addon2"
          />
          <Button className="common-btn" id="button-addon2">
            Subscribe
          </Button>
        </InputGroup>
      </div>
      <nav className="footer-nav">
        <ul>
          <Link to="/home">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/courses">
            <li>Courses</li>
          </Link>
          <Link to="/instructors">
            <li>Instructors</li>
          </Link>
          <Link to="/contact">
            <li>Contact Us</li>
          </Link>
        </ul>
      </nav>
      <nav className="footer-social-nav">
        <ul>
          <Link to="#">
            <li>
              <i className="fab fa-facebook-f"></i>
            </li>
          </Link>
          <Link to="#">
            <li>
              <i className="fab fa-twitter"></i>
            </li>
          </Link>
          <Link to="#">
            <li>
              <i className="fab fa-linkedin"></i>
            </li>
          </Link>
          <Link to="#">
            <li>
              <i className="fab fa-pinterest-p"></i>
            </li>
          </Link>
        </ul>
      </nav>
      <p className="copyright">All ©Copyright is reserved 2021</p>
    </div>
  );
};

export default Footer;
