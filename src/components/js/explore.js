import React from "react";
import "../css/explore.css";

function Explore() {
  return (
    <div className="explore__module">
      <div className="explore__module-container">
        Explore:
        <p className="explore__module-content">
          Using the IGDB API, this module will show a randomized set of games
          that are currently popular (with their respective thumbnails).
        </p>
        {/* <IGDBRecentGames>*/}
      </div>
    </div>
  );
}

export default Explore;
