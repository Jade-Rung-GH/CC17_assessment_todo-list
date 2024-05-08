import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function TodoPage() {
  return (
    <div className="page">
      <h1>TodoPage</h1>
      <div className="todo-list__input">
        <label>New Task</label>
        <input></input>
        <button>Add</button>
      </div>
      <div className="todo-list__list">
        <ul>
          <li>
            <input type="checkbox"></input> task1
            <button>x</button>
          </li>
          <li>
            <input type="checkbox"></input> task1
            <button>x</button>
          </li>
          <li>
            <input type="checkbox"></input> task1
            <button>x</button>
          </li>
          <li>
            <input type="checkbox"></input> task1
            <button>x</button>
          </li>
          <li>
            <input type="checkbox"></input> task1
            <button>x</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TodoPage;
