import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavBar from "./components/NavBar";
import About from "./components/pages/About";
import Videos from "./components/videos/Videos";
import Video from "./components/videos/Video";

function App() {
  return (
    <Box sx={{ backgroundColor: "#0000" }}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Videos />} />
          <Route path="/about" element={<About />} />
          <Route path="/video/:id" element={<Video />} />
          <Route path="/video/" element={<Video />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
