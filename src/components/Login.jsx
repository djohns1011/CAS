import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import userLogo from "../img/userLogo.png";
import "../Login.css";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";
const LOGIN_URL = '/auth';

function Login() {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL, JSON.stringify({ user, pwd }),
      {
        headers: { 'Content-Type': 'applications/json'},
        withCredentials: true
      }
      );
      console.log(JSON.stringify(response?.data))
      const accessToken = response?.data?.accessToken;
      const roles = response?.data.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser("");
      setPwd("");
    } catch (err){
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 450) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="#">Go to home</a>
          </p>
        </section>
      ) : (
        <div className="login-card">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}{" "}
          </p>
          <div className="user-icon">
            <img src={userLogo} className="user-logo" alt="user-logo" />
          </div>
          <h3 className="login-title">LOGIN</h3>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="username"
                ref={userRef}
                autoComplete="off"
                placeholder="Username"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="password"
                placeholder="Password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
            </div>
            <div className="form-group">
              <button type="submit" className="login-button">
                Login
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default Login;
