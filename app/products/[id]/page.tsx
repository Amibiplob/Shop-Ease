"use client";

import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import {
  ShoppingCart,
  Star,
  Truck,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";

import { products } from "@/data/products";
import { useCart } from "@/hooks/useCart";

export default function ProductDetailsPage() {
  const { addToCart } = useCart();

  const params = useParams();
  const id = Number(params.id);

  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-10">
      <div className="grid gap-10 lg:grid-cols-12">
        {/* Product Image */}
        <div className="lg:col-span-5">
          <div className="overflow-hidden rounded-2xl border bg-gray-50 p-6">
            <Image
              src={product.image}
              alt={product.name}
              width={700}
              height={700}
              priority
              className="mx-auto h-[500px] w-auto object-contain"
            />
          </div>
        </div>

        {/* Product Information */}
        <div className="space-y-6 lg:col-span-4">
          <div>
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              {product.category}
            </span>

            <h1 className="mt-4 text-4xl font-bold text-gray-900">
              {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-2">
              <Star size={18} className="fill-yellow-400 text-yellow-400" />

              <span className="font-medium">{product.rating}</span>

              <span className="text-gray-500">(120 Reviews)</span>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-green-600">
            ৳{product.price}
          </h2>

          <p className="leading-8 text-gray-600">{product.description}</p>

          {/* Colors */}
          <div>
            <h3 className="mb-3 font-semibold">Available Colors</h3>

            <div className="flex flex-wrap gap-3">
              {product.colors.map((color) => (
                <button
                  key={color}
                  className="rounded-full border px-4 py-2 text-sm transition hover:border-green-600 hover:text-green-600"
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h3 className="mb-3 font-semibold">Available Sizes</h3>

            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className="rounded-lg border px-5 py-2 transition hover:border-green-600 hover:text-green-600"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Stock */}
          <div className="flex items-center gap-3">
            <span className="font-semibold">Stock:</span>

            <span
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                product.inStock
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {product.inStock ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          {/* Add To Cart */}
          <button
            onClick={() => addToCart(product)}
            disabled={!product.inStock}
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-green-600 px-6 py-4 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-gray-400"
          >
            <ShoppingCart size={22} />
            Add to Cart
          </button>
        </div>

        {/* Sidebar */}
        <div className="space-y-5 lg:col-span-3">
          <div className="rounded-2xl border p-6">
            <h2 className="mb-5 text-xl font-bold">Delivery Information</h2>

            <div className="space-y-5">
              <div className="flex gap-3">
                <Truck className="text-green-600" />

                <div>
                  <h3 className="font-semibold">Free Delivery</h3>

                  <p className="text-sm text-gray-500">
                    Delivery within 2–5 business days.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <RotateCcw className="text-green-600" />

                <div>
                  <h3 className="font-semibold">Easy Returns</h3>

                  <p className="text-sm text-gray-500">Return within 7 days.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <ShieldCheck className="text-green-600" />

                <div>
                  <h3 className="font-semibold">Secure Payment</h3>

                  <p className="text-sm text-gray-500">
                    100% secure payment gateway.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-green-50 p-6">
            <h2 className="mb-4 text-lg font-bold">Why Shop With Us?</h2>

            <ul className="space-y-3 text-sm text-gray-700">
              <li>✔ Premium Quality Products</li>
              <li>✔ Fast Nationwide Delivery</li>
              <li>✔ Trusted by Thousands</li>
              <li>✔ Secure Online Payment</li>
              <li>✔ Friendly Customer Support</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
