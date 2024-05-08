import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Todo(props) {
  return (
    <li>
      <input type="checkbox"></input>
      {props.title}
      <button>x</button>
    </li>
  );
}

function TodoPage() {
  // Set State for Todo Tasks
  const [todos, setTodos] = useState([
    {
      id: "0",
      title: "",
    },
  ]);

  // Set State for Adding Todo
  const [input, setInput] = useState("");
  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };

  // FN for Add Todo + API
  const addTodo = async () => {
    try {
      const response = await axios.post(
        "https://cc17-assessment-api.onrender.com/v1/todo?userId=28",
        { title: input }
      );
      // console.log(response.status, response.data); Success: API Received Data
      setTodos([response.data.data, ...todos]); // Clone and add new task up top
    } catch (error) {
      console.log(error);
    }
    setInput("");
  };

  // Fetch Data from API
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://cc17-assessment-api.onrender.com/v1/todo?userId=28"
      );

      // console.log(response.data);
      // Receiving Data = {status, data}
      const dataTodo = response.data.data.slice(0, 10);
      // console.log(dataTodo);
      setTodos(dataTodo);
    } catch (error) {
      console.log(error);
    }
  };

  // For Auto Fetch
  useEffect(() => {
    alert("Todo is Rendering");
    fetchData();
  }, []);

  return (
    <div className="page">
      <h1>TodoPage</h1>
      <div className="todo-list__input">
        <label>New Task</label>
        <input onChange={handleChangeInput} value={input}></input>
        <button onClick={addTodo}>Add</button>
      </div>
      <div className="todo-list__list">
        <ul>
          {todos.map((todo) => (
            <Todo key={todo.id} userId={todo.id} title={todo.title} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoPage;
