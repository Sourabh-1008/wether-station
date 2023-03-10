import { Link } from "react-router-dom";

import React from "react";

const LinkPage = () => {
  return (
    <div className="App">
      <h1>Links</h1>
      <Link to="/signup">Register</Link>
      <br />
      <Link to="/signin">Signin</Link>
      <br />
      <Link to="/admin/dashboard">Admin Dashbord</Link>
      <br />
      <Link to="/marketers-only">Marketers Only</Link>
      <br />
      <Link to="/hr-only">Human Resource personnels only</Link>
    </div>
  );
};

export default LinkPage;
