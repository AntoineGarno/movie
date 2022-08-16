import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../logo.png";

const Navigation = () => {
  return (
    <div>
      <div className="d-flex align-items-center container-fluid p-3 ">
        <div className="col-sm-1 col-md-1 col-lg-4 ">
          <NavLink exact to="/" activeClassName="nav-active">
            <img src={logo} alt="Logo" className="logo" />
          </NavLink>
        </div>

        <div className="navigation rounded-pill col-sm-6 col-md-8 col-lg-5 m-3 d-flex flex-row justify-content-between p-3">
          <NavLink exact to="/" activeClassName="nav-active">
            Home
          </NavLink>
          <NavLink exact to="/search" activeClassName="nav-active">
            Search
          </NavLink>

          <NavLink exact to="/categories" activeClassName="nav-active">
            Categories
          </NavLink>

          <NavLink exact to="/popular" activeClassName="nav-active">
            Popular
          </NavLink>
          {/* <NavLink exact to="/loups" activeClassName="nav-active">
            Loupe
          </NavLink> */}

          <i class="fa fa-bell px-2" aria-hidden="true"></i>
          <img
            src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt=""
            className="navImg"
          />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
