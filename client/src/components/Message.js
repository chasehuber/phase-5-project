import React, { useEffect, useState } from "react";

function Message({ message }) {
  const [sender, setSender] = useState('')
  
  useEffect(() => {
    fetch(`/users/${message.user_id}`)
    .then(res => res.json())
    .then(data => setSender(data.username))
  },[setSender])

  return (
    <h1>{sender}:{message.content}</h1>
  )
}

export default Message