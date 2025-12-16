"use client";

import React, { useState } from "react";
import Link from "next/link";
import { categories, productsList } from "@/app/_data/products";
import Image from "next/image";

export default function Navigation() {
  const [activeMegaMenu, setActiveMegaMenu] = useState<boolean>(false);

  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeProducts, setActiveProducts] = useState<string | null>(null);

  const icons = [
    "mobile",
    "tv",
    "headphone",
    "laptop",
    "stopwatch",
    "camera",
    "devices",
    "speaker",
  ];

  return (
    <React.Fragment>
      <nav className="fixed top-0 left-0 right-0 bg-[#003d5d] shadow-md py-4 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Brand */}
            <Link href="/" className="flex items-center">
              <div className="flex items-center">
                <div className="w-9 h-9 bg-[#edae49] text-[#003d5b] rounded-full flex items-center justify-center font-bold text-xl mr-2">
                  SB
                </div>
                <span className="text-xl font-bold tracking-tight text-white">
                  Store<span className="text-[#edae49]">Brand</span>
                </span>
              </div>
            </Link>
            {/* End Brand */}
            {/* Search Box */}
            <div className="hidden md:block grow max-w-lg mx-8">
              <form className="group relative">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search for products..."
                  className="w-full bg-white/10 border border-white/20 rounded-full py-2 pl-4 pr-10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#edae49] focus:border-transparent transition-all"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1/2 -translate-y-1/2 text-white/70 p-1.5 hover:text-white rounded-full transition-colors"
                >
                  <i className="bx bx-search text-xl"></i>
                </button>
              </form>
            </div>
            {/* End Search Box */}
            {/* Action and Dropdown */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="group relative">
                <button className="text-white/90 hover:text-[#edae49] transition-colors p-2 rounded-full hover:bg-white/10 flex items-center">
                  <i className="bx bx-store text-2xl mr-1"></i>
                  <span className="hidden md:inline text-base font-medium">
                    Products
                  </span>
                  <i
                    className="bx bx-chevron-down ml-1"
                    onMouseEnter={() => setActiveMegaMenu(true)}
                  ></i>
                </button>
                {/* Mega Menu */}
                {/* Left Colum Category */}
                {activeMegaMenu === true && (
                  <div
                    className="min-w-3xs absolute text-[#003d5d] bg-white top-11 right-0 rounded-2xl p-3 shadow-gray-200 shadow-md"
                    onMouseLeave={() => setActiveMegaMenu(false)}
                  >
                    {categories.map((category, index) => (
                      <div
                        key={index}
                        className="flex hover:bg-gray-100 hover:cursor-pointer items-center justify-between gap-4 py-1.5 px-1"
                        onMouseEnter={() => {
                          setActiveCategory(category.slug);
                          setActiveProducts(category.slug);
                        }}
                        onMouseLeave={() => {
                          setActiveCategory(null);
                          setActiveProducts(null);
                        }}
                      >
                        <div className="flex items-center justify-center gap-2">
                          <div
                            className="shadow-gray-200 shadow-md rounded-full p-0.5"
                            style={{
                              backgroundColor: `${category.color}20`,
                            }}
                          >
                            <i
                              className={`bx bx-${icons[index]} p-2 text-xl`}
                              style={{ color: category.color }}
                            ></i>
                          </div>
                          <div>
                            <h3 className="font-bold text-left">
                              {category.name}
                            </h3>
                            <span className="text-gray-300 text-xs">
                              3 Products
                            </span>
                          </div>
                        </div>
                        <i className="bx bx-chevron-right group">
                          {/* Right Colum Products */}
                          {activeCategory === category.slug && (
                            <div className="absolute top-[9px] left-[238px] w-[264px] rounded-2xl bg-white shadow-gray-200 shadow-md">
                              <div className="bg-gray-300 w-full text-nowrap py-3 px-2 rounded-t-2xl border-b-gray-400">
                                <h2
                                  className="font-bold text-xl"
                                  style={{ color: category.color }}
                                >
                                  {category.slug}
                                </h2>
                                <p className="text-xs mt-0 text-[#30638e]/80">
                                  {category.description}
                                </p>
                              </div>
                              {productsList
                                .filter(
                                  (product) =>
                                    product.category === activeProducts
                                )
                                .slice(0, 3)
                                .map((product) => (
                                  <div
                                    key={product.id}
                                    className="flex items-center justify-center gap-2 p-3"
                                  >
                                    <div className="w-10 h-10 bg-gray-50 p-2 rounded-md flex items-center justify-center">
                                      <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={32}
                                        height={32}
                                        className="w-full h-full object-contain"
                                      />
                                    </div>
                                    <div className="w-full gap-2">
                                      <h4 className="text-xs text-[#30638e]">
                                        {product.name}
                                      </h4>
                                      <span
                                        style={{
                                          color: category.color,
                                        }}
                                      >
                                        ${product.price}
                                      </span>
                                      <Link
                                        href="/product"
                                        className="px-1.5 py-0.5 rounded-full text-white text-xs ml-20"
                                        style={{
                                          backgroundColor: category.color,
                                        }}
                                      >
                                        View
                                      </Link>
                                    </div>
                                  </div>
                                ))}
                              <div className="flex items-center justify-center gap-1 text-[#30638e] font-bold px-2 py-3 rounded-b-2xl border-b-gray-400 bg-gray-300 text-center">
                                <Link href="/product">
                                  See All {category.name}
                                </Link>
                                <i className="bx bx-right-arrow-alt text-xl mt-1"></i>
                              </div>
                            </div>
                          )}
                        </i>
                      </div>
                    ))}
                  </div>
                )}
                {/* End Right Colum Products */}
                {/* End Left Colum Category */}
                {/* End Mega Menu */}
              </div>
              <Link
                href="/cart"
                className="text-white/90 flex justify-center items-center hover:text-[#edae49] p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <i className="bx bx-cart text-2xl"></i>
              </Link>
              <Link
                href="/login"
                className="text-white/90 flex justify-center items-center hover:text-[#edae49] p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <i className="bx bx-user text-2xl"></i>
              </Link>
            </div>
            {/* End Action and Dropdown */}
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
