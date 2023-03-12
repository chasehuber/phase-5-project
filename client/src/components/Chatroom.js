import React, { useState, useEffect } from 'react';
import MessagesChannel from '../channels/chat_channel';

function Chatroom() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState([]);

  useEffect(() => {
    MessagesChannel.received = (data) => setMessages(data.messages)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    await fetch('/messages', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message })
    })
    setMessage('');
  }

  // const handleLogin = async (e) => {
  //   e.preventDefault()

  //   await fetch('http://localhost:3000/login', {
  //     method: 'POST',
  //     mode: 'cors',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ username })
  //   })
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  // }

  return (
    <div>
      <input type='text' value={message} onChange={(e) => setMessage(e.target.value)}/>
      <button onClick={handleSubmit}>Send message</button>

      <ul>
        {messages.map((message) => (
          <li key={message.id}>{message.content}</li>
        ))}
      </ul>

      {/* <input type='text' value={username} onChange={(e) => setUsername(e.target.value)}/>
      <button onClick={handleLogin}>Log in</button> */}
    </div>
  )
}

export default Chatroom