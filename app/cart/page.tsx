"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/hooks/useCart";

export default function CartPage() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  if (cart.length === 0) {
    return (
      <section className="container mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
        <ShoppingBag className="mb-6 h-20 w-20 text-gray-300" />

        <h1 className="text-3xl font-bold">Your cart is empty</h1>

        <p className="mt-3 max-w-md text-gray-500">
          Looks like you haven't added any products yet.
        </p>

        <Link
          href="/products"
          className="mt-8 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
        >
          Continue Shopping
        </Link>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">Shopping Cart</h1>
          <p className="mt-2 text-gray-500">
            {cart.length} Product{cart.length > 1 ? "s" : ""}
          </p>
        </div>

        <button
          onClick={clearCart}
          className="rounded-xl border border-red-500 px-4 py-2 font-medium text-red-500 transition hover:bg-red-50"
        >
          Clear Cart
        </button>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Cart Items */}
        <div className="space-y-5 lg:col-span-2">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-5 rounded-2xl border p-5 md:flex-row"
            >
              <div className="flex h-32 w-32 items-center justify-center rounded-xl bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={120}
                  height={120}
                  className="h-28 w-auto object-contain"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <p className="text-sm text-gray-500">{item.category}</p>

                  <h2 className="text-xl font-semibold">{item.name}</h2>

                  <p className="mt-2 font-bold text-green-600">৳{item.price}</p>
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                  {/* Quantity */}
                  <div className="flex items-center rounded-xl border">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="p-3 hover:bg-gray-100"
                    >
                      <Minus size={18} />
                    </button>

                    <span className="w-12 text-center font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="p-3 hover:bg-gray-100"
                    >
                      <Plus size={18} />
                    </button>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="flex items-center gap-2 text-red-500 hover:text-red-600"
                  >
                    <Trash2 size={18} />
                    Remove
                  </button>
                </div>
              </div>

              {/* Item Total */}
              <div className="flex items-center text-xl font-bold text-green-600">
                ৳{item.price * item.quantity}
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="h-fit rounded-2xl border p-6">
          <h2 className="mb-6 text-2xl font-bold">Order Summary</h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>৳{subtotal}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>

            <div className="flex justify-between">
              <span>Tax</span>
              <span>৳0</span>
            </div>

            <hr />

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>৳{subtotal}</span>
            </div>

            <button className="mt-6 w-full rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700">
              Proceed to Checkout
            </button>

            <Link
              href="/products"
              className="block text-center font-medium text-green-600"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
