import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";

function MessageForm({ currentChatroom }) {
  const { user } = useContext(UserContext);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()

    setMessage('');

    await fetch('/messages', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"content": message, "chatroom_id":currentChatroom.id, "room_id":currentChatroom.conn_id, "user_id": user.id,})
    })
  }

  return (
    <div className="row-span-2 row-start-5">
      <div className="grid grid-rows-4 h-full gap-2">
        <div className="basic-box p-1 w-full row-span-2 bg-yellow-300">
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="resize-none basic-box p-1 w-full h-full bg-white" placeholder="Your message here..."/>
        </div>
        <button onClick={handleSubmit} className="basic-box hover:bg-blue-200 row-span-1 row-start-3 h-full">Send message</button>
      </div>
    </div>
  )
}

export default MessageForm