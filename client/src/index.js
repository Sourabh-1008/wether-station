import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "././contexts/AuthContect";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />
  // <Router>
  //   <AuthProvider>
  //     <Routes>
  //       <Route path="/*" element={} />
  //     </Routes>
  //   </AuthProvider>
  // </Router>
);
