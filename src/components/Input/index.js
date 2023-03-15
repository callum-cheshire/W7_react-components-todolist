import React from "react";
import "./Input.css";

import { useState } from "react";

export default function Input({ handleAddItem }) {
  // Creating a new state for input
  const [input, setInput] = useState("");

  // Taking in an event object and our current input state
  function addInput(e, input) {
    // Prevents page refresh
    e.preventDefault();
    // If input is an empty string, do nothing
    if (!input) return;
    // using the function passed down through props from App
    handleAddItem(input);
    // Resetting our input state to be an empty string (clearing)
    setInput("");
  }

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <div className="Input">
      <form>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          // Set the value to be the current state
          value={input}
          placeholder="What do you need to do?"
        ></input>
        {/* Calling our addInput function 
        passing the event listener object, so that we can prevent page refresh
        passing the current input from state, we can add to our list in App
        */}
        <button onClick={(e) => addInput(e, input)}>Add</button>
      </form>
    </div>
  );
}
