
import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogList from "./HogList";
import FilterSort from "./FilterSort";
import HogForm from "./HogForm";


function App() {
  const [showGreasedOnly, setShowGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("name");
  const [hiddenHogs, setHiddenHogs] = useState([]);
  const [hogData, setHogData] = useState(hogs);

  
  const filteredHogs = hogData
    .filter(hog => !showGreasedOnly || hog.greased)
    .filter(hog => !hiddenHogs.includes(hog.name));

  const sortedHogs = [...filteredHogs].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "weight") return a.weight - b.weight;
    return 0;
  });

  const handleHideHog = (hogName) => {
    setHiddenHogs([...hiddenHogs, hogName]);
  };

  const handleAddHog = (newHog) => {
    setHogData([...hogData, newHog]);
  };

  return (
    <div className="App">
      <Nav />
      <div className="ui container">
        {/* <FilterSort 
        showGreasedOnly={setShowGreasedOnly}
        setShowGreasedOnly={setShowGreasedOnly}
        setSortBy={setSortBy}
        /> */}
       <HogForm onAddHog={handleAddHog} />
       <FilterSort 
        showGreasedOnly={setShowGreasedOnly}
        setShowGreasedOnly={setShowGreasedOnly}
        setSortBy={setSortBy}
        />
       
        <HogList hogs={sortedHogs} onHideHog={handleHideHog} />
      </div>
    </div>
  );
}

export default App;