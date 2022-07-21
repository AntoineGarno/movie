import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../logo.png";

const Navigation = () => {
  return (
    <div>
      <div className="d-flex align-items-center container-fluid p-3 navigation">
        <div className="col-sm-1 col-md-1 col-lg-4 ">
          <NavLink exact to="/" activeClassName="nav-active">
            <img src={logo} alt="Logo" className="logo" />
          </NavLink>
        </div>

        <div className="navigation rounded-pill col-sm-6 col-md-8 col-lg-5 m-3 d-flex flex-row justify-content-between p-3">
          <div className="p-2">HOME</div>
          <NavLink exact to="/search" activeClassName="nav-active">
            Search
          </NavLink>

          <NavLink exact to="/categories" activeClassName="nav-active">
            Categories
          </NavLink>

          <NavLink exact to="" activeClassName="nav-active">
            Popular
          </NavLink>
          {/* <NavLink exact to="/loups" activeClassName="nav-active">
            Loupe
          </NavLink> */}
          <div className="p-3">Bell Badge</div>
          <div className="p-3">Photo </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
