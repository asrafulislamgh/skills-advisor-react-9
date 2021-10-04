import React, { useEffect, useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import Instructor from "../Instructor/Instructor";
import "./Instructors.css";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("./instructors.json")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  });
  return (
    <div className="container">
      <div className="text-center about-heading">
        <h2>
          Our <span>Instructors</span>
        </h2>
        <p>The most experienced instructors are here.</p>
      </div>
      <div>
        <Row xs={1} md={3} lg={3} className="g-4">
          {instructors.map((instructor) => (
            <Col>
              <Instructor
                key={instructor.key}
                instructor={instructor}
              ></Instructor>
            </Col>
          ))}
        </Row>
      </div>
      <Button className="common-btn my-5 text-dark">
        See All the Instructors
      </Button>
    </div>
  );
};

export default Instructors;
