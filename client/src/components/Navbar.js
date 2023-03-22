import React from "react";
import { Link, useHistory } from "react-router-dom";

function NavBar({ currentUser }) {
  const history = useHistory();

  async function handleLogout() {
    await fetch("/logout", {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      }
    })
    window.location.reload(history.push('/'));
  }

  return (
    <div>
      <h1>NavBar</h1>
      <Link to="/">Home</Link>
      {currentUser ?  null : <Link to="/login">Log In</Link>}
      {currentUser ? <button onClick={handleLogout}>Log Out</button> : null}
      {currentUser ? null : <Link to="/signup">Sign Up</Link>}
      {currentUser ? <Link to="/profile">Profile</Link> : null} 
      {currentUser ? <Link to="/new-chatroom">New Chatroom</Link> : null}
    </div>
  )
}

export default NavBar