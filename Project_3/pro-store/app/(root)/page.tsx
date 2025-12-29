import React from "react";

import { sampleData } from "@/db/sampleData";
import ProductList from "@/components/shared/product/ProductList";

export default function RootHomePage() {
  return (
    <React.Fragment>
      <ProductList
        data={sampleData.products}
        title="Newest Arrivals"
        limit={4}
      />
    </React.Fragment>
  );
}
