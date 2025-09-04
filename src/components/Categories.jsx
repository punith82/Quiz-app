// Categories.jsx
import React from "react";
import { NavLink } from "react-router-dom";

function Categories() {
  return (
    <div className="flex flex-col items-center bg-slate-800">
      {/* <h2
        className="inline-block text-2xl font-semibold mt-8 mb-6 text-white 
               bg-slate-700 px-6 py-2 rounded-full shadow-lg"
      >
        📚 Pick a Module
      </h2> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 w-full max-w-5xl mb-10">
        {[
          { name: "Data Structures and Algorithms", path: "/dsa" },
          { name: "Operating Systems", path: "/os" },
          { name: "Computer Networks", path: "/cn" },
          { name: "Database Management Systems", path: "/dbms" },
          { name: "Computer Architecture and Organization", path: "/cao" },
          { name: "Software Engineering", path: "/se" },
          { name: "Discrete Mathematics", path: "/dm" },
          { name: "Theory of Computation", path: "/tc" },
          { name: "Artificial Intelligence", path: "/ai" },
          { name: "Machine Learning", path: "/ml" },
        ].map((subject) => (
          <NavLink
            key={subject.path}
            to={subject.path}
            className="bg-slate-700 p-6 rounded-lg shadow-md 
                   text-white font-medium text-center 
                   hover:bg-slate-600 transition cursor-pointer "
          >
            {subject.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Categories;
