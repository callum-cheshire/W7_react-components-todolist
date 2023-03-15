import React from "react";
import ListItem from "../ListItem";
import "./ToDoList.css";

export default function ToDoList({
  arrayOfTodos,
  handleRemove,
  handleCompleted,
}) {
  return (
    <div className="ToDoList">
      <ul>
        {arrayOfTodos.map(({ id, todo }) => {
          return (
            <ListItem
              key={id}
              id={id}
              todo={todo}
              handleRemove={handleRemove}
              handleCompleted={handleCompleted}
            />
          );
        })}
      </ul>
    </div>
  );
}
