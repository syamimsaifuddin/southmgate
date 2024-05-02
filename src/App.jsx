import { useState, useEffect } from 'react';
import Navbar from "./components/NavbarLarge"

import "./styles.css"
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Footnote from './components/Footnote';
import MobileMenu from './components/MobileMenuPopOver';
import { Grid, Typography } from '@mui/material';
import LogoCarousel from './components/logoCarousel';
import SimpleSlider from './components/basicCarousel'
import Showcase from './components/showcase'


// LOGO IMPORT
import petronasLogo from './images/petronasLogo.png'
import hibiscusPetLogo from './images/hibiscusPetLogo.png'
import mpobLogo from './images/mpobLogo.png'
import mmhe from './images/mmheLogo.png'
import shellLogo from './images/shellLogo.png'
import weatherfordLogo from './images/weatherfordLogo.png'
import exxonMobilLogo from './images/exxonMobilLogo.png'
import LOVLogo from './images/LOVLogo.png'

//SERVICE IMAGE IMPORT VALVE
import valveResize1 from './images/valveResize1.jpg'
import valveResize2 from './images/valveResize2.jpg'
import valveResize3 from './images/valveResize3.jpg'

//SERVICE IMAGE IMPORT PIPE
import pipeResize1 from './images/pipeResize1.jpg'
import pipeResize2 from './images/pipeResize2.jpg'
import pipeResize3 from './images/pipeResize3.jpg'


const logos = [
    { name: 'ExxonMobil', url: exxonMobilLogo , sizePercent: 100},
    { name: 'Petronas', url: petronasLogo, sizePercent: 90 },
    { name: 'Hibiscus Petroleum', url: hibiscusPetLogo, sizePercent: 80 },
    { name: 'MPOB', url: mpobLogo , sizePercent: 60},
    { name: 'MMHE', url: mmhe, sizePercent: 90 },
    { name: 'Weatherford', url: weatherfordLogo, sizePercent: 80 },
    { name: 'Shell', url: shellLogo, sizePercent: 50 }
    // Add more logos as needed
  ];

