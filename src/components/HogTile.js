import React, { useState } from "react";

function HogTile({ hog, onHideHog }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="ui card three wide column" onClick={() => setShowDetails(!showDetails)}>
      <div className="image">
        <img src={hog.image} alt={hog.name} />
      </div>
      <div className="content">
        <div className="header">{hog.name}</div>
        {showDetails && (
          <div className="description">
            <p>Specialty: {hog.specialty}</p>
            <p>Weight: {hog.weight}</p>
            <p>Greased: {hog.greased ? "Yes" : "No"}</p>
            <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
          </div>
        )}
      </div>
      <button
        className="ui button"
        onClick={(e) => {
          e.stopPropagation();
          onHideHog(hog.name);
        }}
      >
        Hide
      </button>
    </div>
  );
}

export default HogTile;