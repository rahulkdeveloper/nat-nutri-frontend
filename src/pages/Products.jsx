import React from "react";

const products = [
  {
    title: "Roasted Makhana",
    img: "https://cdn.cdnparenting.com/articles/2020/02/26165051/Roasted-Makhana-Recipe.webp",
    points: [
      "High Protein Snack",
      "Low Calories",
      "Perfect for Healthy Diet",
      "Premium Quality Seeds",
    ],
  },
  {
    title: "NatNutri Atta",
    img: "https://cdn.cdnparenting.com/articles/2020/02/26165051/Roasted-Makhana-Recipe.webp",
    points: [
      "Stone Ground Atta",
      "Rich in Fiber",
      "No Chemicals",
      "Fresh Packed",
    ],
  },
  {
    title: "Masala Setu",
    img: "https://cdn.cdnparenting.com/articles/2020/02/26165051/Roasted-Makhana-Recipe.webp",
    points: [
      "Authentic Indian Spices",
      "Strong Aroma",
      "Premium Ingredients",
      "Healthy Cooking",
    ],
  },
  {
    title: "Healthy Mix",
    img: "https://cdn.cdnparenting.com/articles/2020/02/26165051/Roasted-Makhana-Recipe.webp",
    points: [
      "Nutritious Blend",
      "Energy Booster",
      "Natural Ingredients",
      "Perfect Snack",
    ],
  },
];

const ProductsPage = () => {
  return (
    <div>
      {/* HERO */}

      <section className="products-hero d-flex align-items-center text-white text-center">
        <div className="container">
          <h1 className="fw-bold">Our Products</h1>
          <p className="col-lg-6 mx-auto">
            Discover healthy and delicious nutrition products from NatNutri
            made with premium natural ingredients.
          </p>
        </div>
      </section>

      {/* OUR PRODUCTS */}

      <section className="container py-5">

        <h2 className="text-center fw-bold mb-5">
          Our Best Products
        </h2>

        {products.map((item, index) => (
          <div className="row align-items-center mb-5" key={index}>

            <div className={`col-lg-6 ${index % 2 !== 0 ? "order-lg-2" : ""}`}>
              <img
                src="https://cdn.cdnparenting.com/articles/2020/02/26165051/Roasted-Makhana-Recipe.webp"
                className="img-fluid rounded shadow"
                alt=""
              />
            </div>

            <div className="col-lg-6">

              <h3 className="fw-bold mb-3">
                {item.title}
              </h3>

              <ul className="product-points">
                {item.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>

              <button className="btn btn-success mt-3">
                View Product
              </button>

            </div>

          </div>
        ))}
      </section>

      {/* AVAILABLE PRODUCTS */}

      <section className="bg-light py-5">

        <div className="container">

          <h2 className="text-center fw-bold mb-5">
            Available Products
          </h2>

          <div className="row g-4">

            {[1,2,3,4].map((item)=>(
              <div className="col-md-3 col-sm-6" key={item}>

                <div className="product-card">

                  <img
                    src="https://cdn.cdnparenting.com/articles/2020/02/26165051/Roasted-Makhana-Recipe.webp"
                    alt=""
                    className="img-fluid"
                  />

                  <div className="p-3">

                    <h6 className="fw-bold">
                      Roasted Makhana
                    </h6>

                    <p className="text-muted small">
                      Healthy roasted snack rich in protein.
                    </p>

                    <button className="btn btn-success btn-sm w-100">
                      Buy Now
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}

      <section className="container py-5">

        <h2 className="text-center fw-bold mb-5">
          Why Choose NatNutri
        </h2>

        <div className="row text-center g-4">

          <div className="col-md-4">
            <div className="why-card">
              <h4>100% Natural</h4>
              <p>No chemicals or preservatives used.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="why-card">
              <h4>Premium Quality</h4>
              <p>Carefully sourced raw ingredients.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="why-card">
              <h4>Healthy Lifestyle</h4>
              <p>Designed for modern healthy living.</p>
            </div>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="products-cta text-white text-center">

        <div className="container">

          <h2 className="fw-bold">
            Ready to Taste Healthy Nutrition?
          </h2>

          <p>
            Order NatNutri products today and start your healthy journey.
          </p>

          <a className="btn btn-light mt-3 px-4">
            Where To Buy
          </a>

        </div>

      </section>

    </div>
  );
};

export default ProductsPage;