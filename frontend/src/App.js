import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VersionTwoLanding from "./components/VersionTwoLanding";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VersionTwoLanding />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;