import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "25px",
        paddingBottom: "5px",
        background: "#ccc",
      }}
    >
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <NavLink to="/about" activeClassName="active">About</NavLink>
      </div>
      <div>
        <Link to="/contact">Contact</Link>
      </div>
      {/* <div>
        <Link to="/blog/javascript-tutorial">Users</Link>
      </div> */}
    </nav>
  );
};

export default Navbar;
