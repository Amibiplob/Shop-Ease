"use client";

import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <section className="container mx-auto px-4 py-10">
      {/* Heading */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold">All Products</h1>
        <p className="mt-3 text-gray-500">Explore our latest collection.</p>
      </div>

      {/* Category Filter */}
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full px-5 py-2 font-medium transition ${
              selectedCategory === category
                ? "bg-green-600 text-white"
                : "border border-gray-300 bg-white hover:border-green-600 hover:text-green-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products */}
      {products ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-gray-500">
              No products found.
            </div>
          )}
        </div>
      ) : (
        <h1 className="text-center">Loading</h1>
      )}
    </section>
  );
}
