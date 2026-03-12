import React, { useEffect } from "react";
import AOS from "aos";
import natnutriImage1 from "../assets/natnutri1.jpeg";

const OurStory = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      {/* HERO SECTION */}

      <section className="story-hero text-white d-flex align-items-center justify-content-center text-center">
        <div className="container">
          <h1 className="display-4 fw-bold">Our Story</h1>
          <p className="lead">The journey behind Nat Nutri</p>
        </div>
      </section>

      {/* DESCRIPTION */}

      <section className="container py-5 text-center" data-aos="fade-up">
        <h2 className="fw-bold mb-3">How It Started</h2>

        <p className="text-muted col-lg-8 mx-auto">
          Nat Nutri was founded with a simple vision – to provide natural,
          healthy and nutritious food options that help people live better. Our
          journey started with a small team passionate about health and wellness
          and has grown into a trusted nutrition brand.
        </p>
      </section>

      {/* OUR JOURNEY TIMELINE */}

      <section className=" py-5 rounded-2" style={{background:"#f8f9fa"}}>
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Our Journey</h2>

        <div className="row align-content-center">
          <div className="col-lg-6">
            <div className="timeline">
              <div className="timeline-item" data-aos="fade-right">
                <h5>2018</h5>
                <p>
                  Nat Nutri started with a mission to deliver healthy nutrition.
                </p>
              </div>

              <div className="timeline-item" data-aos="fade-left">
                <h5>2020</h5>
                <p>Launched our first natural product line.</p>
              </div>

              <div className="timeline-item" data-aos="fade-right">
                <h5>2022</h5>
                <p>Expanded distribution across multiple cities.</p>
              </div>

              <div className="timeline-item" data-aos="fade-left">
                <h5>2024</h5>
                <p>Built a strong community of health conscious customers.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src={natnutriImage1}
              className="img-fluid rounded shadow timeline-img"
              style={{
                maxWidth:"500px",
                width:"100%",
                height:"350px"
              }}
              alt=""
            />
          </div>
        </div>
        </div>
      </section>

      {/* VISION & MISSION */}

      <section className="container py-5">
        <div className="row g-4">
          <div className="col-md-6" data-aos="fade-right">
            <div className="card shadow border-0 p-4">
              <h3 className="fw-bold mb-3">Our Vision</h3>

              <p className="text-muted">
                To become a trusted global brand that inspires healthier living
                through natural nutrition.
              </p>
            </div>
          </div>

          <div className="col-md-6" data-aos="fade-left">
            <div className="card shadow border-0 p-4">
              <h3 className="fw-bold mb-3">Our Mission</h3>

              <p className="text-muted">
                To provide high-quality natural nutrition products that support
                a balanced and healthy lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY IN PICTURES */}

      <section className="container py-5">
        <h2 className="text-center fw-bold mb-5">Our Journey in Pictures</h2>

        <div className="row g-4">
          <div className="col-md-3 col-6" data-aos="zoom-in">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
              className="img-fluid gallery-img"
            />
          </div>

          <div className="col-md-3 col-6" data-aos="zoom-in">
            <img
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061"
              className="img-fluid gallery-img"
            />
          </div>

          <div className="col-md-3 col-6" data-aos="zoom-in">
            <img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
              className="img-fluid gallery-img"
            />
          </div>

          <div className="col-md-3 col-6" data-aos="zoom-in">
            <img
              src="https://cdn.cdnparenting.com/articles/2020/02/26165051/Roasted-Makhana-Recipe.webp"
              className="img-fluid gallery-img"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
