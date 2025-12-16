"use client";

import React, { useState } from "react";
import Cart from "../../_components/Cart";

export default function page() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  return (
    <React.Fragment>
      <Cart selectedProduct={selectedProduct} />
    </React.Fragment>
  );
}
