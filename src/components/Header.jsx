// Header.js
import React from "react";
import { NavLink } from "react-router-dom";
import quizlogo from "../assets/quizlogo.jpeg";

function Header() {
  return (
    <>
      <div
        className="flex flex-row items-center gap-20 p-4
       bg-slate-800 text-white shadow-lg"
      >
        <img
          src={quizlogo}
          style={{ height: "50px" }}
          className="rounded-lg "
          alt=""
        />

        <nav className="flex gap-20 ">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/categories">Categories</NavLink>
        </nav>
      </div>
    </>
  );
}

export default Header;
