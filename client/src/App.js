import { useState, useEffect } from "react";
import { Switch, Route, } from "react-router-dom";
import LoginPage from "./components/LoginPage"
import Chatroom from "./components/Chatroom";
import UserProfile from "./components/UserProfile"
import NavBar from "./components/Navbar";
import HomePage from "./components/HomePage";
import SignUpPage from "./components/SignUpPage";
import NewChatroom from "./components/NewChatroom";


function App({ cable }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentChatroom, setCurrentChatroom] = useState([]);

  useEffect(() => {
    fetch('/me').then((res) => {
      if (res.ok) {
        res.json().then(user => setCurrentUser(user))
      }
    })
  }, []);

  return (
    <div>
      <NavBar currentUser={currentUser}/>
      <Switch>
        <Route path="/login">
          <LoginPage setCurrentUser={setCurrentUser}/>
        </Route>
        <Route path="/chatrooms/:id">
          <Chatroom cable={cable} currentChatroom={currentChatroom} currentUser={currentUser}/>
        </Route>
        <Route path="/profile">
          <UserProfile currentUser={currentUser} />
        </Route>
        <Route path="/signup">
          <SignUpPage/>
        </Route>
        <Route path="/new-chatroom">
          <NewChatroom currentUser={currentUser} />
        </Route>
        <Route path="/">
          <HomePage setCurrentChatroom={setCurrentChatroom}/>
        </Route>
      </Switch>
      {/* <div>
        <h2>Current user: {currentUser ? currentUser.username : null}</h2>
        <h2>Current chatroom: {currentChatroom.title}</h2>
      </div> */}
    </div>
  );
}

export default App;