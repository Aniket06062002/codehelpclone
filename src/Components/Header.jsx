import React from 'react';
import { Link } from 'react-router-dom';
import Navlogo from './Imgs/logo.svg';


const Header = () => {
  return (
    <>
    <header>
    <div ClassName="navnar2">
      <div ClassName="logo">
        <img src= {Navlogo} alt="CodeHelp" />
      </div>
      <div ClassName="directer">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/About">About Us</Link>
          <Link to="/Courses">Courses</Link>
          <Link to="/labs">Labs</Link>
          <Link to="/Contact">Contact</Link>
        </ul>
      </div>
      <div ClassName="btna" id='buttonSection'>
        <a1 href="/">Dashboard</a1>
        <a1 href="/">Login</a1>
      </div>
    </div>
  </header>
    
    </>
  )
}

export default Header