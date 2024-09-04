import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";

document.addEventListener("turbo:load", () => {

  const container = document.getElementById('root');
  const root = createRoot(container);
  root.render(
    <Router>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </Router>
  );
});