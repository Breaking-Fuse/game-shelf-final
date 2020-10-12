import React from "react";
import RecentActivity from "../components/js/recent-activity";
import Explore from "../components/js/explore";
import "../components/css/home.css";

function HomePage() {
  return (
    <div className="home__container">
      <ul className="home__modules">
        <li className="home__modules-item">
          <RecentActivity className="home__modules-recent-activity" />
        </li>
        <li className="home__modules-item">
          <Explore className="home__modules-explore" />
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
