import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [visible, setVisible] = useState(false);

  const toggleChatbot = () => {
    setVisible(!visible);
  };

  return (
    <>
      <button className="chatbot-button" onClick={toggleChatbot}></button>
      <div className="help-text">May I help you?</div>
      {visible && (
        <iframe
          className="chatbot-container"
          id="chatbot-iframe"
          src="http://localhost:8501"
          title="Chatbot"
        ></iframe>
      )}
    </>
  );
};

export default Chatbot;
