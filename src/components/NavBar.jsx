import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <nav className="Navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "none")}
      >
        Countries
      </NavLink>
      <NavLink
        to="/analytics"
        className={({ isActive }) => (isActive ? "active" : "none")}
      >
        Analytics
      </NavLink>
      <NavLink
        to="/Add"
        className={({ isActive }) => (isActive ? "active" : "none")}
      >
        Add
      </NavLink>
    </nav>
  );
}

export default NavBar;
