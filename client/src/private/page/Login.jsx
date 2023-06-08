import React, {useState} from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {createGlobalStyle} from "styled-components";
import "../core/Private.css";

// ------------------------------------------------------------------------------------------------>
const LoginStyle = createGlobalStyle`
  .login {
    display: flex;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f5f5f5;
  }

  .form-login {
    max-width: 330px;
    padding: 15px;
  }

  .form-login .form-floating:focus-within {
    z-index: 2;
  }

  .form-login input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .form-login input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;

// ------------------------------------------------------------------------------------------------>
const Login = () => {

  const [userId, setId] = useState("");
  const [userPw, setPassword] = useState("");

  const login = async () => {
    const res = await axios.post("http://localhost:4000/api/login", {
      userId: userId,
      userPw: userPw,
    });

    if (userId.length === 0 || userPw.length === 0) {
      alert("Please enter both Id and password");
      return;
    }
    else if (res.data === "success") {
      alert("Login successful");
      window.location.reload();
    }
    else if (res.data === "fail") {
      alert("Incorrect Id or password");
      window.location.reload();
    }
    else {
      alert(`${res.data}error`);
    }
  };

  return (
    <div>
    <Header />
      <section className="login custom-flex-center">
        <LoginStyle/>
        <form>
          <div className="empty-h50"></div>
          <h1 className="mb-3">Log In</h1>
          <div className="empty-h20"></div>
          <div className="form-floating">
            <input className="form-control" type="text" placeholder="ID" value={userId}
            id="floatingId" onChange={(e) => {setId(e.target.value);}}/>
            <label htmlFor="floatingId">ID</label>
          </div>
          <div className="empty-h20"></div>
          <div className="form-floating">
            <input className="form-control" type="text" placeholder="Password" value={userPw}
            id="floatingPassword" onChange={(e) => {setPassword(e.target.value);}}/>
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="empty-h20"></div>
          <button className="w-100 btn btn-lg btn-primary" type="button" onClick={login}>Submit</button>
          <p className="mt-5 mb-3 text-muted">&copy; 2023 JUNGHO</p>
          <div className="empty-h50"></div>
        </form>
      </section>
    <Footer />
    </div>
  );
};

export default Login;
