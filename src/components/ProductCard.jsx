import React from "react";

export default function ProductCard({ product, removeProduct }) {
  return (
    <div className={`card ${!product.inStock ? "outOfStockClass" : ""}`}>
      <h2>{product.name}</h2>
      <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>
      <button onClick={() => removeProduct(product.id)}>Remove</button>
    </div>
  );
}