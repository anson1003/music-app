import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <span
            style={{
              background: "linear-gradient(to right, #FD8D14, #C51605)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            <strong>RateSync</strong>
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/music">
                Music
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/lists">
                Lists
              </Link>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link"
                type="button"
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <strong>•••</strong>
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/contact">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/faq">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/terms">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/privacy">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <div className="d-flex">
            <form className="input-group">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-dark" type="submit">
                Search
              </button>
            </form>
            <Link className="btn text-light ms-3" to="/login">
              Login
            </Link>
            <Link className="btn text-light ms-2" to="/signup">
              Signup
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
