"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ShoppingCart, Search, User, ShoppingBag } from "lucide-react";
import { useCart } from "@/hooks/useCart";

const links = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenu, setMobileMenu] = useState(false);
  const { cart } = useCart();
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-white">
            <ShoppingBag size={20} />
          </div>

          <h2 className="text-2xl font-bold">
            Shop<span className="text-green-600">Ease</span>
          </h2>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-medium transition ${
                  active
                    ? "text-green-600"
                    : "text-gray-700 hover:text-green-600"
                }`}
              >
                {link.name}

                {active && (
                  <span className="absolute -bottom-4 left-0 h-1 w-full rounded-full bg-green-600" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Icons */}
        <div className="hidden items-center gap-5 lg:flex">
          <button className="transition hover:text-green-600">
            <Search size={20} />
          </button>

          <button className="transition hover:text-green-600">
            <User size={20} />
          </button>

          <Link
            href="/cart"
            className="relative transition hover:text-green-600"
          >
            <ShoppingCart size={24} />

            <span className="absolute -right-5 -top-2 flex h-5 w-7 items-center justify-center rounded-full bg-green-600 text-xs font-semibold text-white">
              {cart.length}
            </span>
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="lg:hidden"
        >
          {mobileMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="border-t bg-white lg:hidden">
          <div className="space-y-2 px-4 py-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenu(false)}
                className={`block rounded-lg px-4 py-3 font-medium ${
                  pathname === link.href
                    ? "bg-green-50 text-green-600"
                    : "hover:bg-gray-100"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="flex gap-6 border-t pt-5">
              <button className="transition hover:text-green-600">
                <Search size={20} />
              </button>

              <button className="transition hover:text-green-600">
                <User size={20} />
              </button>

              <button className="relative transition hover:text-green-600">
                <ShoppingCart size={24} />

                <span className="absolute -right-5 -top-2 flex h-5 w-7 items-center justify-center rounded-full bg-green-600 text-xs font-semibold text-white">
                  99+
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
