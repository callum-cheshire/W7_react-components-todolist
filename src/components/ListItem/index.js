import React from "react";
import "./ListItem.css";

export default function ListItem({ id, todo, handleRemove, handleCompleted }) {
  return (
    <div className="ListItem">
      <li>{todo}</li>
      <button onClick={() => handleRemove(id)}>Delete</button>
      <input onChange={() => handleCompleted(id)} type="checkbox"></input>
    </div>
  );
}
