import React from "react";
import Country from "./components/Country";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Analytics from "./components/Analytics";
import Add from "./components/Add";

function App() {
  return (
    <div>
      {/* <Country /> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Country />}>
          Countries
        </Route>
        <Route path="/analytics" element={<Analytics />}>
          Analytics
        </Route>
        <Route path="/add" element={<Add />}>
          Add
        </Route>
      </Routes>
    </div>
  );
}

export default App;
