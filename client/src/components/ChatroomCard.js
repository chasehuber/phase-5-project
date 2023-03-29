import React from "react";

function ChatroomCard({ chatroom, setCurrentChatroom }) {
  const {title, description} = chatroom

  function handleClick() {
    setCurrentChatroom(chatroom)
  }

  return (
    <div onClick={handleClick} className="basic-box hover:bg-gray-300 m-1">
      <h1 className="p-1 w-full bg-black text-white">{title}</h1>
      <p className="p-1">{description}</p>
    </div>
  )
}

export default ChatroomCard