import React from 'react';
import './Content.css';

const Content = () => {
  return (
    <div className="futuristic">
      <h2>Welcome to the Future of Legal Assistance</h2>
      <p>Explore the cutting-edge world of legal information with Legal Friend. Select a legal category below to get started.</p>
      <div className="content">
        <a href="criminal.html"><img src="criminal.png" alt="Criminal Law" /></a>
        <a href="civil.html"><img src="civil.png" alt="Civil Law" /></a>
      </div>



    </div>
  );
};

export default Content;
