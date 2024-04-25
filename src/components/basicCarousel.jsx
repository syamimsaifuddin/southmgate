import React from "react";
import Slider from "react-slick";
import Box from '@mui/material/Box';


const SimpleSlider = ({ logos, show }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: show,
    slidesToScroll: show,
    autoplay: true,
  };
  return (
    <div className="slider-container">
        
      <Slider {...settings}>
      {logos.map((logo, index) => (
        <img 
          key= {index}
          alt={logo.name}
          src={logo.url}
          className="logoShowcase" 
        />
      ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
