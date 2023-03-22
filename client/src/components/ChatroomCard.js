import React from "react";

function ChatroomCard({ chatroom, setCurrentChatroom }) {
  const {title, description} = chatroom

  function handleClick() {
    setCurrentChatroom(chatroom)
  }

  return (
    <div onClick={handleClick}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default ChatroomCard