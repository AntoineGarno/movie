import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navigation = () => {
  return (
    <div className="d-flex flex-row m-3 align-items-center container-fluid bg-transparent ">
      <div className="bg-transparen col-3">
        <NavLink exact to="/" activeClassName="nav-active">
          <img src={logo} alt="Logo" className="logo" />
        </NavLink>
      </div>

      <div className="navigation rounded-pill col-sm-3 col-lg-6 m-3 d-flex flex-row justify-content-between p-4">
        <div>LOGO HOME</div>
        <NavLink exact to="/search" activeClassName="nav-active">
          Search
        </NavLink>

        <NavLink exact to="/categories" activeClassName="nav-active">
          Categories
        </NavLink>

        <NavLink exact to="" activeClassName="nav-active">
          Popular
        </NavLink>
        <NavLink exact to="/loups" activeClassName="nav-active">
          Loupe
        </NavLink>
        <NavLink exact to="/bell" activeClassName="nav-active">
          Bell Badge
        </NavLink>
        <NavLink exact to="/photo" activeClassName="nav-active">
          Photo
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
