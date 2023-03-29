import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../context/user';
import Message from './Message';
import MessageForm from './MessageForm'

// To anyone looking at this specific component, there is a glaringly obvious bug that breaks this if you
// refresh the page. For some reason, context is reset on a page refresh, I assume this is to do with
// the context not being available, but I'm sick right now and this is due immediately so I can't fix it.
// Just know, I tried to come up with a solution ;-;

function Chatroom({ cable }) {
  const { user } = useContext(UserContext);
  const history = useHistory();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentChatroom, setCurrentChatroom] = useState([]);

  useEffect(() => {
    fetch(window.location.href)
    .then(res => res.json())
    .then(data => setCurrentChatroom(data))

    fetchHistory()
  }, [])

  useEffect(() => {
    cable.subscriptions.create({channel: "ChatChannel", room: currentChatroom.conn_id},
    {received(data) {
      setMessages([...messages, data])
    }})
  },[setMessages, messages])

  function fetchHistory() {
    setTimeout(() =>{
      fetch(window.location.href + '/messages')
      .then(res => res.json())
      .then(data => setMessages(data))
      .then(setLoading(false))
    }, 500)
  }

  async function handleChatroomDelete(e) {
    e.preventDefault();

    if(currentChatroom.creator_id === user.id) {
      await fetch(window.location.href, {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(window.location.reload(history.push("/")))
    }
  }

  let messageArray = messages.map((message) => (
    <Message key={message.id} message={message}/>
  )).reverse()

  return (
    <div className='order-3 col-span-2 row-span-6'>
      <div className='grid grid-rows-6 gap-2 h-full'>
        <div className='basic-box row-span-1'>
          <div className='relative bg-black text-white p-1 grid grid-cols-6'>
            <h2 className='col-span-4'>Welcome to {currentChatroom.title}</h2>
            {currentChatroom.creator_id === user.id ? <button className='absolute col-start-5 right-0
            basic-box bg-red-500 hover:bg-red-400 px-1' onClick={handleChatroomDelete}>Delete Chatroom</button> : null}
          </div>
          <p className='p-1'>{currentChatroom.description}</p>
        </div>
        <div className='basic-box row-span-3 p-1 bg-green-300'>
          <div className='flex flex-col-reverse h-full content-end basic-box overflow-scroll p-1 bg-white'>
            {loading ? <h1>Loading...</h1> : messageArray}
          </div>
        </div>
        <MessageForm currentChatroom={currentChatroom}/>
      </div>
    </div>
  )
}

export default Chatroom