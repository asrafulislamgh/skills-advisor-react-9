import React from "react";
import { Card, Button } from "react-bootstrap";

const Instructor = (props) => {
  const { name, totalCourses, students, img } = props.instructor;
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p>
              Total Courses: <b>{students}</b>
            </p>
            <p>
              Student Enrolled: <b>{totalCourses}</b>
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
