import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CompanyLogo from '../images/Transparent_Image_6.png'
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

function Footnote(){

    return(
        <Box className='Footnote' >
            <Grid container justifyContent="center" alignItems="center">
                <Grid sx={{paddingRight: "40px"}}>
                    <img src={CompanyLogo} className="Logo" alt="Logo"/>
                </Grid>
                <Grid>
                    <Stack spacing={0} justifyContent="center" alignItems="center">
                        <Typography sx={{fontFamily: 'Roboto'}}>Email</Typography>
                        <Typography sx={{fontFamily: 'Roboto', fontSize: "12px", color:"#DD9931"}}>nabil@onlyfans.com</Typography>
                        <Typography sx={{fontFamily: 'Roboto'}}>Location</Typography>
                        <Typography sx={{fontFamily: 'Roboto', fontSize: "12px", color:"#DD9931"}}>Sunway Mentari</Typography>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footnote