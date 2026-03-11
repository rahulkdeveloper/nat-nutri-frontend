import React from "react";
import { FaAmazon, FaWhatsapp } from "react-icons/fa";
import { SiFlipkart } from "react-icons/si";
import BecomeDistributer from "../components/BecomeDistributer";
import meeshoIcon from '../assets/meesho.avif'

const WhereToBuy = () => {
  return (
    <div>

      {/* HERO */}

      <section className="buy-hero text-center text-white d-flex align-items-center">
        <div className="container">
          <h1 className="fw-bold mb-3">Where To Buy</h1>
          <p className="col-lg-6 mx-auto">
            Find Nat Nutri products on trusted marketplaces and get them
            delivered to your doorstep.
          </p>
        </div>
      </section>


      {/* MARKETPLACE SECTION */}

      <section className="container py-5">

        <h2 className="text-center fw-bold mb-5">
          Shop Online
        </h2>

        <div className="row g-4">

          {/* AMAZON */}

          <div className="col-md-3 col-6">
            <div className="buy-card text-center">
              <FaAmazon className="buy-icon amazon"/>
              <h5 className="mt-3">Amazon</h5>
              <p>Buy on Amazon</p>

              <button className="btn btn-dark w-100">
                Shop Now
              </button>
            </div>
          </div>

          {/* FLIPKART */}

          <div className="col-md-3 col-6">
            <div className="buy-card text-center">
              <SiFlipkart className="buy-icon flipkart"/>
              <h5 className="mt-3">Flipkart</h5>
              <p>Buy on Flipkart</p>

              <button className="btn btn-primary w-100">
                Shop Now
              </button>
            </div>
          </div>

          {/* MEESHO */}

          <div className="col-md-3 col-6">
            <div className="buy-card text-center">
              {/* <SiMeesho className="buy-icon meesho"/> */}
              <img
              src={meeshoIcon}
              height="50"
              width="50"
              />
              <h5 className="mt-3">Meesho</h5>
              <p>Shop on Meesho</p>

              <button className="btn btn-danger w-100">
                Shop Now
              </button>
            </div>
          </div>

          {/* WHATSAPP */}

          <div className="col-md-3 col-6">
            <div className="buy-card text-center">
              <FaWhatsapp className="buy-icon whatsapp"/>
              <h5 className="mt-3">WhatsApp</h5>
              <p>Order Directly</p>

              <button className="btn btn-success w-100">
                Chat Now
              </button>
            </div>
          </div>

        </div>

      </section>



      {/* TRUST SECTION */}

      <section className="trust-section text-center">

        <div className="container">

          <h2 className="fw-bold mb-3">
            Trusted by Thousands
          </h2>

          <p className="col-lg-6 mx-auto text-muted">
            Our products are loved by customers across India. Buy from trusted
            platforms and enjoy premium natural nutrition.
          </p>

          <div className="row mt-5">

            <div className="col-md-4">
              <h3 className="fw-bold text-success">10K+</h3>
              <p>Happy Customers</p>
            </div>

            <div className="col-md-4">
              <h3 className="fw-bold text-success">50+</h3>
              <p>Retail Partners</p>
            </div>

            <div className="col-md-4">
              <h3 className="fw-bold text-success">25+</h3>
              <p>Cities Covered</p>
            </div>

          </div>

        </div>

      </section>



      {/* DISTRIBUTOR CTA */}

      <BecomeDistributer/>

    </div>
  );
};

export default WhereToBuy;