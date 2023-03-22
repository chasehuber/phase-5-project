import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function UserProfile({ currentUser }) {
  const history = useHistory();
  const {username, email, bio} = currentUser;
  useEffect(() => {
    fetch('/me').then((res) => {
      if(!res.ok) {
        history.push('/')
      }
    })
  }, [])

  return (
    <div>
      <h1>{username}</h1>
      <h1>{email}</h1>
      <h1>{bio}</h1>
    </div>
  )
}

export default UserProfile