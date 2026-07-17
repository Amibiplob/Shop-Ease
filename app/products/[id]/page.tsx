import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/data/products";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetails({ params }: Props) {
  const { id } = await params;

  const product = products.find((p) => p.id === Number(id));

  if (!product) notFound();
  
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border bg-white p-6">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-sm font-medium text-green-600">
              {product.category}
            </p>
            <h1 className="mt-2 text-4xl font-bold">{product.name}</h1>
          </div>

          <p className="text-3xl font-bold text-green-600">৳{product.price}</p>

          <p className="text-lg leading-8 text-gray-600">
            {product.description}
          </p>

          <div>
            <h3 className="mb-3 font-semibold">Colors</h3>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <span
                  key={color}
                  className="rounded-full border px-4 py-2 text-sm"
                >
                  {color}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 font-semibold">Sizes</h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <span
                  key={size}
                  className="rounded-lg border px-4 py-2 text-sm"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-semibold">Stock:</span>
            <span
              className={`rounded-full px-3 py-1 text-sm font-medium ${
                product.inStock
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {product.inStock ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          <button className="w-full rounded-xl bg-green-600 py-4 font-semibold text-white transition hover:bg-green-700 lg:w-auto lg:px-8">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
