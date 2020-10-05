import React from "react";
import "../components/css/login.css";

function LoginPage() {
  return (
    <div className="login">
      <div className="login__username-container">
        Username: <input className="login__username-input" type="text"></input>
      </div>
      <div className="login__password-container">
        Password:{" "}
        <input className="login__password-input" type="password"></input>
      </div>
      <button className="login__button">Login</button>
      <div className="login__register">
        Don't have an Account?{" "}
        <a className="login_register-link" href="/">
          Sign Up
        </a>
      </div>
    </div>
  );
}

export default LoginPage;
