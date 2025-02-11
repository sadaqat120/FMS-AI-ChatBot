import React, { useState } from 'react';
import './App.css';
import MessageBubble from './components/MessageBubble';
import ChatInput from './components/ChatInput';
import { sendMessageAPI } from './services/chatService';

function App() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState("english");

  const sendMessage = async (userMessage) => {
    const newMessages = [...messages, { sender: 'user', text: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await sendMessageAPI(userMessage, language);
      const botResponse = { sender: 'bot', text: response.data.response };
      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [...prev, { sender: 'bot', text: "Sorry, something went wrong." }]);
    }

    setIsLoading(false);
  };

  return (
    <div className="chat-container">
      {/* Header Section */}
      <header className="chat-header">
        <h1>FMS AI Assistant</h1>
      </header>

      {/* Chat Window */}
      <div className="chat-window">
        {messages.map((msg, index) => (
          <MessageBubble key={index} sender={msg.sender} text={msg.text} />
        ))}
        {isLoading && <MessageBubble sender="bot" text="Thinking..." />}
      </div>

      {/* Input Section */}
      <div className="input-container">
        <ChatInput sendMessage={sendMessage} />
        <select onChange={(e) => setLanguage(e.target.value)} value={language}>
          <option value="english">English</option>
          <option value="urdu">اردو</option>
        </select>
      </div>
    </div>
  );
}

export default App;
