import React from "react";
import "./style.css";

const DefualtLayout = (props) => {
  const { children } = props;
  return (
    <div className="container">
      <>{children}</>
    </div>
  );
};

export default DefualtLayout;
