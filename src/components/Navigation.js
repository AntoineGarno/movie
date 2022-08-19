import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../logo.png";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
  return (
    <div>
      <div className="d-flex align-items-center container-fluid">
        <div className="col-sm-1 col-md-1 col-lg-4 d-sm-none d-md-none d-lg-block ">
          <NavLink exact to="/" activeClassName="nav-active">
            <img src={logo} alt="Logo" className="logo" />
          </NavLink>
        </div>

        <div className="navigation rounded-pill col-sm-12 col-md-12 col-lg-5 m-3 d-flex flex-row justify-content-between p-3  d-sm-none d-md-none d-lg-block">
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
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="d-lg-none d-md-block navigationMobile"
      >
        <Container>
          <Navbar.Brand href="#home">
            <NavLink exact to="/" activeClassName="nav-active">
              <img src={logo} alt="Logo" id="logoMobile" />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                exact
                to="/"
                activeClassName="nav-active"
                className="fs-2"
              >
                Home
              </NavLink>
              <NavLink
                exact
                to="/search"
                activeClassName="nav-active"
                className="fs-2"
              >
                Search
              </NavLink>
            </Nav>
            <Nav>
              <NavLink
                exact
                to="/categories"
                activeClassName="nav-active"
                className="fs-2"
              >
                Categories
              </NavLink>
              <NavLink
                exact
                to="/popular"
                activeClassName="nav-active"
                className="fs-2"
              >
                Popular
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
