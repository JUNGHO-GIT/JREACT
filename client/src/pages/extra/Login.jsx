import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await axios.post("http://localhost:4000/api/login", { username, password });

    if (username === '' || password === '') {
      alert("Please enter both username and password");
      return;
    }
    else if (res.data  === "success") {
      alert("Login successful");
    }
    else if (res.data === "fail") {
      alert("Incorrect username or password");
    }
    else {
      alert("Unexpected response data from server");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder="Username" value={username} onChange={(e) => {
        setUsername(e.target.value)
      }} />
      <input type="text" placeholder="Password" value={password} onChange={(e) => {
        setPassword(e.target.value)
      }} />
      <input type="button" value="Login" onClick={login} />
    </div>
  );
};

export default Login;