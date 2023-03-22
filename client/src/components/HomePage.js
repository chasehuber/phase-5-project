import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ChatroomCard from "./ChatroomCard";

function HomePage({ setCurrentChatroom }) {
  const [chatrooms, setChatrooms] = useState([]);

  useEffect(() => {
    fetch("/chatrooms").then(res => res.json())
    .then(data => setChatrooms(data))
  }, [])

  const chatroomArray = chatrooms.map((chatroom) => (
    <Link key={chatroom.id} to={`/chatrooms/${chatroom.conn_id}`}>
      <ChatroomCard chatroom={chatroom} setCurrentChatroom={setCurrentChatroom}/>
    </Link>
  ))

  return (
    <div>
      <h1>chatroom cards</h1>
      {chatroomArray}
    </div>
  )
}

export default HomePage