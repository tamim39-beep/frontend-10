import React, { useState } from "react";
import "./style.css"; // Import file CSS

const products = [
  { id: 1, name: "Apple Watch", category: "Gadget" },
  { id: 2, name: "Denim Jacket", category: "Fashion" },
  { id: 3, name: "Wireless Mouse", category: "Gadget" },
  { id: 4, name: "Running Shoes", category: "Sport" },
  { id: 5, name: "Bluetooth Speaker", category: "Gadget" },
  { id: 6, name: "Yoga Pants", category: "Fashion" },
  { id: 7, name: "Football Jersey", category: "Sport" },
  { id: 8, name: "Smartphone Stand", category: "Gadget" },
  { id: 9, name: "Baseball Cap", category: "Fashion" },
  { id: 10, name: "Basketball Shoes", category: "Sport" },
];

const getCategoryClass = (category) => {
  switch (category) {
    case "Gadget":
      return "category-gadget";
    case "Fashion":
      return "category-fashion";
    case "Sport":
      return "category-sport";
    default:
      return "category-default";
  }
};

export default function ProductSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="content">
        <input
          type="text"
          placeholder="Search product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        {filteredProducts.length === 0 ? (
          <p className="no-result">Produk tidak ditemukan.</p>
        ) : (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <span
                  className={`category-tag ${getCategoryClass(
                    product.category
                  )}`}
                >
                  {product.category}
                </span>
                <h2 className="product-name">{product.name}</h2>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
