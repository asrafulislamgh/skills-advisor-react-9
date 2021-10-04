import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../img/logo.png";
import { Nav, Navbar } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";

const Header = () => {
  return (
    <div>
      {/* <div className="header-container">
        <div className="header-area container">
          <div>
            <img className="logo_img" src={logo} alt="" />
          </div>
          <nav className="nav">
            <ul>
              <Link to="/home">
                <li>Home</li>
              </Link>
              <Link to="/courses">
                <li>Courses</li>
              </Link>
              <Link to="/instructor">
                <li>Instructor</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
            </ul>
          </nav>
        </div>
      </div> */}
      <div className="header-bottom-area">
        <Navbar className="nav-border" bg="white" fixed="top" expand="lg">
          <div className="container">
            <Navbar.Brand>
              <Link to="/home">
                <img
                  style={{ height: "80px", width: "100%" }}
                  src={logo}
                  alt=""
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mr-auto my-2 my-lg-0 nav"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link>
                  <NavLink
                    activeStyle={{
                      color: "black",
                      borderBottom: "2px solid #ffa500",
                    }}
                    className="nav-item"
                    to="/home"
                  >
                    Home
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink
                    activeStyle={{
                      color: "black",
                      borderBottom: "2px solid #ffa500",
                    }}
                    className="nav-item"
                    to="/about"
                  >
                    About
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink
                    activeStyle={{
                      color: "black",
                      borderBottom: "2px solid #ffa500",
                    }}
                    className="nav-item"
                    to="/courses"
                  >
                    Courses
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink
                    activeStyle={{
                      color: "black",
                      borderBottom: "2px solid #ffa500",
                    }}
                    className="nav-item"
                    to="/instructors"
                  >
                    Instructors
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink
                    activeStyle={{
                      color: "black",
                      borderBottom: "2px solid #ffa500",
                    }}
                    className="nav-item"
                    to="/contact"
                  >
                    Contact Us
                  </NavLink>
                </Nav.Link>
              </Nav>
              <Button className="common-btn top-btn">Sign Up</Button>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
