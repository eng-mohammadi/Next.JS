import { IProductProps } from "@/dataTypes/interfaces/product";

// Fetching all data
export async function getProducts(page: number = 1): Promise<IProductProps[]> {
  const limit = 4;
  const skip = (page - 1) * limit;

  const result = await fetch(
    `http://localhost:3001/products?_limit=${limit}&_start=${skip}`,
    {
      cache: "no-store",
    }
  );

  if (!result.ok) {
    throw new Error("Failed to fetch products");
  }

  return result.json();
}

// Fetch and get slug from query string
export async function getProductBySlug(
  slug: string
): Promise<IProductProps | null> {
  try {
    const result = await fetch(`http://localhost:3001/products?slug=${slug}`, {
      cache: "no-store",
    });

    if (!result.ok) return null;

    const data = await result.json();

    return data.length > 0 ? data[0] : null;
  } catch {
    return null;
  }
}
