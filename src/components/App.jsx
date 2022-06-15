import React, { useState } from "react";

function App() {
  const now = new Date().toLocaleTimeString();

  let [time, setTime] = useState(now);

  function changeTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  setInterval(changeTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={changeTime}>Get Time</button>
    </div>
  );
}

export default App;
