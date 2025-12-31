import { useState } from "react";

export function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim() === "") return;
    setTodos([ task,...todos]);
    setTask("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="todo">
      <h2>Todo List</h2>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}> ❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
