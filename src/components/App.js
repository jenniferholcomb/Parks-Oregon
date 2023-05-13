import React from "react";
import ParkController from "./ParkController";
import Header from "./Header";
import SignIn from "./SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <div className="bg-yellow-50 pb-8">
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<ParkController />} />
        </div>
      </Routes>
    </Router>
  );
}

export default App;
