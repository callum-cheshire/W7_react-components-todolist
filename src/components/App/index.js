import "./App.css";
import Header from "../Header";
import Input from "../Input";
import ToDoList from "../ToDoList";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([
    {
      id: "6fb9483c-83a7-4af8-8aaa-72a2b81e2659",
      todo: "Create a todo app using React",
      completed: false,
    },
    {
      id: "6185ab57-2a85-40b2-ae5f-a93990fe7b3a",
      todo: "Cry when it all falls apart",
      completed: false,
    },
  ]);

  // Take in our new todo item string name to add
  function handleAddItem(input) {
    // Create a new todo array and add our new object to end the end
    const newTodosArray = [
      ...todos,
      { id: uuidv4(), todo: input, completed: false },
    ];
    // Update our state with the new todo array
    setTodos(newTodosArray);
  }

  function handleRemoveItem(id) {
    // Create a new array of todos where the id does not match
    const newTodo = todos.filter((todo) => todo.id !== id);
    // update our todos array state
    setTodos(newTodo);
  }

  function handleCompleted(id) {
    console.log(id);
  }

  return (
    <div className="App">
      <div className="todo-container">
        <Header title="To Do List" />
        {/* pass our Input component handleAddItem function */}
        <Input handleAddItem={handleAddItem} />
        {/* pass our ToDoList component our array state of todos and handleRemoveItem function */}
        <ToDoList
          arrayOfTodos={todos}
          handleRemove={handleRemoveItem}
          handleCompleted={handleCompleted}
        />
      </div>
    </div>
  );
}

export default App;
