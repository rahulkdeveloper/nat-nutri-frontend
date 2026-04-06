import React from "react";

const ProductCard = ({ product,comingSoon = false }) => {
  return (
    <div className="product-card position-relative">

      {/* Badge */}
      {comingSoon && (
        <span className="badge bg-danger position-absolute top-0 end-0 m-2">
          Coming Soon
        </span>
      )}

      <img
        src={product.img}
        alt=""
        className="img-fluid"
      />

      <div className="p-3">
        <h6 className="fw-bold">{product.title}</h6>

        <p className="text-muted small">
          {product.description || ""}
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