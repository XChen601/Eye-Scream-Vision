import {ThemeProvider } from '@mui/material/styles';
import { Routes, Route } from "react-router-dom";

import theme from './components/theme';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import About from './components/About';
import Appointment from './components/Appointment';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Home" element={<Homepage />} />
        <Route path="/Appointment" element={<Appointment />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
