import React from "react";
import "./Home.css";
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="Home">
      <div className="lander">
        <h1>ATechno</h1>
        <p className="text-muted">A Node Base Application</p>
        <Link to="/admin/dashboard">Go to the software engineering page</Link><br/>
      </div>
    </div>
  );
}
