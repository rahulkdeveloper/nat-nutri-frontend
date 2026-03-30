import React, { useEffect } from "react";
import AOS from "aos";
import { FaHeart } from "react-icons/fa";
import BecomeDistributer from "../components/BecomeDistributer";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      {/* HERO SLIDER */}

      <div id="aboutSlider" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061"
              className="d-block w-100 hero-img"
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
              className="d-block w-100 hero-img"
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
              className="d-block w-100 hero-img"
            />
          </div>
        </div>
      </div>

      {/* ABOUT SECTION */}

      <section className="container py-5 text-center" data-aos="fade-up">
        <h2 className="fw-bold mb-3">About Nat Nutri</h2>

        <p className="text-muted col-lg-8 mx-auto">
          Nat Nutri is committed to delivering natural and healthy nutrition
          products that support a balanced lifestyle. Our mission is to provide
          high-quality ingredients that help people live healthier lives.
        </p>
      </section>

      {/* MOST LOVED PRODUCTS */}

      {/* <section className="container py-5">
        <h2 className="text-center fw-bold mb-5">Most Loved Products</h2>

        <div className="row g-4">
          <div className="col-md-4" data-aos="zoom-in">
            <div className="card shadow border-0 product-card">
              <img
                src="https://images.unsplash.com/photo-1572449043416-55f4685c9bb7"
                className="card-img-top"
              />

              <div className="card-body text-center">
                <h5 className="card-title">Protein Mix</h5>

                <p className="text-muted">
                  High nutrition protein blend loved by thousands.
                </p>

                <FaHeart className="text-danger" />
              </div>
            </div>
          </div>

          <div className="col-md-4" data-aos="zoom-in">
            <div className="card shadow border-0 product-card">
              <img
                src="https://images.unsplash.com/photo-1572449043416-55f4685c9bb7"
                className="card-img-top"
              />

              <div className="card-body text-center">
                <h5 className="card-title">Energy Granola</h5>

                <p className="text-muted">
                  Healthy granola packed with nutrients.
                </p>

                <FaHeart className="text-danger" />
              </div>
            </div>
          </div>

          <div className="col-md-4" data-aos="zoom-in">
            <div className="card shadow border-0 product-card">
              <img
                src="https://images.unsplash.com/photo-1572449043416-55f4685c9bb7"
                className="card-img-top"
              />

              <div className="card-body text-center">
                <h5 className="card-title">Organic Seeds</h5>

                <p className="text-muted">
                  Pure organic seeds for daily nutrition.
                </p>

                <FaHeart className="text-danger" />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* OUR COMMUNITY */}

      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="fade-right">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
              className="img-fluid rounded shadow"
            />
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <h2 className="fw-bold mb-3">Our Community</h2>

            <p className="text-muted">
              Our growing community believes in natural nutrition and healthy
              living. Together we share recipes, experiences and inspiration for
              a healthier future.
            </p>
          </div>
        </div>
      </section>

      {/* BECOME DISTRIBUTOR */}

      <BecomeDistributer/>
    </div>
  );
};

export default About;