const valve = [
    { name: 'Valve 1', url: valveResize1 , sizePercent: 100},
    { name: 'Valve 2', url: valveResize2 , sizePercent: 100},
    { name: 'Valve 3', url: valveResize3 , sizePercent: 100},
  ];

  const pipe = [
    // { name: 'pipefitting 1', url: pipefitting1 , sizePercent: 100},
    { name: 'pipeResize1', url: pipeResize1 , sizePercent: 100},
    { name: 'pipeResize2', url: pipeResize2 , sizePercent: 100},
    { name: 'pipeResize3', url: pipeResize3 , sizePercent: 100},
    // { name: 'pipefitting 4', url: pipefitting4 , sizePercent: 100},
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
                            <Typography sx={{color: "white", fontSize: "40px", fontWeight: 'bolder', letterSpacing: "-0.5px", padding: "0 10% 0 10%"}}>Powering Efficiency in Engineering Services</Typography>
                            <Typography sx={{color: "white", fontSize: "25px", fontWeight: 'lighter', letterSpacing: "1px", marginTop: "50px", padding: "0 10% 0 10%"}}>South Moonsgate is your trusted industrial supplier and distributor in Malaysia. We provide an extensive array of valves, chemicals, pipe fittings, and more, all focusing on safety, durability, and innovations.</Typography>
                        </Box>
                        
                        <Box id='about' sx={{backgroundColor: 'rgba(6, 15, 51, 0.9)', padding: "80px 0 80px 0", width: "100%", margin: "auto", marginBottom: "80px", justifyContent: "center", display: "flex", flexDirection: "column", textAlign: "center"}}>
                            <Typography variant='h5' sx ={{marginBottom: '0px', letterSpacing: "5px", color: "#DD9331", fontSize: "25px", padding: "0 10% 0 10%"}}>SOUTH MOONSGATE</Typography>
                            <Typography sx={{color: "white", fontSize: "40px", fontWeight: 'bolder', letterSpacing: "2px", padding: "0 10% 0 10%"}}>About Us</Typography>

                            <Typography sx={{color: "white", fontSize: "20px", fontWeight: 'normal', letterSpacing: "0.5px", marginTop: "20px", padding: "0 10% 0 10%", textAlign: "justify"}}>
                                Founded in 2022, South Moonsgate Sdn. Bhd. is a modern, cutting-edge provider of top oil and gas equipment suppliers and services in Malaysia with comprehensive expertise in the chemicals, valves, and pipe fittings industry and tech industry.  We provide a carefully curated selection that is customized to satisfy your needs, ensuring that your businesses attain operational excellence. 
                            </Typography>

                            <Typography sx={{color: "white", fontSize: "20px", fontWeight: 'normal', letterSpacing: "0.5px", marginTop: "20px", padding: "0 10% 0 10%", textAlign: "justify"}}>
                                What’s more; South Moonsgate Malaysia is going to expand its operations in the software and web development industry. Our organization is primed to play a key role in the digital evolution of the energy industry, with a vision to create solutions that elevate efficiency and sustainability in oil and gas operations.
                                </Typography>

                            {/* <Typography sx={{color: "white", fontSize: "20px", fontWeight: 'normal', letterSpacing: "0.5px", marginTop: "20px", padding: "0 10% 0 10%", textAlign: "justify"}}>
                                In the meantime, we always make sure the best services and high expectation of customers satisfaction to achieve our main target. Lastly, to gain our customers confidences, we have to provide high quality product, reliable services and on-time delivery to gain successful in our company.
                            </Typography> */}
                        </Box>

                        <Box id='whyChoose' sx={{backgroundColor: 'rgba(6, 15, 51, 0.9)', padding: "20px 0 30px 0", width: "95%", borderRadius:'20px', margin: "auto", marginBottom: "80px", justifyContent: "center", display: "flex", flexDirection: "column", textAlign: "center"}}>
                            <Typography sx={{color: "white", fontSize: "40px", fontWeight: 'bolder', letterSpacing: "2px", padding: "0 25px 0 25px"}}>WHY CHOOSE SOUTH MOONSGATE?</Typography>
                            <hr style={{width: '5%'}}></hr>
                            
                            <Typography sx={{color: "white", fontSize: "20px", fontWeight: 'bolder', letterSpacing: "0.5px", marginTop: "40px", padding: "0 10% 0 10%", textAlign: "justify"}}>
                                Reliable and On-Time Delivery
                            </Typography>
                            <Typography sx={{color: "white", fontSize: "20px", fontWeight: 'normal', letterSpacing: "0.5px", marginTop: "0px", padding: "0 10% 0 10%", textAlign: "justify"}}>
                                Since the oil and gas sector places a high value on timeliness, our goal is to ensure that every product and service is delivered on time, with an emphasis on logistical operations optimization.
                            </Typography>

                            <Typography sx={{color: "white", fontSize: "20px", fontWeight: 'bolder', letterSpacing: "0.5px", marginTop: "40px", padding: "0 10% 0 10%", textAlign: "justify"}}>
                                Competitive Pricing
                            </Typography>
                            <Typography sx={{color: "white", fontSize: "20px", fontWeight: 'normal', letterSpacing: "0.5px", marginTop: "0px", padding: "0 10% 0 10%", textAlign: "justify"}}>
                                We establish a balance between quality and cost-effectiveness, offering products and amenities that meet strict requirements while remaining reasonably priced.
                            </Typography>

                            <Typography sx={{color: "white", fontSize: "20px", fontWeight: 'bolder', letterSpacing: "0.5px", marginTop: "40px", padding: "0 10% 0 10%", textAlign: "justify"}}>
                                Commitment to Sustainability
                            </Typography>
                            <Typography sx={{color: "white", fontSize: "20px", fontWeight: 'normal', letterSpacing: "0.5px", marginTop: "0px", padding: "0 10% 0 10%", textAlign: "justify"}}>
                                Our goal is to operate in an environmentally sustainable manner and provide eco-friendly solutions.                            
                            </Typography>
                        </Box>

                        <Box id='product' sx={{backgroundColor: "rgba(6, 15, 51, 0.9)", borderRadius: "20px", width: "95%", margin: "auto", display: "flex", flexDirection: "column", padding: "20px 0 30px 0", marginBottom: '60px'}}>
                            <Typography sx={{ color: "white", fontSize: "40px", fontWeight: "bolder", letterSpacing: "0.5px", padding: "0 25px 0 25px" }}>
                                PRODUCT
                            </Typography>
                            <hr style={{width: '5%'}}></hr>
                            <Box sx={{backgroundColor: "rgba(6, 15, 51, 0.0)", borderRadius: "20px", width: "70%", margin: "10px auto 10px auto", alignItems: "center", display: "flex", justifyContent:'center', padding: "10px 0 20px 0"}}>
                                <Grid container justifyContent="center" alignItems="center" rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                    <Grid item xs={6}>
                                        <Typography sx={{ color: "white", fontSize: "40px", fontWeight: "bolder", letterSpacing: "0.5px", padding: "0 25px 0 25px"}}>
                                            VALVE
                                        </Typography>
                                        <Typography sx={{ color: "white", fontSize: "20px", letterSpacing: "0.5px", padding: "0 25px 0 25px"}}>
                                        We provide an extensive collection of valves that accommodate various pressure, temperature, and flow rate requirements of your oil and gas operations.
                                        </Typography>
                                        <hr style={{width: '70%'}}></hr>
                                        <img key= {1} alt={'LOV'} src={LOVLogo} className="logoShowcase" style={{width: '200px'}}/>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <SimpleSlider logos={valve} show={2} />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Typography sx={{ color: "white", fontSize: "40px", fontWeight: "bolder", letterSpacing: "0.5px", padding: "0 25px 0 25px"}}>
                                            PIPE
                                        </Typography>
                                        <Typography sx={{ color: "white", fontSize: "20px", letterSpacing: "0.5px", padding: "0 25px 0 25px"}}>
                                            We ensure a smooth transition into your current set up with our diverse assortment of pipes and fittings.
                                        </Typography>
                                        <hr style={{width: '70%'}}></hr>
                                        {/* <img key= {1} alt={'LOV'} src={LOVLogo} className="logoShowcase" style={{width: '200px'}}/> */}
                                    </Grid>
                                    <Grid item xs={6}>
                                        <SimpleSlider logos={pipe} show={2} />
                                    </Grid>

                                    {/* <Grid item xs={6}>
                                        <Typography sx={{ color: "white", fontSize: "40px", fontWeight: "bolder", letterSpacing: "0.5px", padding: "0 25px 0 25px"}}>
                                            CHEMICAL
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <SimpleSlider logos={valve} show={2} />
                                    </Grid> */}

                                </Grid>
                            </Box>
                        </Box>

                        <Box id='client' sx={{backgroundColor: "rgba(213, 205, 209, 0.4)", borderRadius: "20px", width: "95%", margin: "auto", display: "flex", flexDirection: "column", padding: "20px 0 30px 0"}}>
                            <Typography sx={{color: "black", fontSize: "40px", fontWeight: 'bolder', letterSpacing: "0.5px", padding: "0 25px 0 25px", textAlign: "justify", alignSelf: "center"}}>
                                CLIENTS
                            </Typography>
                            <hr style={{width: '5%'}}></hr>
                            <Box sx={{backgroundColor: "rgba(213, 205, 209, 0)", borderRadius: "20px", width: "95%", margin: "auto", display: "flex", flexDirection: "column", padding: "10px 0 40px 0"}}>
                                <LogoCarousel logos={logos}/>
                            </Box>
                        </Box>
                        
                        
                </Box>
                : <Box className="Box">
                    {console.log('hello')}
                        <MobileMenu/>
                        <Box id='home' className='mainTitle' sx={{backgroundColor: "#DD9331", height: "800px", width: "100%", margin: "auto", alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column"}}>
                        <Typography variant='h5' sx ={{marginBottom: '0px', letterSpacing: "15px", color: "#DD9331", fontSize: "20px", padding: "0 25px 0 25px", fontWeight: 'bolder'}}>SOUTH MOONSGATE</Typography>
                            <Typography sx={{color: "white", fontSize: "40px", fontWeight: 'bolder', letterSpacing: "-0.5px", padding: "0 25px 0 25px"}}>Powering Efficiency in Engineering Services</Typography>
                            <Typography sx={{color: "white", fontSize: "25px", fontWeight: 'lighter', letterSpacing: "1px", marginTop: "70px", padding: "0 25px 0 25px"}}>
                                South Moonsgate is your trusted industrial supplier and distributor in Malaysia. We provide an extensive array of valves, chemicals, pipe fittings, and more, all focusing on safety, durability, and innovations.
                            </Typography>
                        </Box>

                        <Box id='about' sx={{backgroundColor: 'rgba(6, 15, 51, 0.9)', padding: "80px 0 80px 0", width: "100%", margin: "auto", marginBottom: "80px", justifyContent: "center", display: "flex", flexDirection: "column", textAlign: "center"}}>
                            <Typography variant='h5' sx ={{marginBottom: '0px', letterSpacing: "5px", color: "#DD9331", fontSize: "25px", padding: "0 10% 0 10%"}}>SOUTH MOONSGATE</Typography>
                            <Typography sx={{color: "white", fontSize: "40px", fontWeight: 'bolder', letterSpacing: "-1px", padding: "0 10% 0 10%"}}>About Us</Typography>

                            <Typography sx={{color: "white", fontSize: "20px", fontWeight: 'normal', letterSpacing: "0.5px", marginTop: "20px", padding: "0 10% 0 10%", textAlign: "justify"}}>
                                Founded in 2022, South Moonsgate Sdn. Bhd. is a modern, cutting-edge provider of top oil and gas equipment suppliers and services in Malaysia with comprehensive expertise in the chemicals, valves, and pipe fittings industry and tech industry.  We provide a carefully curated selection that is customized to satisfy your needs, ensuring that your businesses attain operational excellence. 
                            </Typography>

                            <Typography sx={{color: "white", fontSize: "20px", fontWeight: 'normal', letterSpacing: "0.5px", marginTop: "20px", padding: "0 10% 0 10%", textAlign: "justify"}}>
                                What’s more; South Moonsgate Malaysia is going to expand its operations in the software and web development industry. Our organization is primed to play a key role in the digital evolution of the energy industry, with a vision to create solutions that elevate efficiency and sustainability in oil and gas operations.
                            </Typography>

                        </Box>

                        <Box id='whyChoose' sx={{backgroundColor: 'rgba(6, 15, 51, 0.9)', padding: "20px 0 30px 0", width: "95%", borderRadius:'20px', margin: "auto", marginBottom: "80px", justifyContent: "center", display: "flex", flexDirection: "column", textAlign: "center"}}>
                            <Typography sx={{color: "white", fontSize: "40px", fontWeight: 'bolder', letterSpacing: "2px", padding: "0 25px 0 25px"}}>WHY CHOOSE SOUTH MOONSGATE?</Typography>
                            <hr style={{width: '30%'}}></hr>
                            
                            <Typography sx={{color: "white", fontSize: "20px", fontWeight: 'bolder', letterSpacing: "0.5px", marginTop: "40px", padding: "0 10% 0 10%", textAlign: "justify"}}>
                                Reliable and On-Time Delivery
                            </Typography>
                            <Typography sx={{color: "white", fontSize: "20px", fontWeight: 'normal', letterSpacing: "0.5px", marginTop: "0px", padding: "0 10% 0 10%", textAlign: "justify"}}>
                                Since the oil and gas sector places a high value on timeliness, our goal is to ensure that every product and service is delivered on time, with an emphasis on logistical operations optimization.
                            </Typography>

                            <Typography sx={{color: "white", fontSize: "20px", fontWeight: 'bolder', letterSpacing: "0.5px", marginTop: "40px", padding: "0 10% 0 10%", textAlign: "justify"}}>
                                Competitive Pricing
                            </Typography>
                            <Typography sx={{color: "white", fontSize: "20px", fontWeight: 'normal', letterSpacing: "0.5px", marginTop: "0px", padding: "0 10% 0 10%", textAlign: "justify"}}>
                                We establish a balance between quality and cost-effectiveness, offering products and amenities that meet strict requirements while remaining reasonably priced.
                            </Typography>

                            <Typography sx={{color: "white", fontSize: "20px", fontWeight: 'bolder', letterSpacing: "0.5px", marginTop: "40px", padding: "0 10% 0 10%", textAlign: "justify"}}>
                                Commitment to Sustainability
                            </Typography>
                            <Typography sx={{color: "white", fontSize: "20px", fontWeight: 'normal', letterSpacing: "0.5px", marginTop: "0px", padding: "0 10% 0 10%", textAlign: "justify"}}>
                                Our goal is to operate in an environmentally sustainable manner and provide eco-friendly solutions.                            
                            </Typography>
                        </Box>

                        <Box id='product' sx={{backgroundColor: "rgba(6, 15, 51, 0.9)", borderRadius: "20px", width: "95%", margin: "auto", display: "flex", flexDirection: "column", padding: "20px 0 30px 0", marginBottom: '60px'}}>
                            <Typography sx={{ color: "white", fontSize: "40px", fontWeight: "bolder", letterSpacing: "0.5px", padding: "0 25px 0 25px" }}>
                                PRODUCT
                            </Typography>
                            <hr style={{width: '30%'}}></hr>
                            <Box id='product' sx={{backgroundColor: "rgba(6, 15, 51, 0.0)", borderRadius: "20px", width: "70%", margin: "10px auto 10px auto", alignItems: "center", display: "flex", justifyContent:'center', padding: "10px 0 20px 0"}}>
                                <Grid container direction='row' justifyContent="center" alignItems="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                    <Grid item xs={12}>
                                        <Typography sx={{ color: "white", fontSize: "40px", fontWeight: "bolder", letterSpacing: "0.5px", padding: "0 25px 0 25px"}}>
                                            VALVE
                                        </Typography>
                                        <Typography sx={{ color: "white", fontSize: "20px", letterSpacing: "0.5px", padding: "0 25px 0 25px"}}>
                                            We provide an extensive collection of valves that accommodate various pressure, temperature, and flow rate requirements of your oil and gas operations.
                                        </Typography>
                                        <hr style={{width: '70%'}}></hr>
                                        <img key= {1} alt={'LOV'} src={LOVLogo} className="logoShowcase" style={{width: '200px'}}/>
                                    </Grid>
                                    <Grid item xs={12} marginBottom={'40px'}>
                                        <SimpleSlider logos={valve} show={1} />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Typography sx={{ color: "white", fontSize: "40px", fontWeight: "bolder", letterSpacing: "0.5px", padding: "0 25px 0 25px"}}>
                                            PIPE
                                        </Typography>
                                        <Typography sx={{ color: "white", fontSize: "20px", letterSpacing: "0.5px", padding: "0 25px 0 25px"}}>
                                            We ensure a smooth transition into your current set up with our diverse assortment of pipes and fittings.
                                        </Typography>
                                        <hr style={{width: '70%'}}></hr>
                                        {/* <img key= {1} alt={'LOV'} src={LOVLogo} className="logoShowcase" style={{width: '200px'}}/> */}
                                    </Grid>
                                    <Grid item xs={12} marginBottom={'40px'}>
                                        <SimpleSlider logos={pipe} show={1} />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>

                        <Box id='client' sx={{backgroundColor: "rgba(213, 205, 209, 0.4)", borderRadius: "20px", width: "95%", margin: "auto", display: "flex", flexDirection: "column", padding: "20px 0 30px 0"}}>
                            <Typography sx={{color: "black", fontSize: "40px", fontWeight: 'bolder', letterSpacing: "0.5px", padding: "0 25px 25px 25px", textAlign: "justify", alignSelf: "center"}}>
                                CLIENTS
                            </Typography>
                            <Box sx={{backgroundColor: "rgba(213, 205, 209, 0)", borderRadius: "20px", width: "95%", margin: "auto", display: "flex", flexDirection: "column", padding: "10px 0 40px 0"}}>
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