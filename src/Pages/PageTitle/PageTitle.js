import React from "react";
import "./PageTItle.css";
const PageTitle = ({ title }) => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <div className="page-title">
      <h2>{title}</h2>
    </div>
  );
};

export default PageTitle;
