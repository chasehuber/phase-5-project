import { useState } from "react";
import { Switch, Route, } from "react-router-dom";
import LoginPage from "./components/LoginPage"
import Chatroom from "./components/Chatroom";
import UserProfile from "./components/UserProfile"
import NavBar from "./components/Navbar";
import HomePage from "./components/HomePage";
import SignUpPage from "./components/SignUpPage";
import NewChatroom from "./components/NewChatroom";
import { UserProvider } from "./context/user";

function App({ cable }) {
  const [currentChatroom, setCurrentChatroom] = useState([]);
  const [editForm, setEditForm] = useState(false);

  return (
    <div className="basic-box bg-orange-300 p-1 min-h-96 h-[46rem] w-2/3 mx-auto my-10 font-mono shadow-xl">
      <UserProvider className>
        <div className="h-full basic-box grid grid-cols-3 grid-rows-6 gap-2 p-2 bg-white">
          <div className="basic-box col-span-1 row-span-1 order-1 p-1 bg-blue-400">
            <div className="flex basic-box w-full h-full justify-center items-center text-4xl bg-white">
              <h1>Vomit Page</h1>
            </div>
          </div>
          <Switch>
            <Route path="/login">
              <LoginPage/>
            </Route>
            <Route path="/chatrooms/:id">
              <Chatroom cable={cable}/>
              <div className="basic-box row-span-4 row-start-2 col-span-1 order-2 p-1 bg-red-400">
                <div className="basic-box h-full bg-white">
                  <UserProfile editForm={editForm}/>
                </div>
              </div>
            </Route>
            <Route path="/signup">
              <SignUpPage/>
            </Route>
            <Route path="/new-chatroom">
              <NewChatroom/>
            </Route>
            <Route path="/">
              <div className="basic-box col-span-2 row-span-6 order-3">
                <HomePage setCurrentChatroom={setCurrentChatroom} />
              </div>
              <div className="basic-box row-span-4 row-start-2 col-span-1 order-2 p-1 bg-red-400">
                <div className="basic-box h-full bg-white">
                  <UserProfile editForm={editForm}/>
                </div>
              </div>
            </Route>
          </Switch>
          <div className="row-span-1 col-span-1 row-start-6 order-4">
            <NavBar editForm={editForm} setEditForm={setEditForm}/>
          </div>
        </div>
      </UserProvider>
    </div>
  );
}

export default App;