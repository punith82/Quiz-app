import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout.jsx";

import Categories from "./components/Categories.jsx";
import DSA from "./pages/DSA.jsx";
import OS from "./pages/OS.jsx";
import CN from "./pages/CN.jsx";
import DBMS from "./pages/DBMS.jsx";
import CAO from "./pages/CAO.jsx";
import SE from "./pages/SE.jsx";
import DM from "./pages/DM.jsx";
import TC from "./pages/TC.jsx";
import AI from "./pages/AI.jsx";
import ML from "./pages/ML.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="categories" element={<Categories />} />
      <Route path="dsa" element={<DSA />} />
      <Route path="os" element={<OS />} />
      <Route path="cn" element={<CN />} />
      <Route path="dbms" element={<DBMS />} />
      <Route path="cao" element={<CAO />} />
      <Route path="se" element={<SE />} />
      <Route path="dm" element={<DM />} />
      <Route path="tc" element={<TC />} />
      <Route path="ai" element={<AI />} />
      <Route path="ml" element={<ML />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
