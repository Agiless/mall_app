import Head from 'next/head';
import { useState } from 'react';

export default function ChatBot() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');
    
    // Simulating bot response
    setTimeout(() => {
      setMessages([...newMessages, { sender: 'bot', text: 'Thank you for your message! Our assistant will respond soon.' }]);
    }, 1000);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <Head>
        <title>Smart Mall Bot - Chat</title>
        <meta name="description" content="Chat with our AI-powered mall assistant." />
      </Head>
      
      {/* Chat Header */}
      <div className="bg-orange-500 text-white text-center py-4 text-xl font-bold">Smart Mall ChatBot</div>
      
      {/* Chat Window */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className={`p-3 rounded-lg w-fit max-w-xs ${msg.sender === 'bot' ? 'bg-blue-500 text-white self-start' : 'bg-gray-300 text-black self-end'}`}>
            {msg.text}
          </div>
        ))}
      </div>
      
      {/* Chat Input */}
      <div className="flex p-4 bg-white shadow-md">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          className="flex-1 p-2 border rounded-l-lg" 
          placeholder="Type your message..." 
        />
        <button 
          onClick={sendMessage} 
          className="bg-orange-500 text-white px-4 py-2 rounded-r-lg hover:bg-orange-600"
        >
          Send
        </button>
      </div>
    </div>
  );
}
