import React from "react";
import Home from "./pages/Home";
import Women from "./pages/Women";
import Men from "./pages/Men";
import PlaceholderPage from "./pages/PlaceholderPage";

function normalizePath(pathname) {
  return pathname.replace(/\/+$/, "") || "/";
}

export default function App() {
  const path = normalizePath(window.location.pathname);

  if (path === "/women") return <Women />;
  if (path === "/men") return <Men />;
  if (["/journal", "/manifesto", "/contact"].includes(path)) {
    return <PlaceholderPage path={path} />;
  }

  return <Home />;
}
