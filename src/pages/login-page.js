import React from "react";
import "../components/css/login.css";
import AccountLogin from "../components/js/account-login";
import accounts from "../data/accounts";

function LoginPage() {
  return (
    <div className="login">
      <AccountLogin accounts={accounts} />
      <p>
        <i>This is a Demo. Possible accounts available are:</i>
      </p>
      <ul className="demo-accounts">
        <li>(username, password)</li>
        <li>(hello, world)</li>
        <li>(john, ada)</li>
      </ul>
      <p>
        <i>
          Logging in will eventually redirect you to your very own Profile, add
          a "Your Recent Activity" Module to the home page, and change the
          navigation bar to show "Add a Game", "Connect", and "Sign Out".
          <br />
          Use Developer Tools F12 to see if you successfully signed in.
        </i>
      </p>
    </div>
  );
}

export default LoginPage;
