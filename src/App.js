// import { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Videos from "./components/videos/Videos";

function App() {
  // const [videos, setVideos] = useState("");

  // useEffect(() => {
  //   fetch(
  //     `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`,
  //     {
  //       method: "GET",
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setVideos(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Videos />
      </header>
    </div>
  );
}

export default App;
