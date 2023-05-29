import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CompanyLogo from '../images/Transparent_Image_6.png'
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { Stack } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';

function MobileMenu(props){

    const {footnoteScroll} = props
    const [open, isOpen] = useState(false)

    const openMenu = () => {
        isOpen(!open)
    }

    function OpenCloseMenu() {
        var element = document.getElementById("menuPopoverClose");
        element.classList.toggle("menuPopoverOpen");
    }

    return (  
        <Box position='static'
        sx={{paddingLeft: "10px", 
            paddingRight: "10px", 
            backgroundColor: "rgba(255, 255, 255, 0)", 
            fontFamily: "Roboto",
            marginTop: "10px", 
            marginBottom: "10px"
            }}>

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
                    columnSpacing={1} ss
                    sx={{ order: { xs: 2, sm: 2 }, width:"auto" }}>

                    <Grid>
                        <Button>
                            {<MenuIcon sx={{color: "black"}} onClick={openMenu}/>}
                        </Button>
                    </Grid>

                </Grid>
            </Grid>
            {/* style={{display: open ? "block" : "none"}} */}
            { open ? 
                <Box className='menu'>
                    <Stack spacing={2}>
                        <Button>
                                {<CloseIcon sx={{color: "black"}} onClick={openMenu}/>}
                        </Button>
                        <a href="#home" style={{textDecoration: "none", color: "black"}} onClick={openMenu}>Home</a>
                        <a href="#about" style={{textDecoration: "none", color: "black"}} onClick={openMenu}>About</a>
                        <a href="#" style={{textDecoration: "none", color: "black"}}  onClick={openMenu}>Services</a>
                        <a href="#" style={{textDecoration: "none", color: "black"}}  onClick={openMenu}>Team</a>
                        <a href="#contact" style={{textDecoration: "none", color: "black"}} onClick={openMenu}>Contact</a>
                    </Stack>
                </Box>
                : null
            }
        
        </Box>
    )
}

export default MobileMenu