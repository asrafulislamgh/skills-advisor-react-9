import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Course.css";

const Course = (props) => {
  const { name, img, students, totalCourses, rating } = props.course;
  return (
    <div className="mb-5">
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p>
              Total Courses: <b>{totalCourses}</b>
            </p>
            <p>
              Student Enrolled: <b>{students}</b>
            </p>
            <p>
              Rating: <b>{rating}</b>
            </p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button className="common-btn2">See all Courses</Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Course;
