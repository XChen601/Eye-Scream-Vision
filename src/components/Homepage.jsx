import { Box, CardContent, Card, Typography, Stack, Button, Divider } from '@mui/material';
import banner from '../images/banner.webp'
import ApartmentIcon from '@mui/icons-material/Apartment';
import PhoneIcon from '@mui/icons-material/Phone';
import { useNavigate } from 'react-router-dom';


function Homepage() {
    const navigate = useNavigate();

    return (
    <>
        <Box sx={{backgroundImage: `url(${banner})`,
            display: 'flex',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '40vh',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Box
                sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                }}>
                <Typography variant="h2" textAlign="center" color="white" sx={{
                textShadow: '4px 4px 4px #000000', fontSize:'max(4vw, 45px)'}}>
                Welcome to Eye Scream Vision</Typography> 
                <Typography variant='h6' textAlign="center" color='secondary' fontWeight={600} sx={{
                textShadow: '3px 3px 4px #000000'}}>
                    See Better. Taste Better. All in One Place.</Typography>
            </Box>
            
        </Box>
        <Stack direction="row" spacing={5} 
            justifyContent="center"
            alignItems="center" 
            flexWrap="wrap"
            useFlexGap
            sx={{textAlign: 'center', pt: 5}}>
            <Card sx={{padding: 3}}>
                <CardContent>
                    <Typography variant='h4' color="primary">
                        Location <ApartmentIcon color='secondary'/>
                    </Typography>
                    
                    <Typography>
                        123 Main Street, Brooklyn, New York 11212
                    </Typography>
                    <Button variant='outlined' href='https://www.google.com/maps' target="_blank">Directions</Button>
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
                    <Button variant='outlined' href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Contact Us!</Button>
                </CardContent>
            </Card>
        </Stack>
        <Stack>
        <Box p={5} px="8%">
            <Typography variant='h4'>Who Are We?</Typography>
            <Divider variant="middle" sx={{ bgcolor: "secondary.light" }}/>
            <Typography>At our optometry clinic and ice cream shop, we are passionate about providing exceptional eye care and
                    delicious treats to our valued customers. Our optometrist has years of experience and is dedicated to helping 
                    you achieve optimal eye health and vision. In addition to our optometry services, we also offer a wide variety of locally-sourced,
                    handmade ice cream flavors that are sure to satisfy your sweet tooth. We believe in supporting our community and using only 
                    the highest quality ingredients in everything we offer. At our clinic and shop, you'll find a warm, welcoming environment 
                    where you can relax, enjoy a scoop of ice cream, and receive the personalized attention you deserve. Come visit us and discover 
                    why we are the premier destination for eye care and treats in the area.</Typography>
            <Box display="flex" justifyContent="flex-end" mr={3}>
                <Button variant="contained" onClick={() => navigate("/About")}>Learn More!</Button> 
            </Box>
        </Box>
        <Box p={5} px="8%" >
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
                <Button variant="contained" onClick={() => navigate("/Appointment")}>Schedule an Appointment</Button> 
            </Box>
        </Box>
        <Box p={5} px="8%" >
            <Typography variant='h4'>What Our Customers Are Saying</Typography>
            <Divider variant="middle" sx={{ bgcolor: "secondary.light" }}/>
            <Typography>Don't just take our word for it - here's what some of our satisfied customers have to say about their experience with our
                    optometry services and ice cream offerings. "I've been going to this optometrist for years and I always leave feeling well taken
                    care of," says one customer. Another adds, "The ice cream here is delicious and the perfect treat after an appointment." 
                    Our commitment to quality, personal attention, and customer satisfaction is evident in the feedback we receive from our valued clients.
                    Visit us today and experience the exceptional care and delicious ice cream that have earned us such rave reviews.</Typography>
            <Box display="flex" justifyContent="flex-end" mr={3}>
                <Button variant="contained" onClick={() => navigate("/Reviews")}>Read the Reviews</Button> 
            </Box>
        </Box>
        </Stack>
    </>
  );
}

export default Homepage;
