import { Typography, Box, Divider, List, ListItem, ListItemText } from "@mui/material";


function About() {
    return (
        <>
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
            <List sx={{fontSize:'18px'}}>
              <Typography>Test1 <br /> Test2</Typography>
              
            </List>
        </Box>
        </>
    );
}

export default About