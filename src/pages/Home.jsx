import React from "react";
import homePageImage2 from "../assets/home2.jpeg";
import natnutriImage1 from "../assets/natnutri1.jpeg"

const HomePage = () => {
  return (
    <div>

      {/* HERO */}

      <section className="hero-section d-flex align-items-center">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-6">

              <h1 className="fw-bold hero-title">
                Healthy Snacking With
                <span className="text-success"> NatNutri</span>
              </h1>

              <p className="hero-text">
                Discover delicious and healthy snacks like roasted makhana,
                roasted chana, premium atta and spices made from natural
                ingredients.
              </p>

              <button className="btn btn-success px-4 me-3">
                Shop Now
              </button>

              <button className="btn btn-outline-dark px-4">
                Explore Products
              </button>

            </div>

            <div className="col-lg-6">

              <img
                src="https://cdn.cdnparenting.com/articles/2020/02/26165051/Roasted-Makhana-Recipe.webp"
                className="img-fluid hero-img"
                alt=""
              />

            </div>

          </div>

        </div>

      </section>

      {/* FEATURED PRODUCTS */}

      <section className="container py-5">

        <h2 className="text-center fw-bold mb-5">
          Our Popular Products
        </h2>

        <div className="row g-4">

          {["Roasted Makhana","Roasted Chana","Atta","Masala"].map((item)=>(
            <div className="col-md-3 col-6" key={item}>

              <div className="product-home-card">

                <img
                  src="https://cdn.cdnparenting.com/articles/2020/02/26165051/Roasted-Makhana-Recipe.webp"
                  className="img-fluid"
                />

                <div className="p-3 text-center">

                  <h6 className="fw-bold">
                    {item}
                  </h6>

                  <button className="btn btn-success btn-sm mt-2">
                    View Product
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* BENEFITS OF MAKHANA */}

      <section className="makhana-benefits">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-6">

              <img
                src="https://cdn.cdnparenting.com/articles/2020/02/26165051/Roasted-Makhana-Recipe.webp"
                className="img-fluid rounded shadow"
                alt=""
              />

            </div>

            <div className="col-lg-6">

              <h2 className="fw-bold mb-4">
                Benefits of Makhana
              </h2>

              <ul className="benefits-list">

                <li>Rich in Protein & Calcium</li>
                <li>Low Calories Healthy Snack</li>
                <li>Supports Weight Loss</li>
                <li>Good for Heart Health</li>
                <li>Rich in Antioxidants</li>

              </ul>

              <button className="btn btn-success mt-3">
                Shop Makhana
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* LIFESTYLE IMAGE */}

      <section className="lifestyle-section">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-6">

              <h2 className="fw-bold">
                Healthy Lifestyle Starts With Healthy Food
              </h2>

              <p>
                NatNutri brings natural and healthy snacks for your daily
                lifestyle. Enjoy guilt-free snacks anytime.
              </p>

              <button className="btn btn-success">
                Discover More
              </button>

            </div>

            <div className="col-lg-6">

              <img
                src={homePageImage2}
                className="img-fluid rounded"
                alt="girl holding product"
              />

            </div>

          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}

      <section className="why-section">

        <div className="container">

          <h2 className="text-center fw-bold mb-5">
            Why Choose NatNutri
          </h2>

          <div className="row g-4 text-center">

            <div className="col-md-3">
              <div className="why-card">
                <h5>100% Natural</h5>
                <p>No preservatives used</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="why-card">
                <h5>Premium Quality</h5>
                <p>Carefully selected ingredients</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="why-card">
                <h5>Healthy Snacks</h5>
                <p>Perfect for daily diet</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="why-card">
                <h5>Trusted Brand</h5>
                <p>Loved by many customers</p>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="home-cta text-center">

        <div className="container">

          <h2 className="fw-bold">
            Ready To Eat Healthy?
          </h2>

          <p>
            Buy NatNutri products today from your favorite marketplace.
          </p>

          <button className="btn btn-light px-4">
            Where To Buy
          </button>

        </div>

      </section>

    </div>
  );
};

export default HomePage;