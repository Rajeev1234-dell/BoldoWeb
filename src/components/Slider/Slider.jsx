import React from "react";
import "./Slider.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.png";

function Slider() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const sliderImage = [
    {
      img: slider1,
    },
    {
      img: slider2,
    },
    {
      img: slider1,
    },
    {
      img: slider2,
    },
    {
      img: slider1,
    },
    {
      img: slider2,
    },
  ];

  return (
    <div>
      <div className="slider">
        <Carousel
          // className="slider"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          partialVisible={true}
          responsive={responsive}
          infinite={true}
          keyBoardControl={false}
        >
          {sliderImage?.map((item) => (
            <div>
              <img src={slider1} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Slider;
