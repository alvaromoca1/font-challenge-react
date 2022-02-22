import React from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CalculateIcon from '@mui/icons-material/Calculate';
import './NavBar.css';

const NavBar = () => (
  <div className="app__sidebar">
      <a className='app__slidebar-nav__item' href="#"> 
        <PersonOutlineIcon/>
        Client
      </a>
      <a className='app__slidebar-nav__item' href="#">
        <CalculateIcon/>  
        Promedio
      </a>
  </div>
);

export default NavBar;
