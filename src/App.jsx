import { useState, useEffect, useRef } from 'react';
import Navbar from "./components/NavbarLarge"
import "./styles.css"
import Box from '@mui/material/Box';
import DrawerMobile from './components/DrawerMobile';

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
                        <Box sx={{backgroundColor: "#DD9331", height: "600px", width: "80%", borderRadius: "20px", margin: "auto"}}>
                        </Box>
                        
                </Box>
                : <Box className="Box">
                        <DrawerMobile/>
                        <Box sx={{backgroundColor: "#DD9331", height: "800px", width: "100%", borderRadius: "20px", margin: "auto"}}>
                    </Box>
                
        </Box>
            }
            <h1>hello</h1>
        </>
    )
}

export default App