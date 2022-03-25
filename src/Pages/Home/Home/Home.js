import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import HowWeWork from "../HowWeWork/HowWeWork";
import SelectedCountry from "../SelectedCountry/SelectedCountry";
import Slider from "../Slider/Slider";
import UpcomingEvents from "../UpcomingEvents/UpcomingEvents";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Navigation></Navigation>
      <Slider></Slider>
      <SelectedCountry></SelectedCountry>
      <HowWeWork></HowWeWork>
      <UpcomingEvents></UpcomingEvents>
      <Footer></Footer>
    </div>
  );
};

export default Home;
