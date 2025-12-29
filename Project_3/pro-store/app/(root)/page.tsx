import React from "react";

import { getLatestProducts } from "@/lib/actions/product.action";
import ProductList from "@/components/shared/product/ProductList";

export default async function RootHomePage() {
  const latestProducts = await getLatestProducts();

  return (
    <React.Fragment>
      <ProductList data={latestProducts} title="Newest Arrivals" />
    </React.Fragment>
  );
}
