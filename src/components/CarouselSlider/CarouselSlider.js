import { Carousel } from "react-bootstrap";
import React from "react";
import slider_1 from "../../img/slider-1.jpg";
import slider_2 from "../../img/slider-2.png";
import slider_3 from "../../img/slider-3.jpg";
import slider_4 from "../../img/slider-4.jpg";
import "./CarouselSlider.css";

const CarouselSlider = () => {
  return (
    <div>
      <Carousel className="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={slider_1} alt="First slide" />
          <Carousel.Caption className="carousel-caption">
            <div>
              <h1>Learn With Us</h1>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider_2} alt="Second slide" />
          <Carousel.Caption>
            <h1>Learn Machine Language to Interact with them</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider_3} alt="Third slide" />
          <Carousel.Caption>
            <h1>Make yourself Smarter</h1>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider_4} alt="Third slide" />
          <Carousel.Caption>
            <h1>Make your thinking power out of the box</h1>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
