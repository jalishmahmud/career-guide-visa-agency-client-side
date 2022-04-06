import React from "react";
import FeaturedUniversity from "../FeaturedUniversity/FeaturedUniversity";
import HowWeWork from "../HowWeWork/HowWeWork";
import SelectedCountry from "../SelectedCountry/SelectedCountry";
import Slider from "../Slider/Slider";
import UpcomingEvents from "../UpcomingEvents/UpcomingEvents";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Slider></Slider>
      <SelectedCountry></SelectedCountry>
      <HowWeWork></HowWeWork>
      <UpcomingEvents></UpcomingEvents>
      <FeaturedUniversity></FeaturedUniversity>
    </div>
  );
};

export default Home;
