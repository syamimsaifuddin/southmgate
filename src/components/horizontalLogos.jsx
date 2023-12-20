import React from 'react';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import { Grid, Typography } from '@mui/material';

const horizontalLogos = ({ logos }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  return (
    
    <Slider {...settings}>
      {logos.map((logo, index) => (
        <div key={index} style={{ textAlign: 'center' }}>
          <img
            src={logo.url}
            alt={logo.name}
            style={{
              width: '100px', // Adjust as needed
              height: '100px', // Maintain aspect ratio
              maxWidth: '150px', // Maximum width for scaling
            }}
          />
          {/* <Typography variant="caption">{logo.name}</Typography> */}
        </div>
      ))}
    </Slider>
  );
};

export default horizontalLogos;
