import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "../ProductCard";

export default function FeaturedProducts() {
  return (
    <section className="py-7">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <p className="mt-2 text-gray-500">
              Discover our most popular products.
            </p>
          </div>

          <Link href="/products" className="font-semibold text-green-600">
            View All
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
