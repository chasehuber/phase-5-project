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
      else {
        // Sloppy, but I ran out of time for error rendering
        alert("Please fill out all fields")
      }
    })
  }

  return (
    <div className="signup-page">
      <form className="grid grid-flow-rows auto-rows-auto grid-cols-3 gap-2">
        <div className="grid grid-flow-rows col-span-3 row-span-1 gap-2 order-1">
          <div className="w-full">
            <label>Username: </label>
            <input type="text" name="username" value={username} className="basic-box w-96" 
            onChange={ (e) => setUsername(e.target.value) }/>
          </div>
          <div>
            <label>Password: </label>
            <input type="password" name="password" value={password} className="basic-box w-96" 
            onChange={ (e) => setPassword(e.target.value) }/>
          </div>
          <div>
            <label>Email: </label>
            <input type="text" name="email" value={email} className="basic-box w-96" 
            onChange={ (e) => setEmail(e.target.value) }/>
          </div>
        </div>
        <div className="col-span-3 row-span-1 order-2">
          <textarea name="bio" value={bio} className="bio" 
          placeholder="Bio..." onChange={ (e) => setBio(e.target.value) }/>
        </div>
        <div className="flex justify-center items-center basic-box col-span-1 order-3 w-1/2 hover:bg-gray-300">
          <input type="submit" onClick={handleSignUp}/>
        </div>
      </form>
    </div>
  )
}

export default SignUpPage