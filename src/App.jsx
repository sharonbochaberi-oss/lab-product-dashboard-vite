import React, { useState } from "react";
import ProductList from "./components/ProductList";
import "./App.css";

const initialProducts = [
  { id: 1, name: "Laptop", inStock: true },
  { id: 2, name: "Phone", inStock: false },
  { id: 3, name: "Tablet", inStock: true },
];

export default function App() {
  const [products, setProducts] = useState(initialProducts);

  const removeProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="app-container">
      <h1>Product Dashboard</h1>
      <ProductList products={products} removeProduct={removeProduct} />
    </div>
  );
}