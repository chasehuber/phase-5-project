import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../context/user";

function NavBar({ editForm, setEditForm }) {
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    fetch('/me').then((res) => {
      if (res.ok) {
        res.json().then(user => setUser(user))
      }
    })
  }, []);

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
    <div className="grid grid-cols-4 grid-rows-2 gap-2 h-full align-middle">
      <Link to="/" className="navbar-button-sm hover:bg-green-300">Home</Link>
      {user ?  null : <Link to="/login" className="navbar-button-sm col-start-3 hover:bg-red-400">Log In</Link>}
      {user ? <button onClick={handleLogout} className="navbar-button-sm hover:bg-red-400">Log Out</button> : null}
      {user ? null : <Link to="/signup" className="navbar-button-lg hover:bg-yellow-300">Sign Up</Link>}
      {user ? <Link to="/new-chatroom" className="navbar-button-sm hover:bg-yellow-300">New Chatroom</Link> : null}
      {user ? <button onClick={(e) => e.preventDefault(setEditForm(!editForm))}className="navbar-button-sm hover:bg-blue-400 row-start-2">Edit Profile</button> : null}
    </div>
  )
}

export default NavBar