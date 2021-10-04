import React from "react";
import About from "../About/About";
import CarouselSlider from "../CarouselSlider/CarouselSlider";
import Courses from "../Courses/Courses";

const Home = () => {
  return (
    <div>
      <CarouselSlider></CarouselSlider>
      <About></About>
      <Courses></Courses>
    </div>
  );
};

export default Home;
