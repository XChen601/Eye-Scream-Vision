import {ThemeProvider } from '@mui/material/styles';
import { Routes, Route } from "react-router-dom";

import theme from './components/theme';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Home" element={<Homepage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
