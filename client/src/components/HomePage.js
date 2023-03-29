import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/user";
import ChatroomCard from "./ChatroomCard";

function HomePage({ setCurrentChatroom }) {
  const { user } = useContext(UserContext);
  const [chatrooms, setChatrooms] = useState([]);

  useEffect(() => {
    fetch("/chatrooms").then(res => res.json())
    .then(data => setChatrooms(data))
  }, [])

  function handleUnauthorized(e) {
    e.preventDefault();
    alert("Must be logged in to enter chatrooms")
  }

  const chatroomArray = chatrooms.map((chatroom) => (
    <Link key={chatroom.id} to={user ? `/chatrooms/${chatroom.conn_id}` : "/"} onClick={user ? null : handleUnauthorized}>
      <ChatroomCard chatroom={chatroom} setCurrentChatroom={setCurrentChatroom} />
    </Link>
  ))

  return (
    <div className="flex flex-col h-full bg-green-300">
      <h1 className="flex justify-center bg-black text-white p-2">Chatrooms</h1>
      <div className="h-full border-2 border-black m-1 bg-white overflow-scroll">
        {chatroomArray}
      </div>
    </div>
  )
}

export default HomePage