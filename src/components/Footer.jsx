import { AppBar, Typography, Toolbar, Box } from "@mui/material";

function Footer() {
    return (
        <Box mt={6}>
        <AppBar position="static">
            <Typography variant="h6" color="inherit" component="div" textAlign='center'>
            © Xing Chen 2023
            </Typography>
        </AppBar>
        </Box>
    )
}

export default Footer