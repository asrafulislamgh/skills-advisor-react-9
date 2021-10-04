import React from "react";
import { Card, Button } from "react-bootstrap";
import Rating from "react-rating";
import "./Course.css";

const Course = (props) => {
  const {
    name,
    img,
    students,
    totalCourses,
    rating,
    instructor,
    cost,
    instructorImg,
  } = props.course;
  return (
    <div className="mb-5 rounded">
      <Card className="position-relative">
        <div className="inst-img-container">
          <Card.Img variant="top" src={img} />
          <Card.Img
            className="instructors-img"
            variant="top"
            src={instructorImg}
          />
        </div>
        <Card.Body>
          <Card.Title className="mt-3">{name}</Card.Title>
          <Card.Text>
            <p>
              Total Courses: <b>{totalCourses}</b>
            </p>
            <p>
              Student Enrolled: <b>{students}</b>
            </p>
            <p>
              Instructor: <b>{instructor}</b>
            </p>
            <p>
              Cost: <b>${cost}</b>
            </p>
            <p>
              Rating:
              <Rating
                className="rating"
                initialRating={rating}
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star fa-2x"
                readonly
              />
            </p>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="footer-button">
          <Button className="common-btn2">Details</Button>
          <Button className="text-right btn-dark">Enroll Now</Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Course;
