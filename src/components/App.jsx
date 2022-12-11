import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");
  function handleChange() {
    setName(event.target.value);
  }

  function handleButtonPress() {
    setHeading(name);
  }
  return (
    <div className="container">
      <h1>Hello {headingText} </h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={handleButtonPress}>Submit</button>
    </div>
  );
}

export default App;
