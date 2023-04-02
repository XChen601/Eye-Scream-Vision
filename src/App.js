import {ThemeProvider } from '@mui/material/styles';

import theme from './components/theme';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Homepage />
    </ThemeProvider>
  );
}

export default App;
