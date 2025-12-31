import React from "react";
import ProductList from "@/components/shared/product/ProductList";
import { getProducts } from "@/lib/api/products";
import ErrorMessage from "@/components/error/ErrorMessage";
import { IProductProps } from "@/dataTypes/interfaces/product";
import { errorMessageData } from "@/data/errorMessage.data";

export default async function RootHomePage() {
  let products: IProductProps[] = [];
  const { title, message } = errorMessageData;

  try {
    products = await getProducts();
  } catch {
    return <ErrorMessage title={title} message={message} />;
  }

  return (
    <React.Fragment>
      <ProductList data={products} title="Newest Arrivals" />
    </React.Fragment>
  );
}
