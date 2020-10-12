import React from "react";
import "../css/recent-activity.css";

// TO DO: Show fake recent activity for now
function RecentActivity() {
  return (
    <div className="recent-activity__module">
      <div className="recent-activity__module-container">
        Recent Activity:
        <p className="recent-activity__module-content">
          Using Steam API and IGDB API, recent GameShelf activity (global) will
          be shown here.
        </p>
      </div>
    </div>
  );
}

export default RecentActivity;
