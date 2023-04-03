import { Box, CardContent, Card, Typography, Stack, Button, Divider } from '@mui/material';
import image from '../images/man_with_glasses.jpg'
import ApartmentIcon from '@mui/icons-material/Apartment';
import PhoneIcon from '@mui/icons-material/Phone';

function Homepage() {
  return (
    <>
        <Box sx={{backgroundImage: `url(${image})`,
            display: 'flex',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '40vh',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Typography variant="h2" textAlign="center" color="white" sx={{
            textShadow: '4px 4px 4px #000000'}}>
            Welcome to Eye Scream Vision</Typography>
        </Box>
        <Stack direction="row" spacing={5} 
            justifyContent="center"
            alignItems="center" 
            flexWrap="wrap"
            useFlexGap
            divider={<Divider orientation="vertical" flexItem />}
            sx={{textAlign: 'center', pt: 5}}>
            <Card sx={{padding: 3}}>
                <CardContent>
                    <Typography variant='h4' color="primary">
                        Location <ApartmentIcon color='secondary'/>
                    </Typography>
                    
                    <Typography>
                        123 Main Street, Brooklyn, New York 11212
                    </Typography>
                    <Button variant='outlined'>Directions</Button>
                </CardContent>
            </Card>
            <Card sx={{padding: 3}}>
                <CardContent>
                    <Typography variant='h4' color="primary">
                        Phone Number <PhoneIcon color='secondary'/>
                    </Typography>
                    <Typography>
                        1-646-123-4567
                    </Typography>
                    <Button variant='outlined'>Contact Us!</Button>
                </CardContent>
            </Card>
        </Stack>
        <Stack>
            <Box>
               <Typography>Expert Eye Care Services</Typography>
                <Typography>At our optometry clinic, we provide comprehensive eye care services to help you maintain optimal 
                    vision and eye health. Our experienced optometrist offers a range of services, including comprehensive eye exams,
                     contact lens fittings, and prescription eyewear. During your eye exam, we use the latest technology and techniques
                      to thoroughly evaluate your vision and eye health, and provide personalized recommendations for treatment or corrective lenses.
                       Whether you need a new prescription, have an eye condition, or just want to ensure that your eyes are healthy, 
                       we are here to help you see clearly and comfortably. Book your appointment today and discover the difference 
                       that expert eye care can make.</Typography>
                <Button>Schedule an Appointment</Button> 
            </Box>
            
        </Stack>
    </>
  );
}

export default Homepage;
