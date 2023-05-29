import { useState, useEffect } from 'react';
import Navbar from "./components/NavbarLarge"
import "./styles.css"
import Box from '@mui/material/Box';
import Footnote from './components/Footnote';
import MobileMenu from './components/MobileMenuPopOver';
import { Grid, Typography } from '@mui/material';

function App(){

    const [windowSize, setWindowSize] = useState(getWindowSize())

    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
    }

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <>
            { windowSize.innerWidth > 750 
                ? 
                <Box className="Box">
                        <Navbar/>
                        <Box id='home' className='mainTitle' sx={{backgroundColor: "#DD9331", height: "600px", width: "100%", margin: "auto", alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column"}}>
                            <Typography variant='h5' sx ={{marginBottom: '0px', letterSpacing: "15px", color: "#DD9331", fontSize: "20px", padding: "0 25px 0 25px", fontWeight: 'bolder'}}>SOUTH MOONSGATE</Typography>
                            <Typography sx={{color: "white", fontSize: "40px", fontWeight: 'bolder', letterSpacing: "-0.5px", padding: "0 25px 0 25px"}}>Market Leading Engineering Supplies and Services</Typography>
                            <Typography sx={{color: "white", fontSize: "25px", fontWeight: 'lighter', letterSpacing: "1px", marginTop: "70px", padding: "0 25px 0 25px"}}>Wide Range Engineering Services in Supplying, Installation, Testing and Maintenance of Valves and Accessories</Typography>
                        </Box>
                        
                        <Box id='about' sx={{backgroundColor: 'rgba(6, 15, 51, 0.9)', padding: "80px 0 80px 0", width: "100%", margin: "auto", marginBottom: "80px", justifyContent: "center", display: "flex", flexDirection: "column", textAlign: "left"}}>
                            <Typography variant='h5' sx ={{marginBottom: '0px', letterSpacing: "5px", color: "#DD9331", fontSize: "20px", padding: "0 25px 0 25px"}}>SOUTH MOONSGATE</Typography>
                            <Typography sx={{color: "white", fontSize: "40px", fontWeight: 'bolder', letterSpacing: "-1px", padding: "0 25px 0 25px"}}>About Us</Typography>

                            <Typography sx={{color: "white", fontSize: "15px", fontWeight: 'normal', letterSpacing: "0.5px", marginTop: "20px", padding: "0 25px 0 25px", textAlign: "justify"}}>
                                SOUTH MOONSGATE is a dynamic and innovative provider of comprehensive oil and gas equipment and services. Our core competency lies in valves, chemicals, 
                                and pipe fittings, which are tailored to cater to the specific 
                                needs of the industry. We believe in delivering exceptional quality 
                                products and services while prioritizing safety, innovation, and efficiency. 
                                As a part of our commitment to being a full-service provider, we also offer building maintenance and cleaning services to our clients, 
                                ensuring that their facilities remain in pristine condition at all times.
                            </Typography>

                            <Typography sx={{color: "white", fontSize: "15px", fontWeight: 'normal', letterSpacing: "0.5px", marginTop: "20px", padding: "0 25px 0 25px", textAlign: "justify"}}>
                                Our team of dedicated key personnel of combined practical experience in the industry and is very well versed with tight requirements of these industries. All our personnel are well trained and have the capabilities to achieve customer’s satisfactions.
                            </Typography>

                            <Typography sx={{color: "white", fontSize: "15px", fontWeight: 'normal', letterSpacing: "0.5px", marginTop: "20px", padding: "0 25px 0 25px", textAlign: "justify"}}>
                                In the meantime, we always make sure the best services and high expectation of customers satisfaction to achieve our main target. Lastly, to gain our customers confidences, we have to provide high quality product, reliable services and on-time delivery to gain successful in our company.
                            </Typography>
                        </Box>

                        <Box id='home' sx={{backgroundColor: "rgba(6, 15, 51, 0.9)", borderRadius: "20px", width: "95%", margin: "auto", alignItems: "center", display: "flex", flexDirection: "column", padding: "10px 0 20px 0"}}>
                            <Typography sx={{color: "white", fontSize: "40px", fontWeight: 'bolder', letterSpacing: "0.5px", padding: "0 25px 0 25px", textAlign: "justify", alignSelf: "center"}}>
                                MISSION & VISION
                            </Typography>
                            <Grid 
                                xs={12}
                                container
                                justifyContent="center"
                                spacing={5}
                                alignItems="center"
                                flexDirection={{ xs: 'column', sm: 'row' }}
                            >
                                <Grid item>
                                    <Box sx={{backgroundColor: "white", width: "400px", height: '300px', borderRadius: "20px"}}>
                                    </Box>
                                </Grid>

                                <Grid item>
                                    <Box sx={{backgroundColor: "white", width: "400px", height: '300px', borderRadius: "20px"}}>
                                    </Box>
                                </Grid>

                            </Grid>
                        </Box>
                        
                </Box>
                : <Box className="Box">
                        <MobileMenu/>
                        <Box id='home' className='mainTitle' sx={{backgroundColor: "#DD9331", height: "800px", width: "100%", margin: "auto", alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column"}}>
                        <Typography variant='h5' sx ={{marginBottom: '0px', letterSpacing: "15px", color: "#DD9331", fontSize: "20px", padding: "0 25px 0 25px", fontWeight: 'bolder'}}>SOUTH MOONSGATE</Typography>
                            <Typography sx={{color: "white", fontSize: "40px", fontWeight: 'bolder', letterSpacing: "-0.5px", padding: "0 25px 0 25px"}}>Market Leading Engineering Supplies and Services</Typography>
                            <Typography sx={{color: "white", fontSize: "25px", fontWeight: 'lighter', letterSpacing: "1px", marginTop: "70px", padding: "0 25px 0 25px"}}>Wide Range Engineering Services in Supplying, Installation, Testing and Maintenance of Valves and Accessories</Typography>
                        </Box>
                        <Box id= 'about' sx={{backgroundColor: 'rgba(6, 15, 51, 0.9)', height: "300px", width: "100%", margin: "auto", marginBottom: "20px", justifyContent: "center", display: "flex", flexDirection: "column", textAlign: "left"}}>
                            <Typography variant='h5' sx ={{marginBottom: '0px', letterSpacing: "5px", color: "#DD9331", fontSize: "20px", padding: "0 25px 0 25px"}}>SOUTH MOONSGATE</Typography>
                            <Typography sx={{color: "white", fontSize: "40px", fontWeight: 'bolder', letterSpacing: "-1px", padding: "0 25px 0 25px"}}>Learn More About Us</Typography>
                            <Typography sx={{color: "white", fontSize: "25px", fontWeight: 'lighter', letterSpacing: "-1px", marginTop: "70px", padding: "0 25px 0 25px"}}>Wide Range Engineering Services in Supplying, Installation, Testing and Maintenance of Valves and Accessories</Typography>
                        </Box>
                
                    </Box>
            }
            <Footnote id="contact"/>
        </>
    )
}

export default App