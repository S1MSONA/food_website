import React from "react";
import "./Hero.css";

const Hero = (props) => {
  const { children } = props;
  return (
    <div className="container">
      <>{children}</>
    </div>
  );
};

export default Hero;
