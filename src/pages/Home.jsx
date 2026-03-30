import React from "react";
import homePageImage2 from "../assets/home2.jpeg";
import natnutriImage1 from "../assets/natnutri1.jpeg";
import product1 from "../assets/product1.jpeg";
import { Link } from "react-router-dom";
import "./home.css";

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

              <Link className="btn btn-success px-4 me-3" to={"/prodcuts"}>
                Shop Now
              </Link>

              <Link className="btn btn-outline-dark px-4" to={"/products"}>
                Explore Products
              </Link>
            </div>

            <div className="col-lg-6 text-center mt-4">
              {/* <img
                src={homeHeroImg}
                className="img-fluid"
                style={{
                  maxHeight: "650px",
                  maxWidth: "500px",
                  width: "100%"
                }}
              /> */}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}

      {/* <section className="container py-5">
        <h2 className="text-center fw-bold mb-5">Our Popular Products</h2>

        <div className="row g-4">
          {["Roasted Makhana", "Roasted Chana", "roasted"].map(
            (item) => (
              <div className="col-md-3 col-6" key={item}>
                <div className="product-home-card">
                  <img
                    src={product1}
                    className="img-fluid"

                  />

                  <div className="p-3 text-center">
                    <h6 className="fw-bold">{item}</h6>

                    <button className="btn btn-success btn-sm mt-2">
                      View Product
                    </button>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </section> */}

      {/* categories section  */}

      <section className="categories-section py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Our Categories</h2>

          <div className="row g-4">
            {/* MAKHANA */}

            <div className="col-md-6">
              <div className="category-card">
                <img src={natnutriImage1} alt="makhana" />

                <div className="category-overlay">
                  <h3>Makhana</h3>

                  <p>
                    Healthy roasted makhana snacks for your daily nutrition.
                  </p>

                  <Link className="btn btn-light" to={"/products"}>
                    Explore
                  </Link>
                </div>
              </div>
            </div>

            {/* MULTIGRAIN */}

            <div className="col-md-6">
              <div className="category-card">
                <img
                  src="https://images.unsplash.com/photo-1586201375761-83865001e31c"
                  alt="multigrain"
                />

                <div className="category-overlay">
                  <h3>Multigrain</h3>

                  <p>
                    Premium atta and multigrain products for healthy living.
                  </p>

                  <Link className="btn btn-light" to={"/products"}>
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS OF MAKHANA */}

      <section className="makhana-benefits">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src={natnutriImage1}
                className="img-fluid rounded shadow lifestyle-img"
                alt=""
              />
            </div>

            <div className="col-lg-6 mt-4">
              <h2 className="fw-bold mb-4">Benefits of Makhana</h2>

              <div className="benefits-grid">
                <div className="benefit-item">
                  <span className="benefit-icon">💪</span>
                  <div>
                    <h6>High Protein</h6>
                    <p>Helps build muscle and keeps you energized.</p>
                  </div>
                </div>

                <div className="benefit-item">
                  <span className="benefit-icon">⚖️</span>
                  <div>
                    <h6>Low Calories</h6>
                    <p>Perfect healthy snack for weight management.</p>
                  </div>
                </div>

                <div className="benefit-item">
                  <span className="benefit-icon">❤️</span>
                  <div>
                    <h6>Heart Friendly</h6>
                    <p>Supports healthy cholesterol levels.</p>
                  </div>
                </div>

                <div className="benefit-item">
                  <span className="benefit-icon">🛡️</span>
                  <div>
                    <h6>Rich in Antioxidants</h6>
                    <p>Boosts immunity and protects the body.</p>
                  </div>
                </div>
              </div>

              <Link className="btn btn-success mt-4 px-4" to={"/products"}>
                Shop Makhana
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="row align-items-center g-4">
          {/* LEFT IMAGE */}
          

          {/* RIGHT CONTENT */}
          <div className="col-lg-6 col-12">
            <h2 className="fw-bold mb-4">Health Conscious Choice</h2>

            <div className="row g-3">
              <div className="col-sm-6 col-12">
                <div className="health-card p-3">
                  <h6>Good for Diabetes</h6>
                  <p>Low glycemic index makes it safe for sugar patients.</p>
                </div>
              </div>

              <div className="col-sm-6 col-12">
                <div className="health-card p-3">
                  <h6>Weight Management</h6>
                  <p>Low in calories and keeps you full for longer.</p>
                </div>
              </div>

              <div className="col-sm-6 col-12">
                <div className="health-card p-3">
                  <h6>Heart Health</h6>
                  <p>Helps control cholesterol and supports heart function.</p>
                </div>
              </div>

              <div className="col-sm-6 col-12">
                <div className="health-card p-3">
                  <h6>Digestive Health</h6>
                  <p>Easy to digest and supports gut health.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12 text-center">
            <img
              src={
                "https://cdn.cdnparenting.com/articles/2020/02/26165051/Roasted-Makhana-Recipe.webp"
              } // replace with your image
              alt="Makhana Health Benefits"
              className="img-fluid rounded shadow"
            />
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

              <button className="btn btn-success">Discover More</button>
            </div>

            <div className="col-lg-6 text-center mt-4">
              <img
                src={homePageImage2}
                className="img-fluid rounded lifestyle-img"
                alt="girl holding product"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}

      <section className="why-section">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Why Choose NatNutri</h2>

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
          <h2 className="fw-bold">Ready To Eat Healthy?</h2>

          <p>Buy NatNutri products today from your favorite marketplace.</p>

          <Link className="btn btn-light px-4" to={"/where-to-buy"}>
            Where To Buy
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
