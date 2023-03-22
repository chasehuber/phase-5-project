import React, { useState, useEffect } from 'react';
import Message from './Message';

function Chatroom({ currentUser, currentChatroom, cable }) {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    cable.subscriptions.create({channel: "ChatChannel", room: currentChatroom.conn_id},
    {received(data) {
      setMessages([...messages, data])
    }})
  },[setMessages, messages])

  useEffect(() => {
    fetch(`/chatrooms/${currentChatroom.id}/messages`)
    .then(res => res.json())
    .then(data => setMessages(data))
  }, [setMessages])

  const handleSubmit = async (e) => {
    e.preventDefault()

    await fetch('/messages', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"content": message, "user_id": currentUser.id, "chatroom_id":currentChatroom.id, "room_id":currentChatroom.conn_id})
    })
    setMessage('');
  }

  return (
    <div>
      <h1>testing</h1>
      <h2>welcome to {currentChatroom.title}</h2>
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      <input type='text' value={message} onChange={(e) => setMessage(e.target.value)}/>
      <button onClick={handleSubmit}>Send message</button>
    </div>
  )
}

export default Chatroom

{/* <div>
<input type='text' value={message} onChange={(e) => setMessage(e.target.value)}/>
<button onClick={handleSubmit}>Send message</button>
<ul>
  {messages.map((message) => (
    <li key={message.id}>{message.content}</li>
  ))}
</ul>
</div> */}