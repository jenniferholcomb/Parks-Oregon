import React from "react";
import ParkController from "./ParkController";
import Header from "./Header";
import Park from "./Park";

function App() {
  return (
    <React.Fragment>
      <div className="">
        <Header />
        <ParkController />
      </div>
    </React.Fragment>
  );
}

export default App;
