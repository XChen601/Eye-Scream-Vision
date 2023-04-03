import { createTheme, ThemeProvider, colors } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: "#2a9d8f",
        },
        secondary: {
            main: "#e76f51",
        }
    },
    typography: {
        fontSize: 18,
        allVariants: {
            padding: '12px',
        },
        h4: {
            fontWeight: 600,
            color: "#2a9d8f",
        },
        
    },
    
    components: {
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: 10,
              fontWeight: 'bold',
              boxShadow: 'none',
            },
            outlined: {
              borderColor: '#e76f51',
              color: '#e76f51',
              '&:hover': {
                backgroundColor: '#2a9d8f',
                color: 'white',
              },
              marginTop: 15,
            },
          },
        },
      },
  });

export default theme;