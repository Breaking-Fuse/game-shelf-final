import React from "react";
import { Link } from "react-router-dom";
import "../css/header.css";
import GameShelfLogoPlaceholder from "../../images/GameShelfLogoPlaceholder.png";
import ProfileIconPlaceholder from "../../images/ProfileIconPlaceholder.png";

function Header() {
  return (
    <header className="header">
      <div className="container center">
        <nav className="header__nav">
          <h1 className="header__nav-logo">
            <Link to="/home">
              <img src={GameShelfLogoPlaceholder} alt="GameShelf Logo" />
            </Link>
          </h1>

          <div className="header__nav-right">
            <ul className="header__nav-items">
              <li className="header__nav-item">
                <Link to="/login" className="header__link">
                  <b>Login/Register</b>
                </Link>
              </li>
              <li className="header__nav-item">
                <Link to="/username/profile">
                  <img
                    className="header__nav-profile"
                    src={ProfileIconPlaceholder}
                    alt="Profile Icon"
                    height="50"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
