import React, { useState } from 'react';
import './ChatInput.css';

const ChatInput = ({ sendMessage }) => {
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim()) {
      sendMessage(inputText);
      setInputText('');
    }
  };

  return (
    <div className="chat-input">
      <input 
        type="text" 
        placeholder="Type your message..." 
        value={inputText} 
        onChange={(e) => setInputText(e.target.value)} 
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ChatInput;
