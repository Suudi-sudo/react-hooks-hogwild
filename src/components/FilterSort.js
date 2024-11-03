
import React from "react";

function FilterSort({ showGreasedOnly, setShowGreasedOnly, setSortBy }) {
  return (
    <div className="filter-sort ui segment">
      
      <label className="label">
        <input
          type="checkbox"
          checked={showGreasedOnly}
          onChange={(e) => setShowGreasedOnly(e.target.checked)}
        />
        Show Greased Only
      </label>
      
      <select onChange={(e) => setSortBy(e.target.value)} className="select">
        <option value="name">Sort by Name</option>
        <option  value="bronze">sort by bronze</option>
      </select>
    </div>
  );
}

export default FilterSort;