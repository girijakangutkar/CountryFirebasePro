import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext([]);

function CountryContext({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCountries();
  }, []);

  const url = import.meta.env.VITE_URI;

  async function fetchCountries() {
    setLoading(true);
    try {
      const response = await fetch(`${url}`);
      //   const info = response.data.countries;
      const info = await response.json();
      console.log(info);
      setData(Object.values(info));
    } catch (err) {
      console.log("Error occurred:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <DataContext.Provider value={{ data, loading, setData, setLoading }}>
      {children}
    </DataContext.Provider>
  );
}

export default CountryContext;
