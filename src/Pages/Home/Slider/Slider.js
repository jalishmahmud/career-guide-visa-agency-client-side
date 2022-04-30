import React from "react";
import { Carousel } from "react-bootstrap";
import australia from "../../../images/au-banner.jpg";
import canada from "../../../images/canada-banner.jpg";
import europe from "../../../images/europe-banner.jpg";
import malaysia from "../../../images/malaysia-banner.jpg";
import unitedKingdom from "../../../images/uk-banner.jpg";
import america from "../../../images/usa-banner.jpg";
const sliders = [
  { id: 1, img: america },
  { id: 2, img: canada },
  { id: 3, img: unitedKingdom },
  { id: 4, img: australia },
  { id: 5, img: europe },
  { id: 6, img: malaysia },
];
const Slider = () => {
  return (
    <Carousel fade>
      {sliders.map((slider) => (
        <Carousel.Item key={slider.id}>
          <img className="d-block w-100" src={slider.img} alt={slider.id} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
