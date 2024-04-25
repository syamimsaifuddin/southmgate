import { useState, useEffect } from 'react';
import Navbar from "./components/NavbarLarge"

import "./styles.css"
import Box from '@mui/material/Box';
import Footnote from './components/Footnote';
import MobileMenu from './components/MobileMenuPopOver';
import { Grid, Typography } from '@mui/material';
import LogoCarousel from './components/logoCarousel';
import SimpleSlider from './components/basicCarousel'


// LOGO IMPORT
import petronasLogo from './images/petronasLogo.png'
import hibiscusPetLogo from './images/hibiscusPetLogo.png'
import mpobLogo from './images/mpobLogo.png'
import mmhe from './images/mmheLogo.png'
import shellLogo from './images/shellLogo.png'
import weatherfordLogo from './images/weatherfordLogo.png'
import exxonMobilLogo from './images/exxonMobilLogo.png'

//SERVICE IMAGE IMPORT
import steelPipeline from './images/steelPipeline.jpg'
import labPic from './images/labPic.jpg'


const logos = [
    { name: 'ExxonMobil', url: exxonMobilLogo , sizePercent: 100},
    { name: 'Petronas', url: petronasLogo, sizePercent: 100 },
    { name: 'Hibiscus Petroleum', url: hibiscusPetLogo, sizePercent: 100 },
    { name: 'MPOB', url: mpobLogo , sizePercent: 70},
    { name: 'MMHE', url: mmhe, sizePercent: 100 },
    { name: 'Weatherford', url: weatherfordLogo, sizePercent: 100 },
    { name: 'LShell', url: shellLogo, sizePercent: 65 }
    // Add more logos as needed
  ];

