import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Course from "../Course/Course";
import "./CoursesHome.css";

const CoursesHome = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="container">
      <div className="text-center about-heading">
        <h2>
          Our <span>Courses</span>
        </h2>
        <p>The most demanding courses are here.</p>
      </div>
      <div>
        <Row xs={1} md={3} lg={3} className="g-4">
          {courses.map(
            (course) =>
              course.key < 4 && (
                <Col>
                  <Course key={course.key} course={course}></Course>
                </Col>
              )
          )}
        </Row>
      </div>
      <Link to="/courses">
        <Button className="common-btn">See All the Courses</Button>
      </Link>
    </div>
  );
};

export default CoursesHome;
