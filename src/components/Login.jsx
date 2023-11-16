import React from "react";
import user from "../img/user.png";
import "../Login.css";

function Login() {
  return (
    
        <div className="login-card">
          <div className="user-icon">
            <img src={user} className="user-logo" alt="user-logo" />
          </div>
          <h3 className="login-title">LOGIN</h3>
          <form className="login-form">
            <div className="form-group">
              <input
                type="text"
                className="username"
                placeholder="Username"
                required=""
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="password"
                placeholder="Password"
                required=""
              />
            </div>
            <div className="form-group">
              <button type="submit" className="login-button">
                Login
              </button>
            </div>
          </form>
        </div>

  );
}

export default Login;
