import { useState, useEffect } from "react";
import Chatroom from "./components/Chatroom";

function App({cable}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="App">
      <h1>Page Count: {count}</h1>
      <Chatroom cable={cable}/>
    </div>
  );
}

export default App;