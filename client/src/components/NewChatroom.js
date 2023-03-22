import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function NewChatroom({ currentUser }) {
  const history = useHistory();
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch("/chatrooms", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({"title": title, "description": description, "creator_id":currentUser.id})
    })
    .then(res => {
      if(res.ok) {
        res.json().then(data => history.push('/'))
      }
    })
  }

  return (
    <div>
      <form>
        <div>
          <label>Chatroom title: </label>
          <input type="text" name="title" onChange={ (e) => setTitle(e.target.value) }/>
        </div>
        <div>
          <label>Chatroom description: </label>
          <input type="text" name="description" onChange={ (e) => setDescription(e.target.value) }/>
        </div>
        <div>
          <input type="submit" onClick={handleSubmit}/>
        </div>
      </form>
    </div>
  )
}

export default NewChatroom