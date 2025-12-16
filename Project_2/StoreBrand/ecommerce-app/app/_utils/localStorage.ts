import { ICartItem } from "../_types/cartItems";

export const loadCart = (): ICartItem[] => {
  try {
    const items = window.localStorage.getItem("cartItems");
    return items ? (JSON.parse(items) as ICartItem[]) : [];
  } catch (error) {
    console.error("Error loading shopping cart!", error);
    return [];
  }
};

export const saveCart = (cartItems: ICartItem[]): void => {
  try {
    window.localStorage.setItem("cartItems", JSON.stringify(cartItems));
  } catch (error) {
    console.error("Error saving shopping cart!", error);
  }
};
