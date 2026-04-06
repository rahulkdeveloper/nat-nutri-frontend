import React from "react";
import ProductCard from "../components/ProductCard";
import bajraImg from "../assets/bajra.jpeg"

const makhanaProducts = [
  {
    title: "Roasted Makhana (Black paper & Rock salt)",
    img: "https://res.cloudinary.com/dlfuxeq5r/image/upload/v1775493978/uploads/imml3rbkhek1bxlpj7og.jpg",
    description:"Healthy roasted snack rich in protein.",
    points: [
      "High Protein Snack",
      "Low Calories",
      "Perfect for Healthy Diet",
      "Premium Quality Seeds",
    ],
  },
  {
    title: "Roasted Makhana (Moringa)",
    img: "https://res.cloudinary.com/dlfuxeq5r/image/upload/v1775494015/uploads/e3a2h0gvqtnllsbeaxsg.jpg",
    description:"Healthy roasted snack rich in protein.",
    points: [
      "Stone Ground Atta",
      "Rich in Fiber",
      "No Chemicals",
      "Fresh Packed",
    ],
  },
  {
    title: "Roasted Makhana (Pure Desi ghee)",
    img: "https://res.cloudinary.com/dlfuxeq5r/image/upload/v1775494048/uploads/wsqkfwwtesogokta4iug.jpg",
    description:"Healthy roasted snack rich in protein.",
    points: [
      "Authentic Indian Spices",
      "Strong Aroma",
      "Premium Ingredients",
      "Healthy Cooking",
    ],
  },
];

const multigrainProducts = [
  {
    title: "Bajra",
    img: "https://res.cloudinary.com/dlfuxeq5r/image/upload/v1775491997/uploads/b8fhawsto9ygb4vjsnh0.jpg",
    description:"Healthy roasted snack rich in protein.",
    points: [
      "High Protein Snack",
      "Low Calories",
      "Perfect for Healthy Diet",
      "Premium Quality Seeds",
    ],
  },
  {
    title: "Maruaa",
    img: "https://res.cloudinary.com/dlfuxeq5r/image/upload/v1775492644/uploads/jdojbyfwknssn8bysjlp.jpg",
    description:"Healthy roasted snack rich in protein.",
    points: [
      "Stone Ground Atta",
      "Rich in Fiber",
      "No Chemicals",
      "Fresh Packed",
    ],
  },
  {
    title: "Makka",
    img: "https://res.cloudinary.com/dlfuxeq5r/image/upload/v1775492709/uploads/m8d5tpdvgucgm0vbcehe.jpg",
    description:"Healthy roasted snack rich in protein.",
    points: [
      "Authentic Indian Spices",
      "Strong Aroma",
      "Premium Ingredients",
      "Healthy Cooking",
    ],
  },
  {
    title: "Jwar",
    img: "https://res.cloudinary.com/dlfuxeq5r/image/upload/v1775492788/uploads/g8cpganjnx6xm79mryzn.jpg",
    description:"Healthy roasted snack rich in protein.",
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

      <section className="products-hero d-flex align-items-center text-white text-center" style={{
          backgroundImage: `url(https://res.cloudinary.com/dlfuxeq5r/image/upload/v1775491384/uploads/dmy6zrzdvntlp1u9sweo.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "50vh",
        }}>
        <div className="container">
          <h1 className="fw-bold">Our Products</h1>
          <p className="col-lg-6 mx-auto">
            Discover healthy and delicious nutrition products from NatNutri
            made with premium natural ingredients.
          </p>
        </div>
      </section>

      {/* OUR PRODUCTS */}

      {/* <section className="container py-5">

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
      </section> */}

      {/* Makhana PRODUCTS */}

      <section className="bg-light py-5">

        <div className="container">

          <h2 className="text-center fw-bold mb-5">
            Makhana
          </h2>

          <div className="row g-4">

            {makhanaProducts.map((item)=>(
              <div className="col-md-4 col-sm-6 d-flex justify-content-center" key={item}>

                <ProductCard product = {item}/>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* MultiGrain PRODUCTS */}

      <section className="bg-light py-5">

        <div className="container">

          <h2 className="text-center fw-bold mb-5">
            Multigrains
          </h2>

          <div className="row g-4">

            {multigrainProducts.map((item)=>(
              <div className="col-md-3 col-sm-6" key={item}>

                <ProductCard product = {item} comingSoon={true}/>

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