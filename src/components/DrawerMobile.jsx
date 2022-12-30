import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CompanyLogo from '../images/Transparent_Image_6.png'
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function DrawerMobile(props){
    const {footnoteScroll} = props

    const [drawer, setDrawer] = useState(false)
    
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }
    
        setDrawer({[anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : "50wh" }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Home', 'About', 'Services', 'Team', 'Contact'].map((text, index) => (
                    <ListItem key={text} onClick={footnoteScroll}>
                        <ListItemButton>
                            <Typography>
                                {text}
                            </Typography>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

        </Box>
    )

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
                                {['right'].map((anchor) => (
                                    <React.Fragment key={anchor}>
                                        <Button onClick={toggleDrawer(anchor, true)}>
                                            {<MenuIcon sx={{color: "black"}}/>}
                                        </Button>
                                        <Drawer
                                            anchor={anchor}
                                            open={drawer[anchor]}
                                            onClose={toggleDrawer(anchor, false)}
                                        >
                                            {list(anchor)}
                                        </Drawer>
                                    </React.Fragment>
                                ))}
                            </Grid>

                        </Grid>
                </Grid>
            </Box>
    )
}

export default DrawerMobile