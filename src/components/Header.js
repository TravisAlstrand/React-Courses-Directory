import React from 'react';
// import navlink to use in nav links
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">code</i></span>
    <ul className="main-nav">
    {/* replace anchors with Link and href with 'to' */}
      {/* original html example -- <li><a href="#">Home</a></li> */}
      <li><NavLink exact to='/'>Home</NavLink></li>
      <li><NavLink to='/about'>About</NavLink></li>
      <li><NavLink to='/teachers'>Teachers</NavLink></li>
      <li><NavLink to='/courses'>Courses</NavLink></li>
    </ul>    
  </header>
);

export default Header;