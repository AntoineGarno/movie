import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../logo.png";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink exact to="/" activeClassName="nav-active">
        Popular
      </NavLink>
      <NavLink exact to="/" activeClassName="nav-active">
        <img src={logo} alt="Logo" className="logo" />
      </NavLink>

      <NavLink exact to="/categories" activeClassName="nav-active">
        Categories
      </NavLink>
      <NavLink exact to="/search" activeClassName="nav-active">
        Search
      </NavLink>
    </div>
  );
};

export default Navigation;
