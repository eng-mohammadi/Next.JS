import React from "react";
import { productsList, categories } from "@/app/_data/products";
import Image from "next/image";
import { toSlug } from "@/app/_utils/slugify";
import Link from "next/link";

export default async function page({
  params,
}: {
  params: Promise<{ category: string; productName: string }>;
}) {
  const { category, productName } = await params;

  const product = productsList.find(
    (product) => toSlug(product.name) === productName
  );
  const productImage =
    typeof product?.image === "string"
      ? product.image
      : "/images/placeholder.png";

  const categorySlug = categories.find((cat) => cat.slug === category);

  return (
    <React.Fragment>
      <div className="w-2/3 h-96 flex justify-between my-6 mx-auto border-gray-500 rounded-2xl shadow-2xl">
        <Image
          src={productImage}
          alt={product?.name || productName}
          width={500}
          height={500}
          className="bg-gray-100 rounded-l-2xl"
        />
        <div className="w-full pl-6">
          <div className="mt-8 p-2">
            <h2 className="font-bold text-3xl text-[#003d5b]">
              {product?.name}
            </h2>
            <span
              className="font-medium"
              style={{ color: categorySlug?.color }}
            >
              ${product?.price}
            </span>
            <p className="font-normal mt-2 text-[#30638e]/80">
              {product?.description}
            </p>
          </div>
          <div className="mt-5">
            <div className="w-11/12 my-6 border-t-2 border-gray-100"></div>
            <span className=" text-[#30638e] font-bold">Quantity</span>
          </div>
          <div className="grid grid-cols-3 mt-2 text-center w-[150px] border-2 border-gray-100 rounded-md">
            <span className="text-xl border-r-2 border-gray-100">-</span>
            <input
              type="number"
              name="quantity"
              id="quantity"
              className="w-full text-lg text-center focus:outline-none"
            />
            <span className="text-xl border-l-2 border-gray-100">+</span>
          </div>
          <div className="flex justify-start gap-7">
            <div
              className="flex items-center justify-center rounded-full w-2/5 mt-8"
              style={{ backgroundColor: categorySlug?.color }}
            >
              <button className="w-10 h-10 -mr-3 text-white flex items-center justify-center">
                <i className="bx bx-cart text-2xl"></i>
              </button>
              <Link
                href="/cart"
                className="px-4 py-2 flex justify-center items-center text-white text-sm font-medium"
              >
                Add to Cart
              </Link>
            </div>
            <div className="flex items-center justify-center rounded-full w-2/5 mt-8 bg-gray-300">
              <Link
                href="/cart"
                className="px-4 py-2 flex justify-center items-center text-[#30638e] text-sm font-medium"
              >
                Go to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
