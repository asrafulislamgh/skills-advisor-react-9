import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../img/logo.png";
import { Nav, Navbar } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";

const Header = () => {
  return (
    <div>
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
              <div className="top-btn">
                <Button className="common-btn mx-2">
                  <i class="fas fa-sign-in-alt"></i>
                </Button>
                <Button className="common-btn sign-btn">
                  <i class="fas fa-user-plus"></i>
                </Button>
              </div>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
