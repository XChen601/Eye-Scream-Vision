import { Box, Typography } from '@mui/material';
import image from '../images/man_with_glasses.jpg'

function Homepage() {
  return (

    <Box sx={{backgroundImage: `url(${image})`,
        display: 'flex',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '40vh',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <Typography variant="h2" textAlign="center" color="white" sx={{
        textShadow: '4px 4px 4px #000000',
      }}>Welcome to Eye Scream Vision</Typography>
    </Box>
  );
}

export default Homepage;
