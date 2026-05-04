// Nexus BI — Entry point
// The app is built as a single HTML file.
// Vite serves it via index.html → this file is the React bootstrap.
// For Electron, the compiled dist/index.html is loaded directly.

import React from "react";
import ReactDOM from "react-dom/client";

// The full app is embedded in index.html as vanilla JS.
// This entry point exists only for Vite/Electron compatibility.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div id="app-mount" />
  </React.StrictMode>
);
