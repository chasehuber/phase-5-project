import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/user";

function Message({ message }) {
  const { user } = useContext(UserContext);
  const [sender, setSender] = useState('')
  const [showProfile, setShowProfile] = useState(false)
  const [requestedProfile, setRequestedProfile] = useState([]);
  
  useEffect(() => {
    fetch(`/users/${message.user_id}`)
    .then(res => res.json())
    .then(data => setSender(data.username))
  },[setSender])

  function handleShowProfile(e) {
    e.preventDefault();

    fetch(`/find-user/${sender}`)
    .then(res => res.json())
    .then(user => setRequestedProfile(user))

    setShowProfile(!showProfile)
  }

  return (
    <div className={user.id === message.user_id ? "message bg-gray-200 shadow-sm" : "message"}>
      <button onClick={handleShowProfile} className="hover:text-violet-600">{sender}</button>:{message.content}

      {!showProfile ? null : 
        <div className="fixed border-2 border-black bg-white w-96 h-max object-right">
          <div className="relative grid grid-cols-6 bg-black text-white p-1">
            <h1 className="col-span-4">{requestedProfile.username}</h1>
            <button className="absolute right-0 col-start-6 object-right bg-red-500 border-2 border-black 
            hover:bg-red-400 justify-center items-center w-6" onClick={handleShowProfile}>x</button>
          </div>
          <h1 className="p-2">{requestedProfile.bio}</h1>
        </div>
      }
    </div>
  )
}

export default Message