const valve = [
    { name: 'pipe', url: steelPipeline , sizePercent: 100},
    { name: 'labpic', url: labPic, sizePercent: 100 },
    { name: 'pipe', url: steelPipeline , sizePercent: 100},
    { name: 'labpic', url: labPic, sizePercent: 100 },
    { name: 'pipe', url: steelPipeline , sizePercent: 100},
    { name: 'labpic', url: labPic, sizePercent: 100 },
    // Add more logos as needed
  ];

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
                            <Typography variant='h5' sx ={{marginBottom: '0px', letterSpacing: "15px", color: "#DD9331", fontSize: "20px", padding: "0 10% 0 10%", fontWeight: 'bolder'}}>SOUTH MOONSGATE</Typography>
                            <Typography sx={{color: "white", fontSize: "40px", fontWeight: 'bolder', letterSpacing: "-0.5px", padding: "0 10% 0 10%"}}>Market Leading Engineering Supplies and Services</Typography>
                            <Typography sx={{color: "white", fontSize: "25px", fontWeight: 'lighter', letterSpacing: "1px", marginTop: "70px", padding: "0 10% 0 10%"}}>Wide Range Engineering Services in Supplying, Installation, Testing and Maintenance of Valves and Accessories</Typography>
                        </Box>
                        
                        <Box id='about' sx={{backgroundColor: 'rgba(6, 15, 51, 0.9)', padding: "80px 0 80px 0", width: "100%", margin: "auto", marginBottom: "80px", justifyContent: "center", display: "flex", flexDirection: "column", textAlign: "center"}}>
                            <Typography variant='h5' sx ={{marginBottom: '0px', letterSpacing: "5px", color: "#DD9331", fontSize: "25px", padding: "0 10% 0 10%"}}>SOUTH MOONSGATE</Typography>
                            <Typography sx={{color: "white", fontSize: "40px", fontWeight: 'bolder', letterSpacing: "-1px", padding: "0 10% 0 10%"}}>About Us</Typography>

                            <Typography sx={{color: "white", fontSize: "20px", fontWeight: 'normal', letterSpacing: "0.5px", marginTop: "20px", padding: "0 10% 0 10%", textAlign: "justify"}}>
                                SOUTH MOONSGATE is a dynamic and innovative provider of comprehensive oil and gas equipment and services. Our core competency lies in valves, chemicals, 
                                and pipe fittings, which are tailored to cater to the specific 
                                needs of the industry. We believe in delivering exceptional quality 
                                products and services while prioritizing safety, innovation, and efficiency. 
                                As a part of our commitment to being a full-service provider, we also offer building maintenance and cleaning services to our clients, 
                                ensuring that their facilities remain in pristine condition at all times.
                            </Typography>

                            <Typography sx={{color: "white", fontSize: "20px", fontWeight: 'normal', letterSpacing: "0.5px", marginTop: "20px", padding: "0 10% 0 10%", textAlign: "justify"}}>
                                Our team of dedicated key personnel of combined practical experience in the industry and is very well versed with tight requirements of these industries. All our personnel are well trained and have the capabilities to achieve customer’s satisfactions.
                            </Typography>

                            <Typography sx={{color: "white", fontSize: "20px", fontWeight: 'normal', letterSpacing: "0.5px", marginTop: "20px", padding: "0 10% 0 10%", textAlign: "justify"}}>
                                In the meantime, we always make sure the best services and high expectation of customers satisfaction to achieve our main target. Lastly, to gain our customers confidences, we have to provide high quality product, reliable services and on-time delivery to gain successful in our company.
                            </Typography>
                        </Box>

                        <Box id='services' sx={{backgroundColor: "rgba(6, 15, 51, 0.9)", borderRadius: "20px", width: "95%", margin: "auto", display: "flex", flexDirection: "column", padding: "20px 0 30px 0", marginBottom: '60px'}}>
                            <Typography sx={{ color: "white", fontSize: "40px", fontWeight: "bolder", letterSpacing: "0.5px", padding: "0 25px 0 25px" }}>
                                SERVICES
                            </Typography>
                            <Box id='services' sx={{backgroundColor: "rgba(6, 15, 51, 0.0)", borderRadius: "20px", width: "70%", margin: "10px auto 10px auto", alignItems: "center", display: "flex", justifyContent:'center', padding: "10px 0 20px 0"}}>
                                <Grid container justifyContent="center" alignItems="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                    <Grid item xs={6}>
                                        <Typography sx={{ color: "white", fontSize: "40px", fontWeight: "bolder", letterSpacing: "0.5px", padding: "0 25px 0 25px"}}>
                                            VALVE
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <SimpleSlider logos={valve} show={2} />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Typography sx={{ color: "white", fontSize: "40px", fontWeight: "bolder", letterSpacing: "0.5px", padding: "0 25px 0 25px"}}>
                                            PIPE
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <SimpleSlider logos={valve} show={2} />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Typography sx={{ color: "white", fontSize: "40px", fontWeight: "bolder", letterSpacing: "0.5px", padding: "0 25px 0 25px"}}>
                                            CHEMICAL
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <SimpleSlider logos={valve} show={2} />
                                    </Grid>

                                </Grid>
                            </Box>
                        </Box>

                        <Box id='client' sx={{backgroundColor: "rgba(213, 205, 209, 0.4)", borderRadius: "20px", width: "95%", margin: "auto", display: "flex", flexDirection: "column", padding: "20px 0 30px 0"}}>
                            <Typography sx={{color: "black", fontSize: "40px", fontWeight: 'bolder', letterSpacing: "0.5px", padding: "0 25px 25px 25px", textAlign: "justify", alignSelf: "center"}}>
                                CLIENTS
                            </Typography>
                            <Box sx={{backgroundColor: "rgba(213, 205, 209, 0)", borderRadius: "20px", width: "95%", margin: "auto", display: "flex", flexDirection: "column", padding: "40px 0 40px 0"}}>
                                <LogoCarousel logos={logos}/>
                            </Box>
                        </Box>
                        
                        
                </Box>
                : <Box className="Box">
                    {console.log('hello')}
                        <MobileMenu/>
                        <Box id='home' className='mainTitle' sx={{backgroundColor: "#DD9331", height: "800px", width: "100%", margin: "auto", alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column"}}>
                        <Typography variant='h5' sx ={{marginBottom: '0px', letterSpacing: "15px", color: "#DD9331", fontSize: "20px", padding: "0 25px 0 25px", fontWeight: 'bolder'}}>SOUTH MOONSGATE</Typography>
                            <Typography sx={{color: "white", fontSize: "40px", fontWeight: 'bolder', letterSpacing: "-0.5px", padding: "0 25px 0 25px"}}>Market Leading Engineering Supplies and Services</Typography>
                            <Typography sx={{color: "white", fontSize: "25px", fontWeight: 'lighter', letterSpacing: "1px", marginTop: "70px", padding: "0 25px 0 25px"}}>Wide Range Engineering Services in Supplying, Installation, Testing and Maintenance of Valves and Accessories</Typography>
                        </Box>

                        <Box id='about' sx={{backgroundColor: 'rgba(6, 15, 51, 0.9)', padding: "80px 0 80px 0", width: "100%", margin: "auto", marginBottom: "80px", justifyContent: "center", display: "flex", flexDirection: "column", textAlign: "center"}}>
                            <Typography variant='h5' sx ={{marginBottom: '0px', letterSpacing: "5px", color: "#DD9331", fontSize: "25px", padding: "0 10% 0 10%"}}>SOUTH MOONSGATE</Typography>
                            <Typography sx={{color: "white", fontSize: "40px", fontWeight: 'bolder', letterSpacing: "-1px", padding: "0 10% 0 10%"}}>About Us</Typography>

                            <Typography sx={{color: "white", fontSize: "20px", fontWeight: 'normal', letterSpacing: "0.5px", marginTop: "20px", padding: "0 10% 0 10%", textAlign: "justify"}}>
                                SOUTH MOONSGATE is a dynamic and innovative provider of comprehensive oil and gas equipment and services. Our core competency lies in valves, chemicals, 
                                and pipe fittings, which are tailored to cater to the specific 
                                needs of the industry. We believe in delivering exceptional quality 
                                products and services while prioritizing safety, innovation, and efficiency. 
                                As a part of our commitment to being a full-service provider, we also offer building maintenance and cleaning services to our clients, 
                                ensuring that their facilities remain in pristine condition at all times.
                            </Typography>

                            <Typography sx={{color: "white", fontSize: "20px", fontWeight: 'normal', letterSpacing: "0.5px", marginTop: "20px", padding: "0 10% 0 10%", textAlign: "justify"}}>
                                Our team of dedicated key personnel of combined practical experience in the industry and is very well versed with tight requirements of these industries. All our personnel are well trained and have the capabilities to achieve customer’s satisfactions.
                            </Typography>

                            <Typography sx={{color: "white", fontSize: "20px", fontWeight: 'normal', letterSpacing: "0.5px", marginTop: "20px", padding: "0 10% 0 10%", textAlign: "justify"}}>
                                In the meantime, we always make sure the best services and high expectation of customers satisfaction to achieve our main target. Lastly, to gain our customers confidences, we have to provide high quality product, reliable services and on-time delivery to gain successful in our company.
                            </Typography>
                        </Box>

                        <Box id='services' sx={{backgroundColor: "rgba(6, 15, 51, 0.9)", borderRadius: "20px", width: "95%", margin: "auto", display: "flex", flexDirection: "column", padding: "20px 0 30px 0", marginBottom: '60px'}}>
                            <Typography sx={{ color: "white", fontSize: "40px", fontWeight: "bolder", letterSpacing: "0.5px", padding: "0 25px 0 25px" }}>
                                SERVICES
                            </Typography>
                            <Box id='services' sx={{backgroundColor: "rgba(6, 15, 51, 0.0)", borderRadius: "20px", width: "70%", margin: "10px auto 10px auto", alignItems: "center", display: "flex", justifyContent:'center', padding: "10px 0 20px 0"}}>
                                <Grid container direction='row' justifyContent="center" alignItems="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                    <Grid item xs={12}>
                                        <Typography sx={{ color: "white", fontSize: "40px", fontWeight: "bolder", letterSpacing: "0.5px", padding: "0 25px 0 25px"}}>
                                            VALVE
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <SimpleSlider logos={valve} show={1}/>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Typography sx={{ color: "white", fontSize: "40px", fontWeight: "bolder", letterSpacing: "0.5px", padding: "0 25px 0 25px"}}>
                                            PIPE
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <SimpleSlider logos={valve} show={1}/>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Typography sx={{ color: "white", fontSize: "40px", fontWeight: "bolder", letterSpacing: "0.5px", padding: "0 25px 0 25px"}}>
                                            CHEMICAL
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <SimpleSlider logos={valve} show={1}/>
                                    </Grid>

                                </Grid>
                            </Box>
                        </Box>

                        <Box id='client' sx={{backgroundColor: "rgba(213, 205, 209, 0.4)", borderRadius: "20px", width: "95%", margin: "auto", display: "flex", flexDirection: "column", padding: "20px 0 30px 0"}}>
                            <Typography sx={{color: "black", fontSize: "40px", fontWeight: 'bolder', letterSpacing: "0.5px", padding: "0 25px 25px 25px", textAlign: "justify", alignSelf: "center"}}>
                                CLIENTS
                            </Typography>
                            <Box sx={{backgroundColor: "rgba(213, 205, 209, 0)", borderRadius: "20px", width: "95%", margin: "auto", display: "flex", flexDirection: "column", padding: "40px 0 40px 0"}}>
                                <LogoCarousel logos={logos}/>
                            </Box>
                        </Box>
                
                    </Box>
            }
            <Footnote id="contact"/>
        </>
    )
}

export default App