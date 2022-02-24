import React from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CalculateIcon from '@mui/icons-material/Calculate';
import './NavBar.css';

const NavBar = () => (
  <div className="app__sidebar">
      <a className='app__slidebar-nav__item' href="/"> 
        <PersonOutlineIcon/>
        <span className='app__slider-menu'>Client</span>
      </a>
      <a className='app__slidebar-nav__item' href="/avg">
        <CalculateIcon/>  
        <span className='app__slider-menu'>Promedio</span>
      </a>
  </div>
);

export default NavBar;
