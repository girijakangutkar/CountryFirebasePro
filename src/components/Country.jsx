import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "../styles/country.css";
import { DataContext } from "../context/countryContext";

function Country() {
  const { data, loading } = useContext(DataContext);
  const [search, setSearch] = useState("");
  const [sortPop, setSortPop] = useState("");
  const [area, setArea] = useState("");

  function searchByName() {
    if (search.length !== 0) {
      return data.filter(
        (info) =>
          info !== null &&
          (info.name.toLowerCase().includes(search.toLowerCase()) ||
            info.capital.toLowerCase().includes(search.toLowerCase()))
      );
    } else {
      return data.filter((info) => info !== null);
    }
  }

  function filterOutput() {
    let filteredData = searchByName();

    filteredData = filteredData.sort((a, b) => {
      if (sortPop === "L-H") return a.population - b.population;
      else if (sortPop === "H-L") return b.population - a.population;
      //   return 0;
    });

    filteredData = filteredData.sort((a, b) => {
      if (area === "L-H") return a.area - b.area;
      else if (area === "H-L") return b.area - a.area;
      //   return 0;
    });

    return filteredData;
  }

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search by name or capital"
      />
      <select value={sortPop} onChange={(e) => setSortPop(e.target.value)}>
        <option>-- Sort by name --</option>
        <option value="H-L">High to Low</option>
        <option value="L-H">Low to high</option>
      </select>

      <select value={area} onChange={(e) => setArea(e.target.value)}>
        <option>-- Sort by area --</option>
        <option value="H-L">High to Low</option>
        <option value="L-H">Low to high</option>
      </select>

      {loading && <p>Loading...</p>}
      {/* {data.length != 0 ? <p>yes</p> : <p>no</p>} */}
      {data &&
        filterOutput().map((country) => (
          <div key={country.id} className="table">
            <p>{country.name}</p>
            <p>{country.capital}</p>
            <p>{country.population}</p>
            <p>{country.region}</p>
            <p>{country.area}</p>
          </div>
        ))}
    </div>
  );
}

export default Country;
