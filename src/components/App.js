import React from "react";
import ParkController from "./ParkController";
import Header from "./Header";

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="bg-yellow-50 pb-8">
        <ParkController />
      </div>
    </React.Fragment>
  );
}

export default App;
