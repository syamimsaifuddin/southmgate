import { useState, useEffect } from 'react';
import Navbar from "./components/NavbarLarge"
import "./styles.css"
import Box from '@mui/material/Box';
import Footnote from './components/Footnote';
import MobileMenu from './components/MobileMenuPopOver';

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
                        <Box sx={{backgroundColor: "#DD9331", height: "600px", width: "80%", borderRadius: "20px", margin: "auto", marginBottom: "20px"}}>
                        </Box>
                        <Box sx={{backgroundColor: "#DD9331", height: "600px", width: "80%", borderRadius: "20px", margin: "auto"}}>
                        </Box>
                        
                </Box>
                : <Box className="Box">
                        <MobileMenu/>
                        <Box sx={{backgroundColor: "#DD9331", height: "800px", width: "100%", borderRadius: "20px", margin: "auto", marginBottom: "20px"}}>
                        </Box>
                        <Box sx={{backgroundColor: "#DD9331", height: "800px", width: "100%", borderRadius: "20px", margin: "auto"}}>
                        </Box>
                
                    </Box>
            }
            <Footnote id="contact"/>
        </>
    )
}

export default App