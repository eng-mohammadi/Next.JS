"use client";

import React, { useState } from "react";
import { loadCart, saveCart } from "@/app/_utils/localStorage";
import { ICartItem } from "../_types/cartItems";

export default function Page({ selectedProduct:ICartItem[]}) {
  const initialCart = loadCart();
  const [items, setItems] = useState<ICartItem[]>(initialCart);

  const [quantity, setQuantity] = useState<number>(
    selectedProduct?.quantity || 0
  );
  const [subTotal, setSubTotal] = useState<number>(
    selectedProduct?.subTotal || 0
  );

  return <React.Fragment></React.Fragment>;
}
