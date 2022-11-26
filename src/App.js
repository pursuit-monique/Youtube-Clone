
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import {  About, NavBar } from './Components/Index';
import "bootstrap/dist/css/bootstrap.min.css";

import Videos from "./components/videos/Videos";

function App() {

  return (
    <Box sx={{ backgroundColor: '#0000' }}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Videos />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;


