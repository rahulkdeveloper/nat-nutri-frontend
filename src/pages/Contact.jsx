import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div>

      {/* HERO SECTION */}

      <section className="contact-hero text-white text-center d-flex align-items-center">
        <div className="container">
          <h1 className="fw-bold mb-3">Contact & Get in Touch</h1>
          <p className="col-lg-7 mx-auto">
            We'd love to hear from you. Reach out for distribution, partnerships
            or general inquiries.
          </p>
        </div>
      </section>


      {/* CONTACT INFO */}

      <section className="container py-5">
        <div className="row g-4 text-center align-items-stretch">

          <div className="col-md-3 col-6 d-flex">
            <div className="contact-card w-100">
              <FaLocationDot size={35} className="text-success mb-3" />
              <h6>Address</h6>
              <p>Rohini Sector 37, Delhi</p>
            </div>
          </div>

          <div className="col-md-3 col-6">
            <div className="contact-card">
              <FaPhone size={35} className="text-success mb-3" />
              <h6>Phone</h6>
              <p>+91 9876543210</p>
            </div>
          </div>

          <div className="col-md-3 col-6">
            <div className="contact-card">
              <MdEmail size={35} className="text-success mb-3" />
              <h6>Email</h6>
              <p>info@natnutri.com</p>
            </div>
          </div>

          <div className="col-md-3 col-6">
            <div className="contact-card">
              <h6 className="mb-3">Follow Us</h6>

              <div className="d-flex justify-content-center gap-3 social-icons">

                <FaFacebookF />
                <FaInstagram />
                <FaTwitter />
                <FaYoutube />

              </div>
            </div>
          </div>

        </div>
      </section>


      {/* CONTACT FORM */}

      <section className="container pb-5">

        <div className="row align-items-stretch g-4">

          <div className="col-lg-6">

            <img
              src="https://images.unsplash.com/photo-1572449043416-55f4685c9bb7"
              className="img-fluid rounded shadow"
              alt="contact"
            />

          </div>

          <div className="col-lg-6 d-flex">

            <div className="contact-form shadow p-4 rounded w-100">

              <h3 className="mb-4">Send Message</h3>

              <form>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone number"
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Your Message"
                  />
                </div>

                <button className="btn btn-success w-100">
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>



      {/* DISTRIBUTION CTA SECTION */}

      <section className="distribution-section text-center text-white">

        <div className="container">

          <h2 className="fw-bold mb-3">
            Get In Touch for Distribution & Bulk Orders
          </h2>

          <p className="col-lg-7 mx-auto">
            Partner with Nat Nutri and grow your business with premium
            quality nutrition products.
          </p>

          <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">

            <button className="btn btn-warning fw-semibold px-4">
              Contact on WhatsApp
            </button>

            <button className="btn btn-light px-4">
              Call Us Now
            </button>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Contact;