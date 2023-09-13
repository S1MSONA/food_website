import React from "react";
import "./home.css";
import homeImg from "../../../Asset/img/hamburger.jpg";

const Home = () => {
  return (
    <div className="container container-width">
      <div className="img">
        <img src={homeImg} alt="home" />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
        tempora molestiae necessitatibus ad accusantium, velit animi ipsum
        facere! Ex earum magnam quaerat, animi magni ipsa fugit cum voluptas
        repellendus dolor facere voluptate reprehenderit! Incidunt nam quidem
        repudiandae totam molestias sed a, in inventore autem dolorem possimus
        alias! Non, minus dolorem!
      </p>
    </div>
  );
};

export default Home;
