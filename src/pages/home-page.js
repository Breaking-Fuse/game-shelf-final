import React from "react";
import RecentActivity from "../components/js/recent-activity";
import Explore from "../components/js/explore";
import "../components/css/home.css";

function HomePage() {
  return (
    <div className="home__modules">
      <RecentActivity className="home__modules-recent-activity" />
      <Explore className="home__modules-explore" />
    </div>
  );
}

export default HomePage;
