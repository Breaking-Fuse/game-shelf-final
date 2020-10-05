import React from "react";
import { Link } from "react-router-dom";
import "../css/header.css";
import GameShelfLogoPlaceholder from "../../images/GameShelfLogoPlaceholder.png";
import ProfileIconPlaceholder from "../../images/ProfileIconPlaceholder.png";

function Header() {
  return (
    <header className="header">
      {/* Clicking Logo leads to Home page */}
      <Link to="/home" className="header__home">
        <img
          className="header__logo"
          src={GameShelfLogoPlaceholder}
          alt="GameShelfLogo"
          height="50"
        />
      </Link>

      {/* Go to register/login page*/}
      <Link to="/login">
        <div className="header__profile-login">Register/Login</div>
      </Link>

      {/* Clicking Profile Icon leads to profile page belonging to the user*/}
      <Link to="/USERNAME" className="header__profile-icon">
        <img
          className="header__profile-icon"
          src={ProfileIconPlaceholder}
          alt="ProfileIcon"
          height="50"
        />
      </Link>
    </header>
  );
}

export default Header;
