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
            <Box sx={{p:5}} >
                <Typography variant='h4'>Expert Eye Care Services</Typography>
                <Divider variant="middle" sx={{ bgcolor: "secondary.light" }}/>
                <Typography>At our optometry clinic, we provide comprehensive eye care services to help you maintain optimal 
                    vision and eye health. Our experienced optometrist offers a range of services, including comprehensive eye exams,
                     contact lens fittings, and prescription eyewear. During your eye exam, we use the latest technology and techniques
                      to thoroughly evaluate your vision and eye health, and provide personalized recommendations for treatment or corrective lenses.
                       Whether you need a new prescription, have an eye condition, or just want to ensure that your eyes are healthy, 
                       we are here to help you see clearly and comfortably. Book your appointment today and discover the difference 
                       that expert eye care can make.</Typography>
                <Box display="flex" justifyContent="flex-end" mr={3}>
                    <Button variant="contained">Schedule an Appointment</Button> 
                </Box>
            </Box>
            <Box sx={{p:5}} >
                <Typography variant='h4'>What Our Customers Are Saying</Typography>
                <Divider variant="middle" sx={{ bgcolor: "secondary.light" }}/>
                <Typography>Don't just take our word for it - here's what some of our satisfied customers have to say about their experience with our
                     optometry services and ice cream offerings. "I've been going to this optometrist for years and I always leave feeling well taken
                      care of," says one customer. Another adds, "The ice cream here is delicious and the perfect treat after an appointment." 
                      Our commitment to quality, personal attention, and customer satisfaction is evident in the feedback we receive from our valued clients.
                       Visit us today and experience the exceptional care and delicious ice cream that have earned us such rave reviews.</Typography>
                <Box display="flex" justifyContent="flex-end" mr={3}>
                    <Button variant="contained">Read the Reviews</Button> 
                </Box>
            </Box>
            
        </Stack>
    </>
  );
}

export default Homepage;
