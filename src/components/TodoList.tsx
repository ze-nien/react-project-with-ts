import React, { useState } from "react";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");

  const addTodo = (task: string) => {
    const newTodo: Todo = {
      id: todos.length + 1,
      task,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    setInput("");
  };

  return (
    <div>
      <h2>TodoList</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addTodo(input)}>addTodo</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task} {todo.completed ? "(Completed)" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
