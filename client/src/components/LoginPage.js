import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function LoginPage({ setCurrentUser }) {
  let history = useHistory();
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
        .then(data => setCurrentUser(data))
        .then(window.location.reload(history.push("/")))
      }
    })
    setUsername('')
    setPassword('')
  }


  return (
    <div>
      <form>
        <div id="username-field">
          <label>Username: </label>
          <input type="text" name="username" value={username} onChange={ (e) => setUsername(e.target.value) }/>
        </div>
        <div id="password-field">
          <label>Password: </label>
          <input type="password" name="password" value={password} onChange={ (e) => setPassword(e.target.value) }/>
        </div>
        <div>
          <input type="submit" onClick={handleSubmit}/>
        </div>
      </form>
    </div>
  )
}

export default LoginPage