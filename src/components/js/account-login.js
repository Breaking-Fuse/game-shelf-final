import React, { useState } from "react";
import "../css/login.css";

function AccountLogin(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { accounts } = props;

  function searchAccounts() {
    for (var i = 0; i < accounts.length; i++) {
      if (
        username === accounts[i].username &&
        password === accounts[i].password
      ) {
        console.log(username + " has logged in!");
        // TODO redirect to Home page and Output Login Success Results
        return <h1>Logged In!</h1>;
      }
    }
  }

  const onUpdateUsername = (event) => {
    const value = event.target.value;
    setUsername(value);
  };
  const onUpdatePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  return (
    <form>
      <input
        type="text"
        value={username}
        onChange={onUpdateUsername}
        placeholder="Enter Username"
      />
      <input
        type="password"
        value={password}
        onChange={onUpdatePassword}
        placeholder="Enter Password"
      />
      <button type="button" onClick={searchAccounts}>
        Click Me
      </button>
    </form>
  );
}

export default AccountLogin;
