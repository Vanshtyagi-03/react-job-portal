// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import "bootstrap/dist/css/bootstrap.min.css";
// import App from './App.jsx'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'animate.css';


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { SavedJobsProvider } from "./context/SavedJobsContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
   <SavedJobsProvider>
    <App />
    </SavedJobsProvider>
  </ThemeProvider>
);