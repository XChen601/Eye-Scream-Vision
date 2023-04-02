import { Toolbar, Typography, AppBar, Grid, IconButton, Menu, MenuItem, Box, Button  } from '@mui/material';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MenuIcon from '@mui/icons-material/Menu';

const pages = ["Home", "Services", "Contact", "About"]



function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="relative">
            <Toolbar sx={{py:1}}>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {pages.map((page) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">
                                <Link to={`/${page}`} style={{textDecoration: "none", color: "black"}}>
                                    {page}
                                </Link>    
                            </Typography>
                        </MenuItem>
                        ))}
                    </Menu>
                </Box>

                <Link to="/Home">
                    <IconButton size="large">
                        <VisibilityIcon sx={{fontSize: 30}}/>
                    </IconButton>
                </Link>
                <Typography variant="h4" sx={{ flexGrow: 1, display: { md: 'flex', justifyContent: 'flex-start' }, fontSize: 'max(24px, 2vw)', fontWeight: 600 }}>
                    Eye Scream Vision
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end' } }}>
                    {pages.map((page) => (
                        
                        <Link to={`/${page}`} style={{textDecoration: "none", color: "white"}} >
                            <Button
                            key={page}
                            sx={{ my: 2, color: 'white', display: 'block', fontSize: 18, paddingRight: 3, paddingLeft: 3 }}
                            >
                                {page}
                            </Button>
                        </Link>  
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar

