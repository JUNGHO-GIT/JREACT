import React, {useState} from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {createGlobalStyle} from "styled-components";
import "../core/Private.css";

// ------------------------------------------------------------------------------------------------>
const SignupStyle = createGlobalStyle`
  .signup {
    display: flex;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f5f5f5;
  }

  .form-Signup {
    max-width: 330px;
    padding: 15px;
  }

  .form-Signup .form-floating:focus-within {
    z-index: 2;
  }

  .form-Signup input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .form-Signup input[type="userPw"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;

// ------------------------------------------------------------------------------------------------>
const Signup = () => {

  const [userId, setId] = useState("");
  const [userPw, setPassword] = useState("");

  const Signup = async () => {
    const res = await axios.post("http://localhost:4000/api/signup", {userId, userPw});

    if (userId === "" || userPw === "") {
      alert("Please enter both Id and Pw");
      return;
    }
    else if (res.data === "success") {
      alert("Signup successful");
    }
    else if (res.data === "fail") {
      alert("Incorrect Id or Pw");
    }
    else {
      alert(`${res.data}error`);
    }
  };

  return (
    <div>
    <Header />
      <section className="signup custom-flex-center">
        <SignupStyle/>
        <form>
          <div className="empty-h50"></div>
          <h1 className="mb-3">Sign up</h1>
          <div className="empty-h20"></div>
          <div className="form-floating">
            <input className="form-control" type="text" placeholder="ID" value={userId}
            userId="floatingId" onChange={(e) => {setId(e.target.value);}}/>
            <label htmlFor="floatingId">ID</label>
          </div>
          <div className="empty-h20"></div>
          <div className="form-floating">
            <input className="form-control" type="text" placeholder="Password" value={userPw}
            userId="floatingPassword" onChange={(e) => {setPassword(e.target.value);}}/>
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="empty-h20"></div>
          <button className="w-100 btn btn-lg btn-primary" type="button" onClick={Signup}>Submit</button>
          <p className="mt-5 mb-3 text-muted">&copy; 2023 JUNGHO</p>
          <div className="empty-h50"></div>
        </form>
      </section>
    <Footer />
    </div>
  );
};

export default Signup;
