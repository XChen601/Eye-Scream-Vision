import { Box, CardContent, Card, Typography, Grid, Button, Stack } from '@mui/material';

function Reviews() {
    return (
        <>
        <Typography variant='h5' textAlign='center' pt={6}>Read What Our Customers Say!</Typography>
        <Grid container spacing={5} p={6} px='10%'>
            <Grid item md={6}>
                <Card sx={{padding: 3}}>
                    <CardContent>
                        <Typography>
                        "I was blown away by the level of service I received at Eye Scream Vision. Dr. Lee was incredibly knowledgeable and made me feel at ease during my eye exam. And to top it off, the ice cream was absolutely delicious! I highly recommend this place."
                        </Typography>
                        <Typography variant='h7'>
                            - Jeffrey X.
                        </Typography>
                    </CardContent>
                </Card> 
            </Grid>
            <Grid item md={6}>
                <Card sx={{padding: 3}}>
                    <CardContent>
                        <Typography>
                        "I've been coming to Eye Scream Vision for my annual eye exams for several years now, and I couldn't be happier with the level of care I've received. Dr. Kim is a true professional and always takes the time to answer all of my questions. And of course, the ice cream is a great added bonus!"
                        </Typography>
                        <Typography variant='h7'>
                        - Michael P.
                        </Typography>
                    </CardContent>
                </Card> 
            </Grid>
            <Grid item md={6}>
                <Card sx={{padding: 3}}>
                    <CardContent>
                        <Typography>
                        "I brought my kids in for their first eye exams and was impressed by how well Dr. Lee interacted with them. She made the process fun and engaging, and they even got to enjoy some ice cream afterward! I highly recommend this clinic for families."
                        </Typography>
                        <Typography variant='h7'>
                        - David S.
                        </Typography>
                    </CardContent>
                </Card> 
            </Grid>
            <Grid item md={6}>
                <Card sx={{padding: 3}}>
                    <CardContent>
                        <Typography>
                        "I never knew getting an eye exam could be such a pleasant experience! Dr. Lee was fantastic, and the staff was friendly and accommodating. And let's not forget about the ice cream - it was the perfect way to end my visit." 
                        </Typography>
                        <Typography variant='h7'>
                        - Laura M.
                        </Typography>
                    </CardContent>
                </Card> 
            </Grid>
        </Grid>
        <Stack direction="row" spacing={5} 
        justifyContent="center"
            alignItems="center" 
            flexWrap="wrap"
            useFlexGap>
            <Button variant="contained">Read All Reviews</Button>
            <Button variant="outlined" color="secondary" sx={{
                '&:hover': {
                    backgroundColor: '#EBB02D',
                  },
            }}>Leave A Review!</Button>
        </Stack>
        
        
        </>
    )
}

export default Reviews