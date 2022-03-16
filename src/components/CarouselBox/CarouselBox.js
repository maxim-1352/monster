import React from "react";
import "./CarouselBox.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./arrows.css";
import { Carousel } from "react-responsive-carousel";
import M1 from "../../assets/M1.png";
import M2 from "../../assets/M2.png";
import M3 from "../../assets/M3.png";

const CarouselBox = () => {
  return (
    <div className="container">
      <div className="carousel-root">
        <Carousel
          showStatus={false}
          transitionTime={1}
          infiniteLoop={true}
          showIndicators={false}
        >
          <div className="image">
            <span>797</span>
            <img src={M1} alt="alt" />
            <ul className="details">
              <li>Displacement</li>
              <li>803 cc</li>
              <li>Horse Power</li>
              <li>73 hp (54 kW)</li>
              <li>Torque</li>
              <li>67 Nm (49.0 lb-ft)</li>
              <li>Dry Weight</li>
              <li>175 Kg (386 lb)</li>
              <li>Seat Height</li>
              <li>805 mm (31.69 in)</li>
              <li>Safety</li>
              <li>ABS</li>
            </ul>
          </div>
          <div className="image">
            <span>821</span>
            <img src={M2} alt="alt" style={{ maxWidth: "1150px" }} />
            <ul className="details">
              <li>Displacement</li>
              <li>821 cc</li>
              <li>Horse Power</li>
              <li>109 hp (80 kW)</li>
              <li>Torque</li>
              <li>86 Nm (63 lb-ft)</li>
              <li>Dry Weight</li>
              <li>180.5 Kg (398 lb)</li>
              <li>Seat Height</li>
              <li>805 mm (31.69 in)</li>
              <li>Safety</li>
              <li>ABS</li>
            </ul>
          </div>
          <div className="image">
            <span>797</span>
            <img src={M3} alt="alt" />
            <ul className="details">
              <li>Displacement</li>
              <li>803 cc</li>
              <li>Horse Power</li>
              <li>73 hp (54 kW)</li>
              <li>Torque</li>
              <li>67 Nm (49.0 lb-ft)</li>
              <li>Dry Weight</li>
              <li>175 Kg (386 lb)</li>
              <li>Seat Height</li>
              <li>805 mm (31.69 in)</li>
              <li>Safety</li>
              <li>ABS</li>
            </ul>
          </div>
        </Carousel>
        <div className="carousel-box">
          <div className="text">
            Fresh vibes. <br /> <span> Sporty soul.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselBox;
