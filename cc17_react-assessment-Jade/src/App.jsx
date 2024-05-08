import { useState } from "react";
import reactLogo from "./assets/react.svg";
import LoginPage from "./pages/LoginPage";
import TodoPage from "./pages/TodoPage";

function App() {
  return (
    <>
      {/* // Login Page */}
      <LoginPage />
      {/* // Todo Page */}
      <TodoPage />
    </>
  );
}

export default App;
