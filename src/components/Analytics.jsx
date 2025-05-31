import React, { useContext, useEffect } from "react";
import { DataContext } from "../context/countryContext";

function Analytics() {
  const { data, loading } = useContext(DataContext);

  useEffect(() => {
    makeBetter();
  }, []);

  function makeBetter() {
    return [...data].filter((item) => item != null);
  }

  function totalCountries() {
    return [...data].filter((item) => item != null).map((el) => el.name).length;
  }

  function averageArea() {
    return [...data]
      .filter((ele) => ele != null)
      .map((ar) => ar.area)
      .reduce((acc, curr) => acc + curr, 0);
  }

  function topPopulation() {
    return [...data].filter((ele) => ele != null).map((ar) => ar.population);
  }

  return (
    <div>
      {loading && <p>Loading...</p>}
      Total Number of countries: {totalCountries()}
      <p>Total Area: {averageArea()}</p>
      <p>{topPopulation()}</p>
    </div>
  );
}

export default Analytics;
