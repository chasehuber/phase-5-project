import React, { useState, useEffect } from 'react';

function Chatroom({ cable }) {

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [username, setUsername] = useState([]);

  useEffect(() => {
    cable.subscriptions.create({channel: "ChatChannel", room: "testing"},
    {received(data) {
      setMessages([...messages, data.content])
    }})
  })

  function handleSubmit(e){
    e.preventDefault()

    fetch('/create_message', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content: input, room: "testing", user_id: 1 })
    }).then(console.log(input))
    // setMessage('');
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
      <input type='text' onChange={(e) => setInput(e.target.value)}/>
      <button onClick={handleSubmit}>Send message</button>

      <ul>
        {messages.map((message) => (
          <li key={message}>{message}</li>
        ))}
      </ul>

      {/* <input type='text' value={username} onChange={(e) => setUsername(e.target.value)}/>
      <button onClick={handleLogin}>Log in</button> */}
    </div>
  )
}

export default Chatroom