import axios from "axios";
import React, { useState } from "react";

function Add() {
  const [name, setName] = useState("");
  const [population, setPopulation] = useState("");
  const [region, setRegion] = useState("");
  const [area, setArea] = useState("");
  const [capital, setCapital] = useState("");
}

return (
  <div>
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input
        value={population}
        onChange={(e) => setPopulation(e.target.value)}
      />
      <input value={region} onChange={(e) => setRegion(e.target.value)} />
      <input value={area} onChange={(e) => setArea(e.target.value)} />
      <input value={capital} onChange={(e) => setCapital(e.target.value)} />

      <button type="submit">Submit</button>
    </form>
  </div>
);

export default Add;
