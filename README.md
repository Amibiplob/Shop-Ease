# ShopEase — Fashion Store Frontend

> A job-assessment task submission for **OXIVOS — Web Development Agency**

![Next.js](https://img.shields.io/badge/Next.js-16-black) ![React](https://img.shields.io/badge/React-19-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38bdf8)

## About This Project

This repository is my submission for the **Project Theme: Fashion Store Frontend** task set by **OXIVOS Web Development Agency**.

OXIVOS builds e-commerce websites for clothing & fashion brands. The task was to design and build the storefront of a fashion shop — the kind of site a real customer would browse, explore products on, and add items to a cart — using **only local dummy data**, with no backend or authentication required. The focus was on clean UI, a smooth user experience, and production-quality frontend code.

**Agency:** OXIVOS — Web Development Agency


## Task Brief (as given)

Build a modern Fashion Store frontend — a storefront where a customer can browse products, view details, and add items to a cart. Everything runs on local dummy data (no database, no login).

### Required Pages

| # | Page | Description |
|---|------|-------------|
| 01 | **Home** | Hero/banner section plus a grid of featured products |
| 02 | **Products (Listing)** | All products in a responsive grid, with a category filter |
| 03 | **Product Details** | Full info for one product + an "Add to Cart" action |
| 04 | **Cart** | Added items with quantity and total price (client-side state) |

### Fixed Requirements

- [x] Built with **Next.js** (App Router)
- [x] All data comes from a local dummy file — no backend
- [x] Fully responsive (mobile / tablet / desktop)
- [x] Client-side routing between all pages (Next.js routing)
- [x] Cart works using proper state (React Context)
- [x] Handle loading & empty states (empty-cart view included)
- [x] Clean, modular, reusable components with a readable folder structure
- [x] 8+ meaningful Git commits
- [x] Deployed live on Vercel with no console errors
- [x] Public GitHub repo + live link submitted

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Library:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Icons:** lucide-react
- **State management:** React Context API (cart)
- **Package manager:** pnpm
- **Deployment target:** Vercel

## Dummy Data

Product data lives in [`data/products.ts`](./data/products.ts) — 15 fashion/lifestyle products (panjabis, shirts, jeans, shoes, accessories, etc.), each with id, name, category, price, image, rating, colors, sizes, stock status, and description, following the shape suggested in the task brief. Images are sourced from Unsplash.

## Folder Structure

```
Shop-Ease-main/
├─ app/
│  ├─ page.tsx              # Home (Banner + Featured Products)
│  ├─ products/
│  │  ├─ page.tsx           # Product listing
│  │  └─ [id]/page.tsx      # Product details
│  ├─ cart/page.tsx         # Cart page
│  ├─ about/page.tsx
│  └─ layout.tsx            # Root layout (Navbar + CartProvider)
├─ components/
│  ├─ home/                 # Banner, FeaturedProducts
│  ├─ layout/                # Navbar
│  ├─ ui/                    # shadcn/ui primitives
│  └─ ProductCard.tsx
├─ context/CartContext.tsx  # Cart state (add/remove/qty/clear)
├─ hooks/useCart.ts          # useCart() hook
├─ data/products.ts          # Local dummy product data
└─ types/product.ts          # Product type definitions
```

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Live Demo & Repository
- **Live site:** [https://shop-ease-six-sage.vercel.app/](https://shop-ease-six-sage.vercel.app/)
- **GitHub repo:** [https://github.com/Amibiplob/Shop-Ease](https://github.com/Amibiplob/Shop-Ease)
## Submission Notes

Submitted by **Biplob** ([@AmiBiplob](https://github.com/AmiBiplob) · [portfolio](https://amibiplob.vercel.app)) in response to the OXIVOS Fashion Store Frontend task.