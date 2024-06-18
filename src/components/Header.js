import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/banner.png';
import './Header.css';

const Header = () => (
  <header className="header">
    <img src={logo} alt="Legal Friend Logo" className="logo" />
    <h1>𝙻𝚎𝚐𝚊𝚕 𝙵𝚛𝚒𝚎𝚗𝚍</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  </header>
);

export default Header;
