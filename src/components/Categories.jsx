// Categories.jsx
import React from "react";
import { NavLink } from "react-router-dom";

function Categories() {
  return (
    <div className="flex flex-col">
      <h2>Select a Subject</h2>
      <NavLink to="/dsa">Data Structures and Algorithms </NavLink>
      <NavLink to="/os">Operating Systems </NavLink>
      <NavLink to="/cn">Computer Networks</NavLink>
      <NavLink to="/dbms">Database Management Systems</NavLink>
      <NavLink to="/cao">Computer Architecture and Organization</NavLink>
      <NavLink to="/se">Software Engineering</NavLink>
      <NavLink to="/dm">Discrete Mathematics</NavLink>
      <NavLink to="/tc">Theory of Computation</NavLink>
      <NavLink to="/ai">Artificial Intelligence</NavLink>
      <NavLink to="/ml">Machine Learning</NavLink>
    </div>
  );
}

export default Categories;
