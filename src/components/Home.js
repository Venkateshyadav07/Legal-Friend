import React from 'react';
import './Home.css';
import criminalImage from '../assets/criminal.png';
import civilImage from '../assets/civil.png';

const Home = () => (
  <div className="futuristic">
    <h2>Welcome to the Future of Legal Assistance</h2>
    <p>Explore the cutting-edge world of legal information with Legal Friend. Select a legal category below to get started.</p>
    <div className="content">
      <a href="/criminal"><img src={criminalImage} alt="Criminal Law" /></a>
      <a href="/civil"><img src={civilImage} alt="Civil Law" /></a>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    
  </div>
);

export default Home;
