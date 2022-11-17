// import logo from "./logo.svg";
import { useEffect } from "react";
import "./App.css";
import { Router, Routes, Route } from "react-router-dom";
// import Layout from "./Component/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import MainNavigation from "./Component/MainNavigation";

function App() {
  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      <Router>
        <MainNavigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// {
/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
// }
