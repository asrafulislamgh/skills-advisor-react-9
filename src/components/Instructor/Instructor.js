import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Instructor.css";

const Instructor = (props) => {
  const { name, totalCourses, students, img } = props.instructor;
  return (
    <div>
      <Card>
        <div className="img-container">
          <Card.Img variant="top" className="instructor-img" src={img} />
        </div>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p>
              Total Courses: <b>{totalCourses}</b>
            </p>
            <p>
              Student Enrolled: <b>{students}</b>
            </p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button className="common-btn2">See Courses</Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Instructor;
