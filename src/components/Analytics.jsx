import React, { useContext } from "react";
import { DataContext } from "../context/countryContext";

function Analytics() {
  const { data, loading } = useContext(DataContext);

  return <div>Analytics</div>;
}

export default Analytics;
