import React, { useEffect, useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Instructor from "../Instructor/Instructor";
import "./InstructorHome.css";

const InstructorHome = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("./instructors.json")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  return (
    <div className="container mb-5">
      <div className="text-center about-heading">
        <h2>
          Our <span>Instructors</span>
        </h2>
        <p>The most experienced instructors are here.</p>
      </div>
      <div>
        <Row xs={1} md={3} lg={3} className="g-4">
          {instructors.map(
            (instructor) =>
              instructor.key < 4 && (
                <Col>
                  <Instructor
                    key={instructor.key}
                    instructor={instructor}
                  ></Instructor>{" "}
                </Col>
              )
          )}
        </Row>
      </div>
      <Link to="/instructors">
        <Button className="common-btn my-5">See All the Instructors</Button>
      </Link>
    </div>
  );
};

export default InstructorHome;
