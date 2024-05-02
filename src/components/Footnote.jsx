import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CompanyLogo from '../images/Transparent_Image_6.png'
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

function Footnote(props){
    return(
        <Box className='Footnote' id={props.id}>
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={12} md={3} style={{ display: "grid", placeItems: "center", height: "100%", marginBottom: '20px' }}>
                    <img src={CompanyLogo} className="LogoFooter" alt="Logo"/>
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                    <Typography sx={{color: "black", fontSize: "12px", fontWeight: 'normal', letterSpacing: "0.5px", marginTop: "20px", padding: "0 15% 0 15%", textAlign: "justify"}}>ABOUT US</Typography>
                    <Typography sx={{color: "#DD9931", fontSize: "12px", fontWeight: 'normal', letterSpacing: "0.5px", marginTop: "20px", padding: "0 15% 0 15%", textAlign: "justify", marginBottom: '20px'}}>
                        South Moonsgate is your trusted industrial supplier and distributor in Malaysia. We provide an extensive array of valves, chemicals, pipe fittings, and more, all focusing on safety, durability, and innovations.
                    </Typography>
                    
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                    <Stack spacing={0} justifyContent="center" alignItems="center">
                        <Typography sx={{fontFamily: 'Roboto'}}>Email</Typography>
                        <a href={`mailto:info@southmoonsgate.com`} className="linkEmail">
                            <Typography sx={{fontFamily: 'Roboto', fontSize: "12px", color:"#DD9931"}}>info@southmoonsgate.com</Typography>
                        </a>

                        <Typography sx={{fontFamily: 'Roboto', marginTop: "10px"}}>Location</Typography>
                        <Typography sx={{fontFamily: 'Roboto', fontSize: "12px", color:"#DD9931"}}>G43, Jalan PP 5E</Typography>
                        <Typography sx={{fontFamily: 'Roboto', fontSize: "12px", color:"#DD9931"}}>Taman Putra Perdana</Typography>
                        <Typography sx={{fontFamily: 'Roboto', fontSize: "12px", color:"#DD9931"}}>Puchong</Typography>
                        <Typography sx={{fontFamily: 'Roboto', fontSize: "12px", color:"#DD9931"}}>Selangor Darul Ehsan</Typography>


                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footnote