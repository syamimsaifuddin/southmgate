import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Box from '@mui/material/Box';
import "../styles.css"

import { Grid, Typography } from '@mui/material';

const Showcase = ({ imageSrc, descriptionTitle, description, position }) => {
    return (
        <Box className={`showcase ${position}`}>
            <Box className="image">
                <img src={imageSrc} alt="Showcase" />
            </Box>
            <Box className='descriptionBox'>
                <Box className="descriptionTitle">
                    {descriptionTitle}
                </Box>
                <Box className="description">
                    {description}
                </Box>
            </Box>
      </Box>
    );
  }

export default Showcase;
