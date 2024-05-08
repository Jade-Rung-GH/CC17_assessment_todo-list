import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  return (
    // Login Page
    <main>
      <h1>Welcome</h1>
      <form className="login__ui">
        <div className="login__field">
          <label>Email or Mobile Number</label>
          <input></input>

          <label>Password</label>
          <input></input>
        </div>
        <button>LOG IN</button>
      </form>
    </main>
  );
}

export default App;
