import React from "react";
import "./PageTItle.css";
const PageTitle = ({ title }) => {
  return (
    <div className="page-title">
      <h2>{title}</h2>
    </div>
  );
};

export default PageTitle;
