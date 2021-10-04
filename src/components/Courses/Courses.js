import React, { useEffect, useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import Course from "../Course/Course";
import "./Courses.css";

const Courses = () => {
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
          {courses.map((course) => (
            <Col>
              {" "}
              <Course key={course.key} course={course}></Course>{" "}
            </Col>
          ))}
        </Row>
      </div>
      <Button className="common-btn mb-5 text-dark">See All the Courses</Button>
    </div>
  );
};

export default Courses;
