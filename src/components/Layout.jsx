// Layout.jsx
import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
function Layout() {
  return (
    <div className="bg-slate-800">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
