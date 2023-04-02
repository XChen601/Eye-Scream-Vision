import {ThemeProvider } from '@mui/material/styles';

import Navbar from './components/Navbar';
import theme from './components/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
