import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/user";

function UserProfile({ editForm }) {
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newBio, setNewBio] = useState('');

  // Checks if you are logged in, has a loading function to fetch data and prevent errors.
  useEffect(() => {
    setTimeout(() => {
        fetch('/me').then((res) => {
          if(res.ok) {
            setLoading(false)
          }
        })
    }, 500)
  }, [])

  function handleProfileEdit(e) {
    e.preventDefault();

    fetch(`/users/${user.id}`, {
      method: "PATCH",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({"username": (newUsername === '' ? user.username : newUsername), 
      "email": (newEmail === '' ? user.email : newEmail), "bio": (newBio === '' ? user.bio : newBio)})
    })
    .then((res) => {
      if(res.ok) {
        console.log(res)
        window.location.reload()
      }
    })
  }
  
  if(loading) {
    return (
      <div className="p-1">
        {user ? <h1>Loading...</h1> : <h1>Please log in or sign up to access chatrooms!</h1>}
      </div>
    )
  }
  else if(editForm) {
    return (
      <div className="p-1">
        <form>
          <div className="w-full mb-2">
            <label>Username: </label>
            <input type="text" placeholder={user.username} onChange={ (e) => setNewUsername(e.target.value) } className="basic-box p-1 w-full"/>
          </div>
          <div className="w-full mb-2">
            <label>Email: </label>
            <input type="text" placeholder={user.email} onChange={ (e) => setNewEmail(e.target.value) } className="basic-box p-1 w-full"/>
          </div>
          <div className="w-full mb-2">
            <label>Bio: </label>
            <textarea type="text" placeholder={user.bio} onChange={ (e) => setNewBio(e.target.value) } className="basic-box w-full resize-none h-48 p-1"/>
          </div>
          <input type="submit" onClick={handleProfileEdit} className="basic-box p-1 hover:bg-gray-300" />
        </form>
      </div>
    )
  }
  
  else{
    return (
      <div className="p-1">
        <h1>{user.username}</h1>
        <h1>{user.email}</h1>
        <h1>{user.bio}</h1>
      </div>
    )
  }

}

export default UserProfile