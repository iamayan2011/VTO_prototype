import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex space-x-2">
      <Link to="/">Home</Link>
      <Link to="/demo">Demo</Link>
      <Link to="/demo2">Demo2</Link>
    </div>
  );
};

export default Navbar;
