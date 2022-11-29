import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import "./NavBar.css";
import * as Icon from 'react-bootstrap-icons';

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
          {/* <img src={logo} alt="logo" height={45} /> */}
          <Icon.Youtube style={{height: '65', width: 'auto'}} /> <span className="logo">Youtube</span>
        </Link>
      </Stack>
      <div className="logo">
        
      </div>
      <nav>
        <ul>
          <li><Icon.HouseDoorFill style={{height: '25', width: 'auto', color: 'red', marginRight: '-25', marginBottom: '5'}} /></li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li><Icon.PeopleFill style={{height: '25', width: 'auto', color: 'red', marginRight: '-25', marginBottom: '5'}} /></li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;