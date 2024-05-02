import React from "react";
import Slider from "react-slick";
import Box from '@mui/material/Box';
import { Height } from "@mui/icons-material";


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
        <Box className='container-image'>
          <img 
            key= {index}
            alt={logo.name}
            src={logo.url}
            className="logoShowcase"
            style={{
              width: "100%", // Adjust as needed
              // maxWidth: '300px', // Maximum width for scaling
              // padding: '20px 50px 20px 50px'
              // objectFit: 'cover'
            }}
          />
        </Box>
      ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
