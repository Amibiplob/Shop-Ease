// app/products/page.tsx

import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  return (
    <main className="container mx-auto py-4">
      {/* Header */}
      <div className="mb-8">
        <p className="text-sm text-gray-500">Home  &gt; Products</p>

        <h1 className="mt-2 text-4xl font-bold">All Products</h1>

        <p className="mt-3 text-gray-600">
          Explore our latest collection of premium products.
        </p>
      </div>
<div className="border-b mb-2"></div>
      {/* Results */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Total {products.length} Products</h2>
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
