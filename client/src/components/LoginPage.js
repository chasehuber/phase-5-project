import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/user";

function LoginPage({ setCurrentUser }) {
  let history = useHistory();
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch("/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ "username":username, "password":password })
    })
    .then(res => {
      if(res.ok) {
        res.json()
        .then(data => console.log(data))
        .then(data => setUser(data))
        .then(window.location.reload(history.push("/")))
      }
    })
    setUsername('')
    setPassword('')
  }


  return (
    <div className="row-start-2 row-span-2 basic-box p-1 bg-red-400">
      <form className="basic-box h-full p-1 bg-white">
        <div id="username-field">
          <label>Username: </label>
          <input type="text" name="username" value={username} onChange={ (e) => setUsername(e.target.value) } className="basic-box w-full"/>
        </div>
        <div id="password-field">
          <label>Password: </label>
          <input type="password" name="password" value={password} onChange={ (e) => setPassword(e.target.value) } className="basic-box w-full"/>
        </div>
        <div className="mt-2">
          <input type="submit" onClick={handleSubmit} className="basic-box hover:bg-gray-300 p-1"/>
        </div>
      </form>
    </div>
  )
}

export default LoginPage