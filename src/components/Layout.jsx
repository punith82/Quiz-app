// Layout.jsx
import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import Header from "./header";
function Layout() {
  return (
    <div className="app-container">
      <Header />

      <main>
        {/* This outlet will render all of your main pages */}
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
