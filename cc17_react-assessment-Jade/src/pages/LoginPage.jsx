import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function LoginPage() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // <AuthContext.Provider value={return}>

  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmailorPhone = (e) => setEmailOrPhone(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    if (emailOrPhone === "jade_cc17@mail.com" && password === "12345") {
      await login({ emailOrPhone, password });
      navigate("/todo");
    } else {
      alert("Invalid Username or Password!");
    }
  };

  return (
    <main>
      <h1>Welcome</h1>
      <form className="login__ui" onSubmit={handleSubmitLogin}>
        <div className="login__field">
          <label>Email or Mobile Number</label>
          <input
            value={emailOrPhone}
            onChange={handleChangeEmailorPhone}
          ></input>

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={handleChangePassword}
          ></input>
        </div>
        <button>LOG IN</button>
      </form>
    </main>
  );
}

export default LoginPage;
