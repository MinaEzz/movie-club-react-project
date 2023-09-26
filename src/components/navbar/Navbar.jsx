import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "../../images/logo.png";

function Navbar({ searchMethod }) {
  const [navbarActive, setNavbarActive] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState(false);
  const [navbarIcon, setNavbarIcon] = useState("fa-solid fa-bars");
  // toggle navbar state to change icon
  const navbarStateToggle = () => {
    if (!navbarActive) {
      setNavbarActive(true);
      setNavbarIcon("fa-solid fa-xmark");
    } else {
      setNavbarActive(false);
      setNavbarIcon("fa-solid fa-bars");
    }
  };
  // change backround with scroll
  const changeBg = () => {
    if (window.scrollY >= 30) {
      if (!navbarBackground) {
        setNavbarBackground(true);
      }
    } else {
      setNavbarBackground(false);
    }
  };
  window.addEventListener("scroll", changeBg);
  return (
    <nav
      id="navbar"
      className={
        navbarBackground || navbarActive
          ? "navbar navbar-expand-lg fixed-top f-wth navbar-active"
          : "navbar navbar-expand-lg fixed-top f-wth"
      }
    >
      <div className="container">
        <Link className="logo" to="/">
          <img src={logo} alt="logo" />
        </Link>
        {/* ./logo */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={navbarStateToggle}
        >
          <i className={navbarIcon}></i>
        </button>
        {/* ./navbar-toggler */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-content p-2 d-flex flex-wrap">
            <form
              className="d-flex"
              role="search"
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <input
                className="form-control"
                type="text"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => {
                  searchMethod(e.target.value);
                }}
              />
              <button type="submit">Search</button>
            </form>
            <ul className="nav-links d-flex flex-wrap">
              <li>
                <Link to="/login">login</Link>
              </li>
              <li>
                <Link className="link-btn ">join us for free</Link>
              </li>
            </ul>
          </div>
          {/* ./navbar-content */}
        </div>
        {/* ./collapse */}
      </div>
    </nav>
  );
}

export default Navbar;
