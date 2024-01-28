import React, { useState } from "react";

function App() {
  const [buttonStyle, setButtonStyle] = useState({ backgroundColor: "white" });
  const [handleClick, setHandleClick] = useState("");
  const [changename, setChangename] = useState("");

  function clicked() {
    setHandleClick(changename);
  }

  function handlee(event) {
    setChangename(event.target.value);
  }

  function handleMouseOver() {
    setButtonStyle({ backgroundColor: "black" });
  }

  function handleMouseOut() {
    setButtonStyle({ backgroundColor: "white" });
  }

  function preventDefault(event) {
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {handleClick}</h1>
      <form onSubmit={preventDefault}>
        <input type="text" placeholder="What's your name?" onChange={handlee} />
        <button
          onClick={clicked}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          style={buttonStyle}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
