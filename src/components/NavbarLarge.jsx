import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CompanyLogo from '../images/Transparent_Image_6.png'

function Navbar(props){
    const {footnoteScroll} = props
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
                                <a href="#" className='navBarText' >Home</a>
                            </Grid>

                            <Grid>
                                <a href="#" className='navBarText'>About</a>
                            </Grid>

                            <Grid>
                                <a href="#" className='navBarText'>Services</a>
                            </Grid>

                            <Grid>
                                <a href="#" className='navBarText'>Team</a>
                            </Grid>
                            
                            <Grid>
                                <a href="#contact" className='navBarText'>Contact</a>
                            </Grid>
                        </Grid>
                </Grid>
            </Box>
    )
}

export default Navbar