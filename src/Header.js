import React from 'react';
import './Header.css'; // Assuming you use CSS files

const Header = () => {
  return (
    <header className="header">
      <img src="banner.png" alt="Legal Friend Logo" className="logo" />
      <h1>Legal Friend</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
    </header>
  );
};

export default Header;
