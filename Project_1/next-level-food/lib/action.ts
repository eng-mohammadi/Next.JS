"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { saveMeal } from "./meals";
import { IMeal } from "@/src/data-types/interfaces/meal";

function isInvalidInput(value: string): boolean {
  return !value || value.trim() === "";
}

export async function shareMeal(formData: FormData) {
  const title = formData.get("title") as string;
  const meal: IMeal = {
    title: title,
    summary: formData.get("summary") as string,
    instructions: formData.get("instructions") as string,
    image: formData.get("image") as File,
    creator: formData.get("name") as string,
    creator_email: formData.get("email") as string,
    slug: title.toLowerCase().replace(/\s+/g, "-"),
  };

  if (
    isInvalidInput(meal.title) ||
    isInvalidInput(meal.summary) ||
    isInvalidInput(meal.instructions) ||
    isInvalidInput(meal.creator) ||
    isInvalidInput(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    (meal.image instanceof File && meal.image.size === 0)
  ) {
    return { message: "Invalid input!" };
  }

  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}
