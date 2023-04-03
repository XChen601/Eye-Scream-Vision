import {ThemeProvider } from '@mui/material/styles';
import { Routes, Route } from "react-router-dom";

import theme from './components/theme';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import About from './components/About';
import Appointment from './components/Appointment';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Home" element={<Homepage />} />
        <Route path="/Appointment" element={<Appointment />} />
        <Route path="/About" element={<About />} />
        <Route path="/Reviews" element={<Reviews />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
