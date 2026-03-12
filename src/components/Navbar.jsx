import React from "react";
import { Link } from "react-router-dom";
import NatNutriLogo from '../assets/logo.jpeg'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container" >
        {/* djjd  */}

        {/* Logo */}
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <img
            src={NatNutriLogo}
            alt="logo"
            width="80"
            height="60"
            className="me-2"
          />
          Nat Nutri
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
          <ul className="navbar-nav gap-lg-3">

            <li className="nav-item">
              <Link className="nav-link fw-medium" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-medium" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-medium" to="/products">Products</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-medium" to="/recipes">Recipes</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-medium" to="/our-story">Our Story</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-medium" to="/where-to-buy">Where to Buy</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-medium" to="/contact-us">Contact us</Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;