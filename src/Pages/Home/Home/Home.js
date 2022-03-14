import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import HowWeWork from "../HowWeWork/HowWeWork";
import Slider from "../Slider/Slider";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Navigation></Navigation>
      <Slider></Slider>
      <HowWeWork></HowWeWork>
      <Footer></Footer>
    </div>
  );
};

export default Home;
