import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

function LoginPage() {
  return (
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

export default LoginPage;
