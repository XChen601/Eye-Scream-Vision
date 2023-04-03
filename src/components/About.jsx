import { Typography, Box, Divider } from "@mui/material";


function About() {
    return (
        <Box p={6}>
            <Box>
                <Typography variant="h4">Our Mission</Typography>
                <Divider variant="middle" sx={{ bgcolor: "secondary.light" }}/>
                <Typography>At Eye Scream Vision, our mission is to provide the highest quality eye care to our patients while creating a warm and 
                    welcoming environment. We believe that everyone deserves healthy eyes and clear vision, and we strive to make that a reality for 
                    all of our patients. Additionally, we are committed to providing a fun and unique experience for our customers by offering a wide 
                    variety of delicious ice cream flavors. Our goal is to be your go-to destination for all of your eye care and sweet treat needs, 
                    and we are dedicated to exceeding your expectations every time you visit us.</Typography>
            </Box>
            <Box>
                <Typography variant="h4">What We Offer</Typography>
                <Divider variant="middle" sx={{ bgcolor: "secondary.light" }}/>
                <Typography sx={{fontSize:'25px'}}>- Comprehensive eye exams for all ages <br /> 
                - Contact lens fittings <br/>
                - Treatment and management of ocular diseases <br/>
                - Pediatric optometry <br/>
                - Ice cream with every purchase! <br/>
                </Typography>
            </Box>
            <Box>
                <Typography variant="h4">Contact Us!</Typography>
                <Divider variant="middle" sx={{ bgcolor: "secondary.light" }}/>
                <Typography variant="h5" color='secondary'>Our Email:</Typography>
                <Typography fontSize='max(1.5vw,20px)' pt={0}>eyescreamvision@realemail.com</Typography>
                <Typography variant="h5" color='secondary'>Our Phone Number:</Typography>
                <Typography fontSize='max(1.5vw,20px)' pt={0}>1-646-123-4567</Typography>
            </Box>
        </Box>
    );
}

export default About