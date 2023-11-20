import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import userLogo from "../img/userLogo.png";
import "../Login.css";
import Axios from "axios";

function Login() {

  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");

  const[loginStatus, setLoginStatus] = useState();

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      // if(!response.data.message) {
      //   setLoginStatus( response.data.message);
      // } else {
      //   setLoginStatus (response.data[0].message);
      // }
      console.log(response);
    });
  };

  return (
    <>
      <div className="login-card">
        <div className="user-icon">
          <img src={userLogo} className="user-logo" alt="user-logo" />
        </div>
        <h3 className="login-title">LOGIN</h3>
        <form className="login-form">
          <div className="form-group">
            <input
              type="text"
              className="username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit" className="login-button" onClick={login}>
              Login
            </button>
            <h1>{loginStatus}</h1>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
