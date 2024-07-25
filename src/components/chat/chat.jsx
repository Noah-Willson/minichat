import React,{useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import "./chat.css"

export default function Chat() {
  const { userName } = useParams();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setMessages(prevMessages => [...prevMessages, message]);
      setMessage(''); 
    }
  };

  return (
    <div className="wrappedUser">
      <h2>Chat with {userName}</h2>
      <div className="chatArea">
        <div className="messageList">
          {messages.map((msg, index) => (
            <div key={index} className="message">
              {msg}
            </div>
          ))}
        </div>
        <div className="inputWrapper">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="chatInput"
          />
          <button onClick={handleSendMessage} className="sendButton">
            Send
          </button>
          <Link to={'/'}>
          <button className='back'>
            Back
          </button>
          </Link>
        
        </div>
      </div>
    </div>
  );
}



