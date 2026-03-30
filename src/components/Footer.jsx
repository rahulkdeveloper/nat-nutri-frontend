import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import NatNutriLogo from "../assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* LEFT - LOGO + SOCIAL */}
          <div className="col-md-4 mb-4">
            <div className="d-flex align-items-center mb-3">
              <img
                src={NatNutriLogo}
                alt="logo"
                width="70"
                height="70"
                className="me-2"
              />
              <h5 className="mb-0">Nat Nutri</h5>
            </div>

            <p className="">
              Natural nutrition products for a healthy lifestyle.
            </p>

            <div className="d-flex gap-3 mt-3 fs-5">
              <a
                href="https://www.facebook.com/share/17zwdEJFUD/"
                target="_blank"
                className="text-light social-icon"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/natnutri.in?igsh=MW85MnU4N21ucGh0cw=="
                target="_blank"
                className="text-light social-icon"
              >
                <FaInstagram />
              </a>

              <a
                href="https://youtube.com/@natnutriofficial?si=G-3hNgKDwYX8d-4y"
                target="_blank"
                className="text-light social-icon"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* MIDDLE - QUICK LINKS */}
          <div className="col-md-4 mb-4">
            <h5 className="mb-3">Quick Links</h5>

            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/about" className="footer-link">
                  About
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/products" className="footer-link">
                  Products
                </Link>
              </li>

              {/* <li className="mb-2">
                <Link to="/recipes" className="footer-link">Recipes</Link>
              </li> */}

              <li className="mb-2">
                <Link to="/where-to-buy" className="footer-link">
                  Where to Buy
                </Link>
              </li>
            </ul>
          </div>

          {/* RIGHT - CONTACT + SUBSCRIBE */}
          <div className="col-md-4 mb-4">
            <h5 className="mb-3">Contact</h5>

            <p className="mb-1">
              📍1119A Sugar Factory Road,
              Near New Pani Tanki ,Chhota Bariyarpur City ,
              Purbi Champaran, Bihar-84540
            </p>

            <p className="mb-3">✉ natnutrifresh@gmail.com</p>

            <h6 className="mb-2">Subscribe</h6>

            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />

              <button className="btn btn-success">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-top border-secondary mt-4 pt-3 text-center">
          © 2026 Nat Nutri. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
