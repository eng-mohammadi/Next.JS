import React from "react";
import Link from "next/link";

import MealsGrid from "@/src/components/meals/MealsGrid";
import { getMeals } from "@/lib/meals";

export default async function page() {
  const meals = await getMeals();

  return (
    <React.Fragment>
      <header className="meal-page_grid--header">
        <h1>
          Delicious meals, created{" "}
          <span className="meal-page_highlight">by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className="meal-page_cta">
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className="main">
        <MealsGrid meals={meals} />
      </main>
    </React.Fragment>
  );
}
