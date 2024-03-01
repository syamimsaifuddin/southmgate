import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Box from '@mui/material/Box';
import "../styles.css"

import { Grid, Typography } from '@mui/material';

const LogoCarousel = ({ logos }) => {
  const settings = {
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 1,
    speed: 1500,
    autoplay: true,
    variableWidth: true,
    className: 'innerSlickDiv',
    arrows: false
  };

  return (
    <Slider {...settings}>
      {logos.map((logo, index) => (
        <Box key={index}>
          <img 
            key= {index}
            alt={logo.name}
            src={logo.url}
            className="logoShowcase" 
            style={{
              width: (logo.sizePercent/100)*250 +'px', // Adjust as needed
              maxWidth: '250px', // Maximum width for scaling
              padding: '20px 50px 20px 50px'
            }}
          />
        </Box>
      ))}
    </Slider>
  );
};

export default LogoCarousel;
