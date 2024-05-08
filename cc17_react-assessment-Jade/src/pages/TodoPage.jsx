import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Todo(props) {
  // Destructure deleteTodo props
  const { deleteTodo } = props;
  return (
    <li className="todo__list">
      <input type="checkbox"></input>
      {props.title}
      <button onClick={() => deleteTodo(props.todoId)}>x</button>
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

  // FN for Delete Todo + API
  const deleteTodo = async (todoId) => {
    try {
      await axios.delete(
        `https://cc17-assessment-api.onrender.com/v1/todo/${todoId}?userId=28`
      );
      const newTodo = [...todos];
      const foundIndex = newTodo.findIndex((todo) => todo.id === todoId);
      if (foundIndex !== -1) {
        newTodo.splice(foundIndex, 1);
        setTodos(newTodo);
      }
    } catch (error) {
      console.log(error);
    }
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
    // alert("Todo is Rendering");
    fetchData();
  }, []);

  // FN for Logout
  const navigate = useNavigate();
  const handleLogout = async (e) => {
    e.preventDefault();
    if (confirm("Are you sure about logging out?") == true) {
      navigate("/");
    } else {
      e.preventDefault();
    }
  };

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
            <Todo
              key={todo.id}
              todoId={todo.id}
              title={todo.title}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      </div>
      <div className="logout__box">
        <button onClick={handleLogout}>LOG OUT</button>
      </div>
    </div>
  );
}

export default TodoPage;
