import React from "react";
import "./style.css";

const DefualtLayout = (props) => {
  const { children } = props;
  return (
    <div className="container">
      <h1>{children}</h1>
    </div>
  );
};

export default DefualtLayout;
