import Button from "@restart/ui/esm/Button";
import React from "react";
import { Link } from "react-router-dom";
import img from "../../img/404.jpg";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="container">
      <div className="notFoundContainer">
        <img className="not-found-img" src={img} alt="" />
        <br />
        <Link to="/home">
          <Button className="common-btn">Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
