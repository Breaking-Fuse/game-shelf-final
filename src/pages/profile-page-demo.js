import React, {useState} from "react";
import "../components/css/profile-demo.css";
import ProfileItem from "../components/js/profile-item";
import games from "../data/games";


function ProfilePageDemo() {
  return (
  <div className="container">
    <div className="add-game__module">
      <div className="add-game__container"><h2>Hello, User! </h2>
      <p><i>This is a Demo. This is just a preview of what it would look like using the IGDB API to pull information on games and have a user add them to a backlog. The user will also be able to connect their Steam Account using the STEAM API.</i></p>

        {/* <div id="myDIV" class="header">
          <h2>My To Do List</h2>
          <input type="text" id="myInput" placeholder="Title..."/>
          <span onClick="newElement()" class="addBtn">Add</span>
        </div> */}

        <button id="addGameButton">Add a Game</button>
        <ul id="myUL">
          <h3>Games List:</h3>
          <li><ProfileItem/></li>
          <li><ProfileItem/></li>
          <li><ProfileItem/></li>
        </ul>
        <button id="addGameButton">Add a Game</button>
      </div>
    </div>
    
    
  </div>);
}

export default ProfilePageDemo;
