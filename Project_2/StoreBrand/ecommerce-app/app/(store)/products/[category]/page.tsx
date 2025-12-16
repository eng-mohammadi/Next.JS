import React from "react";
import { productsList, Product, categories } from "@/app/_data/products";
import Link from "next/link";
import ProductCard from "@/app/_components/ProductCard";

export default async function page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const resolvedParams = await params;
  const categorySlug = resolvedParams.category.toLowerCase();

  const categoryProducts: Product[] = productsList.filter(
    (product) => product.category.toLowerCase() === categorySlug
  );

  const categoryInfo = categories.find(
    (category) => category.slug === categorySlug
  );
  const categoryName = categoryInfo?.name || resolvedParams.category;
  const categoryColor = categoryInfo?.color || "#003d5b";

  return (
    <React.Fragment>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Category Banner */}
        <div className="bg-linear-to-r from-[#003d5b] to-[#00798c] rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-3">{categoryName}</h1>
            <p className="text-lg text-white/80 max-w-2xl">
              Explore our selection of premium {categoryName.toLowerCase()}{" "}
              designed for exceptional performance
            </p>
          </div>
        </div>
        {/* Products Grid */}
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              categorySlug={categorySlug}
              categoryColor={categoryColor}
            />
          ))}
        </div>
        {/* Back Navigation */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <Link
            href="/products"
            className="inline-flex items-center text-[#00798c] hover:text-[#003d5b] transition-colors"
          >
            <i className="bx bx-left-arrow-alt mr-2 text-xl"></i>Back to All
            Categories
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}
