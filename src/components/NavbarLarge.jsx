import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CompanyLogo from '../images/Transparent_Image_6.png'
import Typography from '@mui/material/Typography';

function Navbar(props){

    
    return (
            <Box 
                sx={{paddingLeft: "100px", 
                    paddingRight: "100px", 
                    backgroundColor: "rgba(255, 255, 255, 0)", 
                    fontFamily: "Roboto",
                    margin: "10px auto 10px auto",
                    width: "80%"}}>

                <Grid 
                    xs={12}
                    container
                    justifyContent="space-between"
                    alignItems="center"
                    flexDirection={{ xs: 'column', sm: 'row' }}>

                        <Grid sx={{ order: { xs: 1, sm: 1 } }}>
                            <img src={CompanyLogo} className="Logo" alt="Logo"/>
                        </Grid>

                        <Grid 
                            container 
                            columnSpacing={1} 
                            sx={{ order: { xs: 2, sm: 2 }, width:"auto" }}>

                            <Grid>
                                <Typography sx={{marginRight:"15px"}} className="NavObject">
                                    Home
                                </Typography>
                            </Grid>

                            <Grid>
                                <Typography sx={{marginRight:"15px"}} className="NavObject">
                                    About
                                </Typography>
                            </Grid>

                            <Grid>
                                <Typography sx={{marginRight:"15px"}} className="NavObject">
                                    Services
                                </Typography>
                            </Grid>

                            <Grid>
                                <Typography sx={{marginRight:"15px"}} className="NavObject">
                                    Team
                                </Typography>
                            </Grid>
                            
                            <Grid>
                                <Typography sx={{marginRight:"15px"}} className="NavObject">
                                    Contact
                                </Typography>
                            </Grid>
                        </Grid>
                </Grid>
            </Box>
    )
}

export default Navbar