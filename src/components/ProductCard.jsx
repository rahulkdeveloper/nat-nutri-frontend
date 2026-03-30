import React from "react";

const ProductCard = ({ comingSoon = false }) => {
  return (
    <div className="product-card position-relative">

      {/* Badge */}
      {comingSoon && (
        <span className="badge bg-danger position-absolute top-0 end-0 m-2">
          Coming Soon
        </span>
      )}

      <img
        src="https://cdn.cdnparenting.com/articles/2020/02/26165051/Roasted-Makhana-Recipe.webp"
        alt=""
        className="img-fluid"
      />

      <div className="p-3">
        <h6 className="fw-bold">Roasted Makhana</h6>

        <p className="text-muted small">
          Healthy roasted snack rich in protein.
        </p>

        <button
          className="btn btn-success btn-sm w-100"
          disabled={comingSoon}
        >
          {comingSoon ? "Coming Soon" : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;