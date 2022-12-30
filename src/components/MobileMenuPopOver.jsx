import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CompanyLogo from '../images/Transparent_Image_6.png'
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from '@mui/material';

function MobileMenu(props){

    const {footnoteScroll} = props
    const [open, isOpen] = useState(false)

    return (  
        <Box position='static'
        sx={{paddingLeft: "10px", 
            paddingRight: "10px", 
            backgroundColor: "rgba(255, 255, 255, 0)", 
            fontFamily: "Roboto",
            marginTop: "10px", 
            marginBottom: "10px"}}>

            <Grid 
                xs={12}
                container
                justifyContent="space-between"
                alignItems="center"
                flexDirection={{sm: 'row'}}>

                <Grid sx={{ order: { xs: 1, sm: 1 } }}>
                    <Box className='ImgCrop'>
                        <img src={CompanyLogo} className="Logo" alt="Logo"/>
                    </Box>
                </Grid>

                <Grid 
                    container 
                    columnSpacing={1} 
                    sx={{ order: { xs: 2, sm: 2 }, width:"auto" }}>

                    <Grid>
                        <Button>
                            {<MenuIcon sx={{color: "black"}}/>}
                        </Button>
                    </Grid>

                </Grid>
            </Grid>
        
        </Box>
    )
}

export default MobileMenu