import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "./redux/todosSlice";

export default function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    const text = prompt("Enter a new to-do:");
    if (text) dispatch(addTodo(text));
  };

  return (
    <div>
      <h1>To-do List</h1>
      <button onClick={handleAdd}>Add Todo</button>
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx}>
            {todo}
            <button onClick={() => dispatch(removeTodo(idx))}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
