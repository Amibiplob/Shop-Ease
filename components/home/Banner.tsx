import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Banner() {
  return (
    <section className="bg-gradient-to-r from-green-50 via-white to-green-100">
      <div className="container mx-auto grid items-center gap-10 overflow-hidden lg:grid-cols-2 lg:px-8">
        {/* Left Content */}
        <div className="flex flex-col justify-center px-4 lg:px-0">
          <span className="mb-5 w-fit rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            ✨ New Collection
          </span>

          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
            Discover Amazing
            <br />
            <span className="text-green-600">Products</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Find premium quality products at unbeatable prices. Shop smarter
            with the latest collections, exclusive deals, and fast delivery.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-7 py-4 font-semibold text-white transition hover:bg-green-700"
            >
              Shop Now
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/categories"
              className="rounded-xl border border-green-600 px-7 py-4 font-semibold text-green-600 transition hover:bg-green-50"
            >
              Browse Categories
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex items-center justify-center py-8 lg:py-0">
          <Image
            src="/banner.jpg"
            alt="Banner"
            width={700}
            height={700}
            priority
            className="h-auto w-full object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
