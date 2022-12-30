import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CompanyLogo from '../images/Transparent_Image_6.png'
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

function Footnote(props){
    return(
        <Box className='Footnote' id={props.id}>
            <Grid container justifyContent="center" alignItems="center">
                <Grid sx={{paddingRight: "40px"}}>
                    <img src={CompanyLogo} className="Logo" alt="Logo"/>
                </Grid>
                <Grid>
                    <Stack spacing={0} justifyContent="center" alignItems="center">
                        <Typography sx={{fontFamily: 'Roboto'}}>Email</Typography>
                        <a href={`mailto:info@southmoonsgate.com`} className="linkEmail">
                            <Typography sx={{fontFamily: 'Roboto', fontSize: "12px", color:"#DD9931"}}>info@southmoonsgate.com</Typography>
                        </a>
                        <Typography sx={{fontFamily: 'Roboto'}}>Location</Typography>
                        <Typography sx={{fontFamily: 'Roboto', fontSize: "12px", color:"#DD9931"}}>****</Typography>


                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footnote