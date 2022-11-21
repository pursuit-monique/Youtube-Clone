import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import "./NavBar.css"
import { logo } from "../Utils/constants";

const NavBar = () => {
  return (
    <header className="header">
      <Stack 
        direction="row" 
        alignItems="center" 
        p={2} 
        sx={{ position: 'sticky', background: '#0000', top: '0', justifyContent: 'space-between'}} 
      >
        <Link to="/" style={{ display: 'flex', alignItems: 'center', }}>
          <img src={logo} alt="logo" height={45} />
        </Link>
      </Stack>
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

export default NavBar;