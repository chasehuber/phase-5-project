import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function SignUpPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const history = useHistory();

  function handleSignUp(e) {
    e.preventDefault();
    fetch("/users", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({"username":username, "password":password, "email": email, "bio": bio})
    })
    .then(res => {
      if(res.status === 201) {
        window.location.reload(history.push("/login"))
      }
    })
  }

  return (
    <div>
      <form>
        <div>
          <label>Username: </label>
          <input type="text" name="username" value={username} 
          onChange={ (e) => setUsername(e.target.value) }/>
        </div>
        <div>
          <label>Password: </label>
          <input type="password" name="password" value={password} 
          onChange={ (e) => setPassword(e.target.value) }/>
        </div>
        <div>
          <label>Email: </label>
          <input type="text" name="email" value={email} 
          onChange={ (e) => setEmail(e.target.value) }/>
        </div>
        <div>
          <label>Bio: </label>
          <textarea name="bio" value={bio} 
          onChange={ (e) => setBio(e.target.value) }/>
        </div>
        <div>
          <input type="submit" onClick={handleSignUp}/>
        </div>
      </form>
    </div>
  )
}

export default SignUpPage