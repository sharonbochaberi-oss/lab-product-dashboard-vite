import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ products, removeProduct }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          removeProduct={removeProduct}
        />
      ))}
    </div>
  );
}