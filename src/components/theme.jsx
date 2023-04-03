import { createTheme, ThemeProvider, colors } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: "#7AA874",
        },
        secondary: {
            main: "#EBB02D",
        }
    },
    typography: {
        fontSize: 18,
        allVariants: {
            padding: '12px',
        },
        h4: {
            fontWeight: 600,
            color: "#7AA874",
        },
        h5: {
          color: "#EBB02D"
        },
        h7: {
          color: "#EBB02D",
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
              borderColor: '#EBB02D',
              color: '#EBB02D',
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