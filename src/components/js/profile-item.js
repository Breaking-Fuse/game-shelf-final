import React from 'react';
import "../css/profile-item.css";
import GameItemPlaceholder1 from "../../images/1.jpg";
import GameItemPlaceholder2 from "../../images/2.jpg";
import GameItemPlaceholder3 from "../../images/3.jpg";


function ProfileItem() {
    return (
        <div className="container">
            <img className="container__img" src={GameItemPlaceholder1} alt="gameThumbnail_KungFu" width="90px"/>
            <p><span>Game Title</span> Game Publisher (Platform/YearOfRelease)</p>
            <div className="container__game-status">[Beaten, Completed, and/or Speedrunning]</div>
        </div>
    )
}

export default ProfileItem;
