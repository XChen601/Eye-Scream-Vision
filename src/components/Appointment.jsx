import { Box, Grid, Card, Typography, Stack, Button, Divider } from '@mui/material';
import doctor from '../images/doctor1.png'
import doctor2 from '../images/doctor2.png'

function Appointment() {
    return (
        <>
            <Grid container direction='row' justifyContent='center' p={8} spacing={4}>
                <Grid item xs={12} sm={12} md={4}>
                    <Box px="10%">
                        <Box sx={{backgroundImage: `url(${doctor})`, width:'100%', height:'100%',  backgroundSize: 'cover', minHeight: '400px'}}></Box>
                    </Box>
                    
                </Grid>
                
                <Grid item xs={12} sm={12} md={8} >
                    <Typography variant='h4'>Dr. Sarah Lee</Typography>
                    <Typography variant='h6' color='secondary' pt={0}>Optometrists</Typography>
                    <Typography>Dr. Sarah Lee received her Doctor of Optometry degree from the University of California, Berkeley School of Optometry.
                        She completed her clinical training at the Veterans Affairs Hospital in Fresno, where she gained experience in diagnosing and 
                        treating a wide range of eye conditions, including glaucoma, diabetic retinopathy, and age-related macular degeneration. She has 
                        a special interest in pediatric optometry and enjoys working with children to help them achieve optimal vision and eye health.</Typography>
                    <Button>Book Appointment</Button>
                </Grid>
            </Grid>
            <Divider variant="inset" sx={{ bgcolor: "secondary.light" }}/>
            <Grid container direction='row' justifyContent='center' p={8} spacing={4}>
                <Grid item xs={12} sm={12} md={4}>
                    <Box px="10%">
                        <Box sx={{backgroundImage: `url(${doctor2})`, width:'100%', height:'100%',  backgroundSize: 'cover', minHeight: '400px'}}></Box>
                    </Box>
                    
                </Grid>
                
                <Grid item xs={12} sm={12} md={8} pr={5}>
                    <Typography variant='h4'>Dr. James Smith</Typography>
                    <Typography variant='h6' color='secondary' pt={0}>Optometrists</Typography>
                    <Typography>Dr. James Smith earned his Doctor of Optometry degree from the Southern California College of Optometry. 
                        He completed his residency in ocular disease at the Veterans Affairs Hospital in Long Beach, where he gained extensive 
                        experience in the diagnosis and management of complex eye conditions. He is committed to providing exceptional care to 
                        his patients and staying up-to-date with the latest advancements in optometry.</Typography>
                    <Button>Book Appointment</Button>
                </Grid>
            </Grid>
        </>
    );
}

export default Appointment