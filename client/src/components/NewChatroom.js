import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/user";

function NewChatroom() {
  const history = useHistory();
  const { user } = useContext(UserContext);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    console.log(user)

    await fetch("/chatrooms", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({"title": title, "description": description, "creator_id":user.id})
    })
    .then(res => {
      if(res.ok) {
        res.json().then(history.push('/'))
      }
    })
  }

  return (
    <div className="basic-box row-span-3 row-start-2 col-span-2 p-1 bg-green-300">
      <form className="basic-box h-full bg-white">
        <div className="p-1 w-full">
          <label>Chatroom title: </label>
          <input type="text" name="title" onChange={ (e) => setTitle(e.target.value) } className="basic-box w-full p-1"/>
        </div>
        <div className="p-1 h-48">
          <label>Chatroom description: </label>
          <textarea name="description" onChange={ (e) => setDescription(e.target.value) } 
          className="basic-box resize-none w-full h-36 p-1"/>
        </div>
        <div className="p-1">
          <input type="submit" onClick={handleSubmit} className="basic-box p-1 hover:bg-gray-300" p-1/>
        </div>
      </form>
    </div>
  )
}

export default NewChatroom