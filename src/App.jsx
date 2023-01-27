import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Todo from "./components/Todo";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: "Learn React",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "Learn Next.js",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "Learn Tailwind",
      completed: false,
    },
  ]);

  const handleDone = (id) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.id === id);
    newTodos[index] = {
      ...newTodos[index],
      completed: !newTodos[index].completed,
    };
    console.log(newTodos[index].title);
    console.log(newTodos[index].id);

    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const handleAddTodo = () => {
    const newTodo = {
      id: uuidv4(),
      title: inputValue,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
    setInputValue("");
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  return (
    <div className="h-screen flex flex-col justify-start items-center bg-[#1c1d1c] color-white text-[#ffffff]">
      <h1 className="text-4xl my-5">To do App</h1>
      <div className="todoContainer border h-3/4 w-2/4">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            title={todo.title}
            completed={todo.completed}
            id={todo.id}
            handleDone={handleDone}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="addTodo flex flex-col p-4">
        <input
          type="text"
          className="rounded mb-4 text-[#1c1d1c] "
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="bg-[#0dc50d] text-[#1c1d1c] m-2 px-2 py-1 rounded"
          onClick={handleAddTodo}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default App;
