import { useState } from 'react';
import './App.css';
import { useParams } from 'react-router-dom';

function Room() {
    const { roomID } = useParams();

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    function perform() {
        if (input.trim()) {
            setMessages([...messages, input]); 
            setInput(''); 
        }
    }

    return (
        <div>
            <h1>This is the Room Page</h1>
            <h2>Room ID: {roomID} </h2>
            <input
                className="inputText"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
            />
            <button type="button" onClick={perform}>Send</button>

            <div className="chat-list">
                {messages.map((message, index) => (
                    <div className="chatClass" key={index}>
                        {message}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Room;
