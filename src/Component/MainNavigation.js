import React from "react";
import { Link } from "react-router-dom";
import "./MainNavigation.css"

const MainNavigation = () => {
  return (
    <header className="header">
      <div className="logo">
        Youtube
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
