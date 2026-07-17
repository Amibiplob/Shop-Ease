"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  return (
    <div
      key={product.id}
      className="overflow-hidden rounded-2xl border bg-white transition hover:-translate-y-1 hover:shadow-xl"
    >
      <Link href={`/products/${product.id}`} className="group block">
        <div className="bg-gray-50 p-3">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="mx-auto rounded-md h-56 w-auto object-contain transition group-hover:scale-105"
          />
        </div>

        <div className="space-y-1 px-5 pt-3">
          <div>
            <p className="text-sm text-gray-500">{product.category}</p>
            <h3 className="text-lg font-semibold">{product.name}</h3>
          </div>

          <div className="flex items-center gap-1">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-600">{product.rating}</span>
          </div>

          <p className="text-2xl font-bold text-green-600">৳{product.price}</p>
        </div>
      </Link>

      <div className="flex justify-between gap-3 p-2">
        <Link
          href={`/products/${product.id}`}
          className="w-full rounded-xl border border-green-600 p-3 text-center font-semibold text-green-600 transition hover:bg-green-50"
        >
          Details
        </Link>

        <button
          onClick={() => addToCart(product)}
          type="button"
          className="w-full rounded-xl bg-green-600 p-3 font-semibold text-white transition hover:bg-green-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
