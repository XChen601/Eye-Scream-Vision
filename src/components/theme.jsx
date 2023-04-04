import { createTheme, ThemeProvider, colors } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: "#00917c",
        },
        secondary: {
            main: "#D864A9",
        }
    },
    typography: {
        fontSize: 18,
        allVariants: {
            padding: '12px',
        },
        h4: {
            fontWeight: 600,
            color: "#00917c",
        },
        h5: {
          color: "#D864A9"
        },
        h7: {
          color: "#D864A9",
          fontWeight: "bold",
        }
        
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
              borderColor: '#D864A9',
              color: '#D864A9',
              '&:hover': {
                backgroundColor: '#7AA874',
                color: 'white',
              },
            },
          },
        },
      },
  });

export default theme;