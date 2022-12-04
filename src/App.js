import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavBar from "./Components/NavBar";
// import About from "./Components/Pages/About";
import About from "./Components/pages/About";
import Videos from "./Components/videos/Videos";
import Video from "./Components/videos/Video";

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
